var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.ObjectId,
    BeerSchema, app;

exports.name = "model";

BeerSchema = new Schema({
    id: ObjectId,
    name: String,
    brewery: String,
    style: String,
    location: {
      city: String,
      state: String,
      country: String,
      latitude: Number,
      longitude: Number
    },
    abv: Number,
    ibu: Number,
    imageUrl: String
  });

exports.attach = function(options) {
  app = this;

  app.model = function() {
    mongoose.connect(
      app.config.database.uri, {
        user: app.config.database.username,
        pass: app.config.database.password
      });

    return {
      Beer: mongoose.model('Beer', BeerSchema)
    };
  };

};