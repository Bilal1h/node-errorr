var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get("/",function(req,res){
  res.render("../views/index.ejs",{title:"MYF"})
});

router.get("/create", async function(req,res){
  const createduser = await userModel.create({
    username: "Shaheer1h",
    name: "Shaheer",
    age:123
  });
  res.send("Ban gayaaa");
  res.send(createduser);


});


module.exports = router;
