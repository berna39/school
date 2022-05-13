const router = require('express').Router();
const User = require('../models/user.model');

router.get('/', async(_, res) => {
    await res.send('API works perfectly');
});

router.get('/users', (_, res)=>{
    User.find().then(
        user => res.send(user)
    ).catch(err => res.status(400).json({"error": err})
    );
});

router.post('/users', async (req, res)=>{
    const { name, user_name, age } = req.body;
    newUser = new User(req.body);
    newUser.save().then(
        newUsersaved => res.json(newUsersaved)
    ).catch(
        err => res.status(400).json({"error": err})
    );
});

router.patch('/users/:id', async (req, res)=>{
    let user  = await User.findById(req.params.id);
    if(!user)
    {
        res.status(404).json({message: "user not found"});
    }
    else
    {
        await User.updateOne(
            {_id: req.params.id},
            { $set: { name: req.body.name, user_name: req.body.user_name, age: req.body.age, type: req.body.type } }
        ).then(
            updatedUser => res.json({message: "Updated successfully"})
        ).catch(
            err => res.status(400).json({"error": err})
        );
    }
});

router.delete('/users/:id', async (req, res)=>{
    let user = User.findById(req.params.id);
    if(!user) res.status(404).json({message: "User not found"});
    await User.deleteOne({_id: req.params.id});
    res.json({message: "Deleted successfully"});
});

module.exports = router;
