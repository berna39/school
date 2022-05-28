const Joi = require('@hapi/joi');

module.exports = Joi.object({
    user_name: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});
