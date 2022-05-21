const User = require('./user.model');
const bcrypt = require('bcryptjs');
const userValidator = require('./user.validator');

module.exports.findAll = async (_, res) => {
    User.find()
        .then((user) => res.send(user))
        .catch((err) => res.status(400).json({ error: err }));
};

module.exports.create = async (req, res) => {
    const { error } = userValidator.validate(req.body);
    if (error) return res.send(error.details[0].message);

    const { name, user_name, age } = req.body;

    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;

    newUser = new User(req.body);
    newUser
        .save()
        .then((newUsersaved) => res.json(newUsersaved))
        .catch((err) => res.status(400).json({ error: err }));
};

module.exports.delete = async (req, res) => {
    let user = User.findById(req.params.id);
    if (!user) res.status(404).json({ message: 'User not found' });
    await User.deleteOne({ _id: req.params.id });
    res.json({ message: 'Deleted successfully' });
};

module.exports.update = async (req, res) => {
    const { error } = userValidator.validate(req.body);
    if (error) return res.send(error.details[0].message);

    let user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

        await User.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    user_name: req.body.user_name,
                    password: hashedPassword,
                    age: req.body.age,
                    type: req.body.type,
                },
            },
        )
            .then(() => res.json({ message: 'Updated successfully' }))
            .catch((err) => res.status(400).json({ error: err }));
    }
};
