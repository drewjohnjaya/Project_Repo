const joi = require('joi');

module.exports = {
  createArticle: {
    body: {
      title: joi.string().min(1).max(100).required().label('Title'),
      content: joi.string().email().required().label('Content'),
      user_id: joi.number().required().label('User ID'),
      date_created: joi.date().required().label('Date Created')
    },
  },

  updateArticle: {
    body: {
      title: joi.string().min(1).max(100).required().label('Title'),
      content: joi.string().email().required().label('Content'),
      user_id: joi.number().required().label('User ID'),
      date_created: joi.date().required().label('Date Created')
    },
  },
};
