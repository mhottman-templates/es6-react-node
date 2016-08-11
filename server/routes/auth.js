'use strict';
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

//check if authenticated user
router.get('/', expressJWT({secret: process.env.SECRET}), function(req, res) {
    var user = req.user;
    res.status(200).json({
        user: user,
        authenticated: true
    });
});


router.post('/login', function(req, res) {

});

router.post('/signup', function(req, res) {

});

router.post('/logout', function(req, res) {

});

module.exports = router;
