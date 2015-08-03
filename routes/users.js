var Joi = require('joi');
var Bcrypt = require('bcrypt');

exports.register = function (server, option, next) {
  next();
};

exports.register.attributes = {
  name: 'users-routes',
  version: '0.0.1'
}