module.exports = {


  friendlyName: 'View edit profile',


  description: 'Display "Edit profile" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/edit-profile',
    }

  },


  fn: async function (inputs, exits) {

    console.log(inputs);
    console.log(exits);
    return exits.success();

  }


};
