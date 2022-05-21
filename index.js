const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./db/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', require('./api/ressources/auth/auth.router'));
app.use('/users', require('./api/ressources/users/user.router'));

app.listen(4000, () => console.log(`Listening on 4000`));
