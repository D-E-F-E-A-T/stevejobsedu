module.exports = {
  attributes: {

    question_id: {
      collection:'questions',
      via: 'answer_id'
    },

    message: {
      type: 'string',
      required: true,
      maxLength: 2500,
    },

    files: {
      collection:'files',
      via: 'answer_id'
    },

    user_id: {
      model: 'user',
    },

    dislikes: {
      type: 'number',
    },

    likes: {
      type: 'number',
    }


  },
};