var express = require('express');
var router = express.Router();



// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

const ToDos = require("../ToDos");

// edited to include my non-admin, user level account and PW on mongo atlas
// and also to include the name of the mongo DB that the collection is in (TaskDB)
const dbURI =
  //"mongodb+srv://someone:somepw@somecluster.mongodb.net/ToDosDB?retryWrites=true&w=majority";
  "mongodb+srv://bcuser:bcuser@tiffcoleisit42210062020.rztff.azure.mongodb.net/ToDosDB?retryWrites=true&w=majority";

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* post a new ToDo and push to Mongo */
router.post('/NewToDo', function(req, res) {

  let oneNewToDo = new ToDos(req.body);  
  console.log(req.body);
  oneNewToDo.save((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
    console.log(todo);
    res.status(201).json(todo);
    }
  });
});

module.exports = router;
