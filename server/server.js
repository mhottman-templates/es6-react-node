'use strict';
require('dotenv').config();
const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    expressJWT = require('express-jwt'),
    logger = require('morgan'),
    cors = require('cors');
const port = process.env.PORT || 4000;

const routes = {
    api: require('./routes/api'),
    auth: require('./routes/auth')
};

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', expressJWT({
    secret: process.env.SECRET
}), routes.api);
app.use('/auth', routes.auth);

app.listen(port, function() {
    console.log("Api served on", port);
});
