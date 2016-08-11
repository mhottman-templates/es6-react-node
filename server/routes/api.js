'use strict';
const router = require('express').Router();


router.get('/', function(req, res) {
    res.json({
        msg: 'Api Endpoint'
    });
});


module.exports = router;
