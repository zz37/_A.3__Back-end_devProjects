const express = require("express");

const app = express();
app.set("view engine", "ejs"); // ejs looks on folder views

app.use(express.urlencoded({extended: true}));  // instead of body-parser

app.use(express.static("public"));

let items = ["Buy Food", "POPO Grande", "MUCHA POPO"];
let workItems = [];

app.get("/", function (req, res) {

    let today = new Date();
    let options = {weekday:"long", day:"numeric", month:"long"};
    let day = today.toLocaleDateString("es-MX",options);

    res.render("index", {listTitle: day, newListItems:items }); // renders the index.js and js object as key:value

})

app.post("/",function(req,res){
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work"); // redirect to the home address with the updated values if they exist
    } else {
        items.push(item);
        res.redirect("/"); c// redirect to the home address with the updated values if they exist
    }
})

app.get("/work", function(req,res){
    res.render("index", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req,res){
    let item = req.body.newItem;
    workItems.push(item); 
    res.redirect("/work");
})

app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function () {
    console.log("Server is runnig on port 3000");
});
