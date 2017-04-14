/*
Requirements: POST, DELETE, GET(all)
we can to set up an api for the Food Ordering
*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var FoodOrder = require('./FoodOrder');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res) {
    FoodOrder.create({
        name : req.body.name,
        establishment : req.body.establishment,
        order : req.body.order
    },
    function(err, order){
        if (err) return res.status(500);
        res.status(200).send(order);
    });
});

router.get('/', function(req, res){
    FoodOrder.find({}, function(err, orders){
        if (err) return res.status(500);
        res.status(200).send(orders);
    });
});

module.exports = router;