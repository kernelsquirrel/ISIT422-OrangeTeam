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
//************************************************************ */

// for this version, we will keep data on server in an array
armorArray = [];

//constructor
function Armor(pId, pName, pRating, pStrength, pDefense,pSpeed) {
  this.id = pId;
  this.name = pName;
  this.rating = pRating;
  this.strength = pStrength;
  this.defense = pDefense;
  this.speed = pSpeed;
  }

  // pre-populate with some data
armorArray.push( new Armor (111, 'Reinforced clothing', "1/0", 1 , 0 , 0) );
armorArray.push( new Armor (112, 'Kevlar vest', "1/3", 1, 0, 0) );
armorArray.push( new Armor (113, 'Flak Jacket', "2/4", 1, -1, 0) );
armorArray.push( new Armor (114, 'Full Riot Gear', "3/5", 2, -2, -1) );
armorArray.push( new Armor (115, 'Leather hard',"2/0", 2, -1, 0) );
armorArray.push( new Armor (116, 'Chainmail',"3/1", 3, -2, -2) );
armorArray.push( new Armor (117, 'Plate',"4/2", 3, -2, -3) );

router.get('/heroes', function(req, res) {
  res.status(200).json(armorArray);
    console.log(armorArray);
});

router.get('/heroes/:id', function(req, res) {
  let found = false;
    for(var i=0; i < armorArray.length; i++)
    {
      if( armorArray[i].id == req.params.id)
      {
        console.log(armorArray[i]);
        found = true
        res.status(200).json(armorArray[i]);
      }
    }
    if(found === false){
      res.status(500).send("no such armor");
      }

  });



  router.put('/heroes/:id', function(req, res) {
    var changedArmor = req.body; 
   for(var i=0; i < armorArray.length; i++)
   {
     if( armorArray[i].id == req.params.id)
     {
       armorArray[i].name = changedArmor.name;
       armorArray[i].rating = changedArmor.rating;
       armorArray[i].strength = changedArmor.strength;
       armorArray[i].defense = changedArmor.defense;
       armorArray[i].speed = changedArmor.speed;
       console.log(armorArray[i]);
       found = true
       res.status(200).json(armorArray[i]);
     }
   }
   if(found === false){
     res.status(500).send(err);
   }
 });



// delete is used to delete existing object
router.delete('/heroes/:id', function(req, res) {
  for(var i=0; i < armorArray.length; i++)
  {
    if( armorArray[i].id == req.params.id)
    {
      armorArray.splice(i,1);
      found = true
      res.status(200).json('deleted armor');
    }
  }
  if(found === false){
    res.status(500).send(err);
  }
});



router.post("/heroes", function(req, res) {

   // sort by id (need to create a new, unique id)
   armorArray.sort(function(a, b) {
    return (a.id) - (b.id);
   });
   var newID = (armorArray[armorArray.length-1].id) +1;
   var newArmor = new Armor(newID, req.body.name, req.body.rating, reg.body.strength, reg.body.defense, reg.body.speed);  // need to fix !!!!!
   armorArray.push(newArmor);
   res.status(200).json(newArmor);  // returns the new hero which the observable 
  // uses to update the client side array so the display looks correct.
});


// router.post("/heroes", function(req, res) {

//   // sort by id (need to create a new, unique id)
//   armorArray.sort(function(a, b) {
//    return (a.id) - (b.id);
//   });
//  var newID = (armorArray[armorArray.length-1].id) +1;

//  var newArmor = req.body;
//  newArmor.id = newID;
//  armorArray.push(newArmor);
//  res.status(200).json(newArmor);  // returns the new hero which the observable 
//  // uses to update the client side array so the display looks correct.
// });

module.exports = router;
