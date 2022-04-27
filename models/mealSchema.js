const mongoose = require("mongoose")

const mealSchema = new mongoose.Schema({
    day:{type: String, required: true},
    name: {type: String , required: true},
    description: {type: String},
    ingredients: {type: Array},
    time: {type: Number},
})

const Meals = mongoose.model("Meals", mealSchema)

module.exports = Meals