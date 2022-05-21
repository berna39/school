const Joi = require('@hapi/joi');

const userValidator = Joi.object({
    name: Joi.string().min(6).required(),
    user_name: Joi.string().min(6).required().email(),
    age: Joi.number().min(18).required(),
    password: Joi.string().min(6).required(),
});

module.exports = userValidator;
