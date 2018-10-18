module.exports = {
  attributes: {

    title: {
      type: 'string',
      required: true,
      maxLength: 200
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
    bestAnswer: {
      model: 'Answers',
      required: true
    }

  },
};
