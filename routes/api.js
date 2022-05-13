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

module.exports = router;
