var app;

exports.name = "routes";

exports.attach = function(options) {
  app = this;

  app.router.get('/',
    function() {
      var fs = require('fs');
      
      if(process.env.NODE_ENV === "development")
        var less = require('less');

        var less_data = fs.readFileSync('public/css/style.less', 'utf-8');

        less.render(less_data, function (e, css) {
            fs.writeFileSync('public/css/style.css', css);
        });
      }

      this.res.end( fs.readFileSync('public/home.html', 'utf-8') );
    });

  app.router.get('/beers',
    function() {
    });
};