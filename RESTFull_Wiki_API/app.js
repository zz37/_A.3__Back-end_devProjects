//jshint esversion:6

// constants for requirements
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs'); // view engine

// to parse our requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public")); // public directory to static files

// this should match the db created in studio 3t
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

// new schema
const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

// This is for requets for ALL articles ------------
// using express js route
// for get, post, delete 
app.route("/articles").get(function(req, res){
  Article.find(function(err, foundArtciles){
    //console.log(foundArtciles); // print
    if (!err){
      res.send(foundArtciles);
    } else{
      res.send(err);
    }
  })
})
.post(function(req, res){
  // add data to mongodb
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
    });

  newArticle.save(function(err){
    if (!err) {
      console.log("Succesfully added a new article");
    } else {
      res.send(err);
    }
  })
})
.delete(function(req, res){
  Article.deleteMany(function(err){
    if (!err) {
      res.send("Succesfully deleted all articles.");
    } else {
      res.send(err);
    }
  });
});
// This is for requets for ALL articles ------------

// This is for requets for A SPECIFIC article  ------------
app.route("/articles/:articleTitle")
.get( function(req, res) { 
    // acces the params of request
  Article.findOne({title: req.params.articleTitle}, function(err, foundArtcile) {
    if (foundArtcile){
      res.send(foundArtcile);
    } else {
      console.log("No articles with that name were found.")
    }
  });
})
.put(function(req, res){
  Article.replaceOne(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    function(err){
      if (!err) {
        console.log("Succesfully updated article.")
      }
    });
})
.patch(function(req, res){
  Article.replaceOne(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err){
      if (!err) {
        console.log("Succesfully updated article.")
      }
    });
});

// port for listening
app.listen(3000, function() {
  console.log("Server started on port 3000");
});