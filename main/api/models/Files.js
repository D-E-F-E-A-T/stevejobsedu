/**
 * Files.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    file_name: {
      type: 'string',
      required: true,
      maxLength: 255,
      example: 'example.jpg'
    },

    url: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 255,
      example: 'http://example.com/example.jpg'
    },

    url_thumb: {
      type: 'string',
      unique: true,
      maxLength: 255,
      example: 'http://example.com/example.jpg'
    },

    type: {
      type:'string',
      maxLength: 255,
      example: 'pdf, jpg, html......'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    question_id: {
      model: 'questions'
    },

    answer_id: {
      model: 'answers'
    }
  },

};

