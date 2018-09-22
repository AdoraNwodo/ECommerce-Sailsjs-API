/**
 * Order.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    ordercode: { 
        type: 'string',
        required: true,
        unique: true, 
    },

    // Add a reference to User
    customer: {
        model: 'user',
        required: true 
    },

    total: { 
        type: 'number',
        required: true  
    },
    
    country: { 
        type: 'string',
        required: true,
    },
    street: { 
        type: 'string',
        required: true,
    },
    city: { 
        type: 'string',
        required: true,
    },
    state: { 
        type: 'string',
        required: true,
    },
    zip: { 
        type: 'string',
        required: true,
    },

    status: { 
        type: 'string',
        required: true,
        isIn: ['pending', 'confirmed', 'in-transit', 'delivered']
    },

    // Add a reference to ProductOrdered
    products: {
      collection: 'productordered',
      via: 'order'
    }

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

