const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../users/user.model');
const authValidator = require('./auth.validator');

module.login = async(req, res) => {
    const { error } = authValidator.validate(req.body)
    if (error) return res.send(error.details[0].details);

    const user = await User.findOne({user_name: req.body.user_name});
    if(!user) return res.status(400).send('Username not found');

    const validPassword = await bcrypt.compareSync(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Incorrect password');

    const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);

    res.header('token', 'Bearer '+token).send(token);
}