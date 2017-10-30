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

// Display static files in /public/ directory
app.use(express.static('./app/public'));

// Parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
// require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes')(app);

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

// Server Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});