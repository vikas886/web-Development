// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vikas', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  // console.log("We are connected");
});

var kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  // console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var vikaskitty = new Kitten({ name: 'vikaskitty name' });
var vikaskitty1 = new Kitten({ name: 'vikaskitty' });
// console.log(vikaskitty.name); 
// vikaskitty.speak();

vikaskitty.save(function (err, vikaskitty) {
  if (err) return console.error(err);
  // vikaskitty.speak();
});
vikaskitty1.save(function (err, v) {
  if (err) return console.error(err);
  // v.speak();
});

Kitten.find({name: 'vikaskitty name'},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})