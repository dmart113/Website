var express = require('express');
var profile = express();

var user = require('../models/User');
var userDB = require('../models/UserDB');
var items = require('../models/UserItem')
var userPro = require ('../models/UserProfile')
var session = require('express-session')
var itemDB = require('../models/ItemDB')

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let person = userDB.findUser(1);
let arrayItem = [];
let userProfile = new userPro(arrayItem,person);

console.log(user);
console.log(userProfile);
profile.use(session({
  secret: 'test',
  resave: false,
  saveUninitialized:true,
  login:"false",
cookie:{
  theUser:person,
  userProfile:userProfile.getItems()
}}));
session.login = "false";


profile.get('/',function(req,res){
  res.render('index');
});

profile.get('/profile',function(req,res,next){
if(req.session.login == "true"){
  console.log(req.session.login)
  req.session.login = "false";
  res.render('index');
  res.end();
}
else {
  req.session.login = "true";
  res.render('myItems',{item:arrayItem});
}

});

profile.get('/myItems',function(req,res,next){
  if(req.session.login == "true")
  {
    res.render('myItems',{item:arrayItem});
  }
  else {
    res.render('index');
  }
});

profile.get('/items',function(req,res){
  res.render('myItems');
})

profile.post('/items',urlencodedParser, function(req,res,next){
  console.log(req.body);
  var item = itemDB.getItem(req.body.itemID);
  var newItem = new items(item.itemCode_,item.itemName_,item.rating_,"NO");

  var copy = false;
  for(var i =0;i < arrayItem.length;i++){
    if(newItem.itemID == arrayItem[i].itemID){
      copy = true;
    }
  }
  if(req.session.login == "false"){
    console.log("Not logged in");
    res.render('index');
  }
  else if (copy == true) {
    console.log("Aleardy Saved");
    res.render('index');
  }
  else {
    arrayItem.push(newItem);
    res.render('myItems',{item:arrayItem});
  }
  console.log(arrayItem);
  userProfile = new userPro(arrayItem,person);

})

profile.post('/updateRating',urlencodedParser,function(req,res,next){
  console.log(req.body);
  var updateID = req.body.itemID;
  var newRating = req.body.rating;
  for(var i = 0; i< arrayItem.length;i++){
    if(arrayItem[i].itemID == updateID)
    {
      arrayItem[i].rating = req.body.rating;
    }
  }
  userProfile = new userPro(arrayItem,person);
  res.render('myItems',{item:arrayItem});
})
profile.post('/updateFlag',urlencodedParser,function(req,res){
  console.log(req.body);
  var updateID = req.body.itemID;
  for(var i = 0; i< arrayItem.length;i++){
    if(arrayItem[i].itemID_ == updateID)
    {
      arrayItem[i].bought = req.body.bought;
    }
  }
  userProfile = new userPro(arrayItem,person);
  res.render('myItems',{item:arrayItem});
})

profile.post('/deleteItems',urlencodedParser,function(req,res){
  var updateID = req.body.itemID;
  for(var i = 0; i< arrayItem.length;i++){
    if(arrayItem[i].itemID_ == updateID)
    {
      arrayItem.splice(i,1);
    }
  }
  userProfile = new userPro(arrayItem,person);
  res.render('myItems',{item:arrayItem});
})

module.exports = profile;
