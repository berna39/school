const router = require('express').Router();

router.get('/', async(req, res) => {
    await res.send('API works perfectly');
});