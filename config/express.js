var express = require('express');
var home = require('../app/routes/home');
var load = require('express-load');

module.exports = function() {
  var app = express();

  //varivel de ambiente
  app.set('port', 3000);

  //middleware
  app.use(express.static('./public'));

  //tem que ser em baixo do middleware express.static
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
