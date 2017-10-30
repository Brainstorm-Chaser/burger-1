// GITHUB REPO: https://github.com/dbmarshall/burger.git 
// HEROKU APP: https://burger-davidm.herokuapp.com/
// HEROKU GIT: https://git.heroku.com/burger-davidm.git 

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var exphbs = require('express-handlebars');

// Express Server
var app = express();
var PORT = process.env.PORT || 6060;

// Make available static files in /public/ directory
app.use(express.static('./public'));

// Parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
// require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes')(app);

app.get('/', function (req, res) {
  res.send('Got a GET request')
})

// Server Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});