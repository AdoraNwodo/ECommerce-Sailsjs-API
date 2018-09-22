/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: async function(req,res){

		try{

			var createdUser = await User.create(req.allParams()).fetch();

			return res.ok({
							'status': 'success', 
							'message' : 'user_created', 
							'data' : createdUser
						});

		}catch(err){

			return res.serverError(err.message);	//err.name , err.message, err.stack, err.code

		}

	},

	show: async function(req,res){

		try{

			var user = await User.findOne({

				where: {id: req.param('id')}

			});

			return res.ok({
							'status': 'success', 
							'message' : 'user_details', 
							'data' : user
						});

		}catch(err){

			return res.serverError(err.message);

		}

	},


	update: async function(req, res){

		try{

			var updatedUser = await User.update({id: req.param('id')})
									 .set(req.allParams())
									 .fetch();

			return res.ok({
							'status': 'success', 
							'message' : 'user_updated', 
							'data': updatedUser
						});

		}catch(err){

			return res.serverError(err.message);

		}

	},


	destroy: async function(req, res){

		try{

			await User.destroy({id: req.param('id')});

			return res.ok({
							'status': 'success', 
							'message' : 'user_deleted'
						});

		}catch(err){

			return res.serverError(err.message);

		}

	},


	login: async function(req, res){

		if( !req.param('email') || !req.param('password')){

			return res.serverError("You must enter both username and password");

		}

		try{

			//get the user with the specified email
			var user = await User.findOne({

				where: { email: req.param('email') }

			});

			if( !user ){
				//user does not exists. Journey ends here
				return res.serverError("This username does not exist");

			}

			//check if users password is correct
			require('bcrypt').compare( req.param('password'), user.password, function(error, resp) {	
				  
				  if(resp) {	

				   // Passwords match
				   return res.ok({
							'status': 'success', 
							'message' : 'login_successful',
							'data' : user
						});

				  } else {	

				   // Passwords don't match	
				   return res.serverError("The username and password do not match");
				  } 	
			});	

		}catch(err){

			return res.serverError(err.message);

		}

	}
  
};

