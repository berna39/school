const router = require('express').Router();
const User = require('../models/user.model');

router.get('/', async(req, res) => {
    await res.send('API works perfectly');
});

router.get('/users', (req, res)=>{

    User.find().then(
        user => res.send(user)
    ).catch(err => res.status(400).json({"error": err})
    );

});

router.post('/users', async (req, res)=>{
    const { name, user_name, age } = req.body;
    newUser = User.save(req.body);
    await newUser.save().then(
        newUsersaved => res.json(newUsersaved)
    ).catch(
        err => res.status(400).json({"error": err})
    );
});

module.exports = router;
