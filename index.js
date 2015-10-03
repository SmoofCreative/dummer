var express = require('express');
var exphbs  = require('express-handlebars');

var controller = require('./controller');
var instrument = require('./instrument');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('home');
});

app.get('/controller', controller.route);

app.get('/instrument', instrument.route);


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
