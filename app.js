const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });


//insert some data like a foundation for every parameter
const fruitSchema = new mongoose.Schema({
    name: {
        type: String, //for validation
        requied: [true, "Please check your data entry, no name specified"]

    },
    rating: {
        type: Number, //for validation
        min: 1,
        max: 10
    },
    review: String
});

//fruit is collection

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "healthy"
});
fruit.save()
    // fruit.save()  if we write this then every single time it saves in fruit  


//person is collection
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "mango",
    score: 9,
    review: "Great Fruit."
});

mango.save();

Person.updateOne({ name: "John" }, { favouriteFruit: mango }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated all the fruits to fruitDB");
    }

});

// const person = new Person({
//     name: "Amy",
//     age: 52,
//     favouriteFruit: pineapple
// });

// person.save()


const bnanaa = new Fruit({
    name: "bnana",
    rating: 7,
    review: "healthy"
});

const kiwi = new Fruit({
    name: "kiwi",
    rating: 7,
    review: "healthy"
});

const orange = new Fruit({
    name: "orange",
    rating: 7,
    review: "healthy"
});

//to save all this bnna kiwi orange

// Fruit.insertMany([bnanaa, kiwi, orange], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitDB");
//     }


// });

//to read database 

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        //    console.log(fruits);      for eveything rating etc


        //to get only kiwi bnanaa orange names and nothing
        fruits.forEach(function(fruit) {
            console.log(fruit.name);

        });
    }
});


//to update

// Fruit.updateOne({ _id: "61f8e25f90c393a599b422c1" }, { name: "pesnut" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully update the document.");

//     }
// });


//to delete one function

// Fruit.deleteOne({ _id: "61f8e25f90c393a599b422c1" }, { name: "pesnut" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully deleted the document.");

//     }
// });

// Person.deleteMany({ name: "John" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully deleted the document.");

//     }
// });