const express = require("express"); 
const request = require("request");

const app = express(); 
app.use(express.urlencoded({extended: true})); 

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

})

app.listen(3000, function(){
    console.log("Server is runnig on port 3000");
});
