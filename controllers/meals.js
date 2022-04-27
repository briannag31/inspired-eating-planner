const express = require("express")
const mealRouter = express.Router()
const Meals = require('../models/mealSchema')
const mealSeedData = require("../models/mealSeed")


//Seed Route
mealRouter.get('/seed', (req, res) => {
    Meals.deleteMany({}, (err, deletedMeals) => {
        Meals.create(mealSeedData, (err, data) => {
            res.redirect('/meal-planner/weekly-meals');
        });
    });
});
//Home
mealRouter.get("/", (req,res) =>{
    Meals.find({}, (err, allMeals) => {
        res.render('home.ejs');
    });
});

//Index
mealRouter.get('/weekly-meals', (req, res) => {
    Meals.find({}, (err, allMeals) => {
        res.render('index.ejs', {meals: allMeals});
    });
});

//New
mealRouter.get('/weekly-meals/new', (req, res) => {
    res.render('new.ejs');
});

//Delete
mealRouter.delete("/weekly-meals/:id", (req, res) => {
    Meals.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/meal-planner/weekly-meals")
    })
  })

//Update 
mealRouter.put("/weekly-meals/:id", (req, res) => { 

    Meals.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
      (error, updatedMeal) => {
        res.redirect(`/meal-planner/weekly-meals/${req.params.id}`)
      }
    )
  })


//Create
mealRouter.post('/weekly-meals', (req, res) => {

    Meals.create(req.body, (err, createdMeal) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/meal-planner/weekly-meals');
        }
    })
});

//Edit
mealRouter.get("/weekly-meals/:id/edit", (req, res) => {
    Meals.findById(req.params.id, (error, foundMeal) => {
        res.render("edit.ejs", {
            meals: foundMeal,
        })
    })
  })

//Show
mealRouter.get('/weekly-meals/:id', (req, res) => { 
    Meals.findById(req.params.id, (err, allMeals) => {
        res.render('show.ejs', {meals: allMeals});
    });
})

module.exports = mealRouter