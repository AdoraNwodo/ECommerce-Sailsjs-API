/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


	create: async function(req,res){

		try{

			var createdOrder = await Order.create(
					{ 	
						ordercode: require("randomstring").generate(10), 
						customer: req.param('customer'),
						status: "pending",
						country: req.param('country'),
						street: req.param('street'),
						city: req.param('city'),
						state: req.param('state'),
						zip: req.param('zip'),
						total: req.param('total')

					})
				.fetch();


			var productsOrdered = await ProductOrdered.createEach(JSON.parse(req.param('cart'))).fetch();

			var products_ordered_ids = [];
			for(x in productsOrdered){
			   products_ordered_ids.push(productsOrdered[x].id);
			   await ProductOrdered.update({id: productsOrdered[x].id}).set({ order: createdOrder.id });
			}

			await Order.addToCollection(createdOrder.id, 'products').members(products_ordered_ids);

			var order = await Order.findOne({

				where: {id: createdOrder.id}

			}).populate(['customer']);

			var products = await ProductOrdered.find({

				where: {order: createdOrder.id}

			}).populate(['product']);

			//send email and text message
			var fullName = order["customer"]["firstname"]+" "+order["customer"]["lastname"];
			var emailStatus = await sails.helpers.sendEmail.with(
				{ 
					email: order["customer"]["email"] , 
					fullname: fullName,  
					cartItems: req.param('cart'),
					total: req.param('total')
				});
			var phoneStatus = await sails.helpers.sendTextMessage.with({ phonenumber: order["customer"]["phonenumber"]});

			
			return res.ok({
							'status': 'success', 
							'message' : 'order_created', 
							'data' : { 'order' : order , 'products' : products }
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},


	show: async function(req,res){

		try{

			var order = await Order.findOne({

				where: {id: req.param('id')}

			}).populate(['customer', 'products']);

			return res.ok({
							'status': 'success', 
							'message' : 'order_details', 
							'data' : order
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},


	update: async function(req, res){

		try{

			//update order status
			var updatedOrder = await Order.update({id: req.param('id')})
									 .set({status: req.param('status')})
									 .fetch();

			return res.ok({
							'status': 'success', 
							'message' : 'order_updated', 
							'data': updatedOrder
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},  

};

