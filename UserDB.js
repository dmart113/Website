var User = require('../models/User');

module.exports.listUsers = function(){
  let userList = [];
  for(var i =0; i <data.length;i++)
    {
      let user = new User (
        data[i].userID,
        data[i].first,
        data[i].last,
        data[i].email
      );
      userList.push(user);
    }
  return userList;
};
module.exports.findUser = function(userID){
  for(var i =0; i <data.length;i++)
    {
  if(data[i].userID == userID){
      let user = new User (
        data[i].userID,
        data[i].first,
        data[i].last,
        data[i].email
    );
        console.log("User"+JSON.stringify(user));
        return user;
    }
  }
};



var data = [
  {
    userID:1,
    first:"Diego",
    last:"Martinez",
    email:"dmart113@uncc.edu"
  }
];
