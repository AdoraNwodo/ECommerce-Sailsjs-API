module.exports = {


  friendlyName: 'Send text message',


  description: 'Sends text to user when an order is placed',


  inputs: {
    phonenumber: {
      type: 'string',
      example: '+2348105854911',
      description: 'The phone number the mail should be sent to',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var accountSid = 'AC26a85bce9b172c57a8c9655cdf672314'; // Your Account SID from www.twilio.com/console
    
    var authToken = '9e1fc5d4706363292ca64fd68235f99d';   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: 'Hello, your EverythingShop order has been placed. Please see your email for more details.',
        to: `${inputs.phonenumber}`,  // Text this number
        from: '+14784883320' // From a valid Twilio number
    })
    .then((message) => console.log(message)).done();

    // All done.
    return exits.success();

  }


};

