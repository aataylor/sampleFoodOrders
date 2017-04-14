var express = require('express'); 
var app = express();
var db = require('./db');
var FoodOrderController = require('./foodOrder/FoodOrderController');


app.use('/foodOrders', FoodOrderController);

module.exports = app;