module.exports = {
  attributes: {

    title: {
      type: 'string',
      maxLength: 200,
      required: true
    },

    message: {
      type: 'string',
      maxLength: 2500,
      required: true
    },

    files: {
      collection:'files',
      via: 'question_id'
    },

    user_id: {
      model: 'user',
    },
    
    answer_id: {
      model: 'answers',
    }

  },
};
