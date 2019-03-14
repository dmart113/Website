class UserItem{
  constructor(itemID,item,rating,bought){
    this.itemID_ = itemID;
    this.item_ = item;
    this.rating_ = rating;
    this.bought_ = bought;
  }
  get itemID(){
    return this.itemID_;
  }
  set itemID(value){
    this.itemID_ = value;
  }
  get item(){
    return this.item_;
  }
  set item(value){
    this.item_ = value;
  }
  get rating(){
    return this.rating_;
  }
  set rating(value){
    this.rating_ = value;
  }
  get bought(){
    return this.bought_;
  }
  set bought(value){
    this.bought_ = value;
  }
}

module.exports = UserItem;
