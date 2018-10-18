module.exports = {
  attributes: {

    questionId: {
      model: 'Questions',
      required: true
    },
    message: {
      type: 'string',
      required: true,
      maxLength: 2500
    },
    files: {
      type: 'array',
      required: true
    },
    creator: {
      model: 'User',
      required: true
    },
    dislikes: {
      type: 'number',
      required: true
    },
    likes: {
      type: 'number',
      required: true
    }


  },
};