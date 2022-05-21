const router = require('express').Router();
const userRouter = require('..//api/ressources/users');

router.get('/', async (_, res) => {
    await res.send('API works perfectly');
});

module.exports = router;
