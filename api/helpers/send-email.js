module.exports = {


  friendlyName: 'Send email',


  description: 'Sends email to user when an order is placed',


  inputs: {
    cartItems: {
      type: 'string',
      example: '[{product: 0, quantity: 0, description: {}}]',
      description: 'A stringified JSON of cart Items',
      required: true
    },
    email: {
      type: 'string',
      example: 'nennenwodo@gmail.com',
      description: 'The email address the mail should be sent to',
      required: true
    },
    fullname: {
      type: 'string',
      example: 'Nenne Nwodo',
      description: 'The fullname of the user the email is being sent to',
      required: true
    },
    total: {
      type: 'string',
      example: '50,000',
      description: 'The total of the users order',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    //prepare email HTML
    var cart = JSON.parse(`${inputs.cartItems}`);

    var items = "";
      for(i in cart){
        items = items + "Name - " + cart[i].description.name + ". Quantity - "+ cart[i].quantity +" , <br />";
      }

    var emailText = "Dear "+ `${inputs.fullname}` +", <br />You have placed " + 
    "an order with Everything Shop. Your total is "+ `${inputs.total}` +". <br />The items ordered are listed below: " + items +
    "<br />Regards,<br />EverythingShop";


    //define keys
    const SparkPost = require('sparkpost');
    const client = new SparkPost('9480de3a0d8439abacd3832b734ae32d1ad52314');


    //send email
    client.transmissions.send({
      options: {
        sandbox: false
      },
      content: {
        from: 'nenne@lanre.co',
        subject: 'Your EverythingShop order',
        html:'<html><body><p>' + emailText + '</p></body></html>'
      },
      recipients: [
        {address: `${inputs.email}`}
      ]
    })
    .then(data => {
      console.log('Email sent');
      console.log(data);
    })
    .catch(err => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });


    // All done.
    return exits.success();

  }


};

