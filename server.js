const express = require("express");
const mongoose =  require("mongoose");
const app = express()
const methodOverride = require("method-override")
require('dotenv').config()
const MONGO = process.env.DATABASE_URL

mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

const db=mongoose.connection;
db.on('error', (err) => console.log(" mongo is not running - Error: " + err.message ));
db.on('connected', ()=> console.log('mongoose connected'));
db.on('disconnected', () => console.log("mongo disconnected"));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.use("/static", express.static("public"))
app.use(express.json());


//handle root requests
app.get("/", (req,res) => {
    res.redirect("/meal-planner")
})

const storeController = require("./controllers/meals")
app.use("/meal-planner", storeController);

app.post(function(req, res, next){
    next();
});

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log("we are running"))
