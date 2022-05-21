const User = require('./user.model')
const bcrypt = require('bcryptjs');

module.exports.findAll = async(_, res) => {
    User.find().then(
        user => res.send(user)
    ).catch(err => res.status(400).json({"error": err}));
};

module.exports.create = async (req, res) => {
    const { name, user_name, age } = req.body;

    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;

    newUser = new User(req.body);
    newUser.save().then(
        newUsersaved => res.json(newUsersaved)
    ).catch(
        err => res.status(400).json({"error": err})
    );
};

module.exports.update = async(req, res) => {
    let user  = await User.findById(req.params.id);
    if(!user)
    {
        res.status(404).json({message: "user not found"});
    }
    else
    {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

        await User.updateOne(
            {_id: req.params.id},
            { $set: { name: req.body.name, user_name: req.body.user_name, password: hashedPassword, age: req.body.age, type: req.body.type } }
        ).then(
            updatedUser => res.json({message: "Updated successfully"})
        ).catch(
            err => res.status(400).json({"error": err})
        );
    }
};

module.exports.delete = async(req, res) => {
    let user = User.findById(req.params.id);
    if(!user) res.status(404).json({message: "User not found"});
    await User.deleteOne({_id: req.params.id});
    res.json({message: "Deleted successfully"});
};

module.exports.findById = async(req, res) => {

};
