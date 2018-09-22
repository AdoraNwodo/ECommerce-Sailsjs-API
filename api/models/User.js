/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        firstname: { 
            type: 'string',
            required: true 
        },

        lastname: { 
            type: 'string',
            required: true  
        },

        phonenumber: { 
            type: 'string',
            required: true,
            unique: true,
            minLength: 7,
            maxLength: 14  
        },

        email: { 
            type: 'string',
            required: true,
            isEmail: true,
            unique: true   
        },

        password: { 
            type: 'string',
            minLength: 6,
            required: true  
        },

        // Add a reference to Orders
        orders: {
          collection: 'order',
          via: 'customer'
        }


        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    },


    beforeCreate: function (valuesToSet, proceed) {

        // Hash password
        require('bcrypt').hash(valuesToSet.password, 10, function(err, hashedPassword){

            if (err) { return proceed(err); }
            valuesToSet.password = hashedPassword;
            return proceed();

        });
        
    },


    customToJSON: function(){

        return _.omit(this, ['password']);

    },

};

