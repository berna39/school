const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_PATH, () => {
    console.log('Database connected');
});

mongoose.Promise = global.Promise;