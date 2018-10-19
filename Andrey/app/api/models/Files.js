module.exports = {
    attributes: {
  
      file_name: {
        type: 'string',
        maxLength: 200,
        required: true,
    },

      url: {
        type: 'string',
        maxLength: 255,
        required: true
      },

      user_id: {
        model: 'user',
      },

      question_id:{
        model: 'questions'
      },

      answer_id:{
        model: 'answers'
      }
  
    },
  };
  