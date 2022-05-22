const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        res.status(401).json({ message: 'Access denied' });
    } else {
        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
