module.exports = {


  friendlyName: 'Test',


  description: 'Test test.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/test/test'
    },
  },


  fn: async function (inputs, exits) {

    let id = this.req.param('id');


    let user = await User.find({
      id : id
    });



    return exits.success({
      user: user[0]
    });

    // return exits.success({
    //
    //     email: user.emailAddress
    // });

  },



};
