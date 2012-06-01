var flatiron = require('flatiron'),
    path = require('path'),
    routes = require('./lib/plugins/routes'),
    connect = require('connect'),
    expressUglify = require('express-uglify'),
    pkg = require('./package.json'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

var port = app.config.get('port');

app.use(flatiron.plugins.http, {

          before: [
            connect.static(__dirname + '/public', {maxAge: 86400000}),
            connect.staticCache()
          ],

          after: [],

          onError: function(err) {
            if(err) {
              this.res.writeHead(404, { "Content-Type": "text/html" });
              this.res.end('404');
            }
          }
        });

app.use(routes);

app.start(port,
  function(err) {
    if(err) throw err;

    require('mca')(app.log, {
                     port: port
                   });
  });