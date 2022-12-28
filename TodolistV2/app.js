//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

// db schema
const itemsSchema = {
  name: String
};
// mongoose model
const Item = mongoose.model("Item",itemsSchema);

// create new records
const item1 = new Item({
  name: "Computer todo list."
});
const item2 = new Item({
  name: "LAS DES NESTor."
});
const item3 = new Item({
  name: "POPO GRANDETOt."
});

const defualtItems = [item1, item2, item3]; // docs array

// new schema
const listSchema = {
  name: String,
  items: [itemsSchema]
};

// mongoose model
const List = mongoose.model("List", listSchema);


app.get("/", function(req, res) {
  // retrieve all records
  Item.find({}, function(err, foundItems){

    if (foundItems.length === 0){
      Item.insertMany(defualtItems, function(err){
        if (err){
          console.log(err);
        } else {
          console.log("Succesfully saved default items to DB.")
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  });
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save(); // save an item into item collecitions
    res.redirect("/"); // so it refresh the page
  } else {
    List.findOne({name: listName}, function(err,foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
  }
});

// to delete the items in the list
app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function(err){
      if(!err){
        console.log("Succesfully deleted checkedd item.");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
          if (!err) {
            res.redirect("/" + listName);
          }
        })
      }
});


app.get("/:customListName", function(req,res){
  const customListName = _.capitalize(req.params.customListName);


  List.findOne({name: customListName}, function(err,foundList){
    if(!err){
      if(!foundList){
        // create a new list
        const list = new List({
          name: customListName,
          items: defualtItems
        });
        list.save() // save into lists collection
        res.redirect("/" + customListName); // refresh to the customListName
      } else {
        //show an existing list
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items})
      }
    }
  });

  

});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
