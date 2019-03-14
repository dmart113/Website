class User{
  constructor(userID,first,last,email)
  {
    this.userID_ = userID;
    this.first_ = first;
    this.last_ = last;
    this.email_= email;

  }
 get userID(){
   return this.userID_;
 }
 set userID(value){
  this.userID_ = value;
 }
 get first(){
   return this.first_;
 }
 set first(value){
   this.first_ = value;
 }
 get last(){
   return this.last_;
 }
 set last(value){
   this.last_ = value;
 }
 get email(){
   return this.email_;
 }
 set email(value){
   this.email_ = value;
 }
}
module.exports = User;
