const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.LOCAL_DB_PATH, (err) => {
    if (err) {
        console.error(`Error detected : ${err.message}`);
    } else {
        console.log('Database connected');
    }
});

mongoose.Promise = global.Promise;
