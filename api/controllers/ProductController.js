/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


	create: async function(req,res){

		try{

			var createdProduct = await Product.create(req.allParams()).fetch();

			//dummy sku
			var storeKeepingUnit = require("randomstring").generate(10)+"-"+createdProduct.id;

			var product = await Product.update({id: createdProduct.id})
									 .set({ sku : storeKeepingUnit})
									 .fetch();

			return res.ok({
							'status': 'success', 
							'message' : 'product_created', 
							'data' : product
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},


	show: async function(req,res){

		try{

			var product = await Product.findOne({

				where: {id: req.param('id')}

			});

			return res.ok({
							'status': 'success', 
							'message' : 'product_details', 
							'data' : product
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},


	update: async function(req, res){

		try{

			var updatedProduct = await Product.update({id: req.param('id')})
									 .set(req.allParams())
									 .fetch();

			return res.ok({
							'status': 'success', 
							'message' : 'product_updated', 
							'data': updatedProduct
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},


	destroy: async function(req, res){

		try{

			await Product.destroy({id: req.param('id')});

			return res.ok({
							'status': 'success', 
							'message' : 'product_deleted'
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},


};

