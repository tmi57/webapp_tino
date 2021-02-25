var express = require('express');
var app = express();
app.use(express.static('webApp')); // myApp will be the same folder name.
app.get('/', function (req, res, next) {
    res.redirect('/');
});
app.listen(8080, 'localhost');
console.log('My Website is starting on port 8080');