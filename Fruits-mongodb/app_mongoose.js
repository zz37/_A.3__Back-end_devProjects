
// this is with the mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

// create a new schema --> blueprint of data to save on db
const fruitSchema = new mongoose.Schema({
  // schema with data validators
  name: {
    type: String,
    required: [true, "Please specify the name field."]

  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// then create a mongoose model, which creates the collection using the above schema
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 3,
  review: "Solideros"
});

//fruit.save(); // save the above document inside the fruitDB

// we can add a relationship for the person and fruit
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
  
const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "POPO GRANDE"
});

pineapple.save();

const person = new Person({
  name: "LAS des",
  age: 4,
  favouriteFruit: pineapple
});

/*const person = new Person({
  name: "Jhon",
  age: 34
});*/

person.save();


const kiwi = new Fruit({
  name: "Kiwi",
  rating: 2,
  review: "Weird"
})

const orange = new Fruit({
  name: "Orange",
  rating: 22,
  review: "MMMM"
})
const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "MM bananas mm DK"
})

/*// to insert a lot use the below code
Fruit.insertMany([kiwi,orange,banana], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully saved all fruits to fruitDB");
  }
});*/

// read records with mongoose  
Fruit.find(function (err, fruits) {

  if (err === true) {
    console.log(err);
  } else {
    //console.log(fruits);
    
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }

  mongoose.connection.close(true);
  
})

// update of a record of APPLE
/*Fruit.updateOne({_id: "632b573fe958c47d254c1042"}, {name: "POPO GRANDOTA"}, function(err){
  (err) ? console.log(err) : console.log("Succesfully updated the document.");
})*/

// for delete a record
/*Fruit.deleteOne({name: "Apple"}, function(err){
  (err) ? console.log(err) : console.log("Succesfully deleted the document.");
})*/


// delete all jhons
/*Person.deleteMany({name: "Jhon"}, function(err){
  (err === true) ? console.log(err) : console.log("Succesfully deleted all the document.");
})*/

