/*
install mongodb
install mongoosejs
require and setup connection
make schema
create model

*/
//require and setup connection (DONE)
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");
//make schema (DONE)
  //scheme amtlba aapkoye batana hai ke banne wala har document mein kia kia hoga

const userschema = mongoose.Schema({
  username:String,
  name:String,
  age:Number

})

//create model
//mongoose.model(model_name, schema)
module.exports = mongoose.model("user",userschema)

// is poore code mein main database practicekaro banega user schema db ka schema banjaega aur user name ka  model banjaega 
