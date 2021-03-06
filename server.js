var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use('/data', express.static(__dirname + '/data'));

app.use('/assets', express.static(__dirname + '/assets'));

app.use('/js', express.static(__dirname + '/js'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
