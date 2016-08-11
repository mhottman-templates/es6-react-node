'use strict';
const express = require('express'),
    app = express(),
    path = require('path');
const port = 4001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.renderHTML = function(file) {
        res.sendFile(path.resolve(__dirname, './public/' + file + '.html'));
    };
    next();
});

app.get('*', function(req, res) {
    res.renderHTML('index');
});


app.listen(port, function() {
    console.log("Client served on http://localhost:"+port);
});
