const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){

    const query = req.body.cityName;
    const apiKey = "38448b4cac3d4e58763c246fdbe11586";
    const unit = "metric"


    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query+ "&appid="+apiKey+"&units="+unit;
    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on("data",function(data){
            //console.log(data); // returns in hex data
            const weatherData = JSON.parse(data); // to parse data to json
            console.log(weatherData);
            const temp = weatherData.main.temp; // get temperature data
            console.log(temp); // print temp
            const weatherDescription = weatherData.weather[0].description;
            console.log(weatherDescription);
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p> The weather is currently " + weatherDescription + "</p>");
            res.write("<h1> The temperature in " + query + "is" + temp + " degrees Celsius. </h1>");
            res.write("<img src=" + imageURL + "> ");
            res.send();

        })
    })


    // cannot send multiple res.send response, but we can multiple res.write
    //res.send("Server is up and running.");
    // instead use res.write and then finnaly res.send()*/
})


app.listen(1000, function(){
    console.log("Server is runnig on port 1000");
})