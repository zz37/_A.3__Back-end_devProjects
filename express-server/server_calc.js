const express = require("express"); // retrieve express package

const app = express(); // retrieve the express module
app.use(express.urlencoded({extended: true})); // to parse data from an html form


// +++ for index.html +++
// this is the route
app.get("/", function(request,respond){
    respond.sendFile(__dirname + "/index.html"); // __dirname gives the path of the current working directory
}); // get request on touch of the server

app.post("/",function(request, respond){
    let num1 = Number(request.body.n1);
    let num2 = Number(request.body.n2);
    let sum = num1 + num2;
    respond.send("The sum of the numbers are: " + sum);
})


// +++ for bmi claculator +++
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight /(height * height);
    console.log(weight);
    console.log(height);
    console.log(bmi);
    res.send("Your bmi is " + bmi);
})


app.listen(3000, function(){
    console.log("Server is runnig on port 3000");
});

