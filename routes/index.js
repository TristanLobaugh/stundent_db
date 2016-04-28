var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017/btb";
var db;

MongoClient.connect(mongoUrl, function(error, database){
	db = database;
});

router.get("/student_list", function(req, res, next){
	db.collection("students").find({}).toArray(function(error, queryResult){
		res.json(queryResult);
	});
});

router.get("/student_list/reversed", function(req, res, next){
	db.collection("students").find({}).toArray(function(error, queryResult){
		res.json(queryResult);
	});
});

// USE ANY ROUTE
// router.get("/student_list/:anything", function(req, res, next){
// 	if(req.params.sortMethod === "sort"){
// 		students.sort();
// 	}else if(req.params.sortMethod === "reverse"){
// 		students.sort();
// 		students.reverse();
// 	}else{
// 		generic stuff
// 	}

// 	db.collection("students").find({}).toArray(function(error, queryResult){
// 		res.json(queryResult);
// 	});
// });




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
