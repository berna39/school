const router = require('express').Router();
const UserController = require('../controllers/UserController')

router.get('/', async(_, res) => {
    await res.send('API works perfectly');
});

router.get('/users', UserController.findAll);
router.post('/users', UserController.create);
router.patch('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;
