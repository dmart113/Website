var User = require('../models/User');
var UserItem = require('../models/UserItem');


class UserProfile {
  constructor(userItems, userName)
  {
    userItems = [];
    this.userName_ = userName,
    this.userItem_ = userItems;
  }
  addItems(itemID,item,rating,bought){
    var item = new UserItem(itemID,item,rating,bought);
    this.userItem_.push(item);
  }
  removeItem(itemID){
    for(var i = 0 ; i < this.userItem_.length; i++)
    {
      if(this.userItem_[i].itemID == itemID)
      {
        this.userItem_.splice(i,i+1);
      }
    }
  }
  updateRating(itemID,rating){
    for(var i = 0 ; i < this.userItem_.length; i++)
    {
      if(this.userItem_[i].itemID == itemID)
      {
        this.userItem_[i].rating = rating;
      }
    }
  }
  updateBought(itemID,bought){
    for(var i = 0 ; i < this.userItem_.length; i++)
    {
      if(this.userItem_[i].itemID == itemID)
      {
        this.userItem_[i].bought = bought;
      }
    }
  }
  getItems(){
    return this.userItem_;
  }
  emptyProfile(){
    this.userItem_ = [];
  }
}
module.exports = UserProfile;
