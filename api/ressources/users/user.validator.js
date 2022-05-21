const Joi = require('@hapi/joi');

module.exports = Joi.object({
    name: Joi.string().min(6).required(),
    user_name: Joi.string().min(6).required().email(),
    age: Joi.number().min(18).required(),
    password: Joi.string().min(6).required(),
});

