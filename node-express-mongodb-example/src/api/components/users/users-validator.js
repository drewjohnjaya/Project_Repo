const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).uppercase().lowercase().symbol().number().required().label('Password'),
    },
  },

  changePassword: {
    body: {
      email: joi.string().email().required().label('Email'),
      old_password: joi.string().min(6).max(32).uppercase().lowercase().symbol().number().required().label('Old_Password'),
      new_password: joi.string().min(6).max(32).uppercase().lowercase().symbol().number().required().label('New_Password'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },
};
