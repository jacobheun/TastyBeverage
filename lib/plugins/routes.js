var app;

exports.name = "routes";

exports.attach = function(options) {
  app = this;

  app.router.get('/beers',
    function() {

    });
};