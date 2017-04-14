var mongoose = require('mongoose');


var FoodOrderSchema = new mongoose.Schema({
    name: String,
    establishment: String,
    order: String
}, {timestamps: true
});
mongoose.model('FoodOrder', FoodOrderSchema);

module.exports = mongoose.model('FoodOrder');