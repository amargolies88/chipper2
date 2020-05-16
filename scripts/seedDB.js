let db = require("../models");
let mongoose = require("mongoose");

mongoose.connect("mongodb://goatlord:g0atf4c3@ds345597.mlab.com:45597/heroku_4pk5pdn6", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let petSeed = [
    {
        petName: "Woofy",
        microNum: 123,
    },
    {
        petName: "Barky",
        microNum: 124,
    },
    {
        petName: "Crazyeyes",
        microNum: 321,
    },
    {
        petName: "Smellyface",
        microNum: 524,
    },
    {
        petName: "Goatlord",
        microNum: 235,
    },
    {
        petName: "Chippy",
        microNum: 132,
    }
];

db.Pets.deleteMany({})
    .then(() => db.Pets.collection.insertMany(petSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

    