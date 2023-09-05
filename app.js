//connecting database with the web app
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});

//creating database
   //creating bluePrint (Schema) for database
const fruitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,"no name there"]
    },
    rating: {
      type: String,
      min: 1,
      max: 10
    },
    review: String
  }
);

const Fruit = mongoose.model("Fruit",fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Good"
});


const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Kinda sour"
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Great fruit"
});

const peaches = new Fruit({
  name: "Peaches",
  rating: 10,
  review: "Peaches are yummy!"
});

const banana = new Fruit({
  name: "Banana",
  rating: 5,
  review: "Banana are yummy!"
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "Pineapples are great!"
});

// kiwi.save();



// Fruit.insertMany([apple,orange,kiwi,peaches,banana],function(err){
//   if(err){
//     console.log("Insertion error");
//   }else{
//     console.log("Inserted successfully.");
//   }
// })

// Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(fruits);
//   }
// })

// Fruit.forEach(function(fruit){
//   Fruit.find(function(err,fruits){
//     if(err){
//       console.log(err);
//     }else {
//       console.log(fruits);
//     }
//   })
// });

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    fruits.forEach(function(frt){
    console.log(frt.name);
    })
  }
})

// Fruit.updateOne({rating: 5},{name:"Gunana"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully updated");
//   }
// })

// Fruit.deleteMany({name: "Kiwi"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("deleted successfully");
//   }
// })





//people
const personSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    favFruit: fruitSchema
  }
);

const Person = mongoose.model("Person",personSchema);

// const person = new Person(
//   {
//     name: "Amy",
//     age: 12,
//     favFruit: pineapple
//   }
// )

// person.save();

// Person.deleteMany({name:"Nayan"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully deleted");
//   }
// });

Fruit.updateOne({name:"Nayan"},{favFruit: orange},function(err){
  if(err){
    console.log(err);
  }else {
    console.log("successfully updated favFruit");
  }
});

// person.save();
