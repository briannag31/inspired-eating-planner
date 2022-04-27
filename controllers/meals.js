const express = require("express")
const mealRouter = express.Router()
const Meals = require('../models/mealSchema')
const mealSeedData = require("../models/mealSeed")


//Seed Route -- DONE
mealRouter.get('/seed', (req, res) => {
    Meals.deleteMany({}, (err, deletedMeals) => {
        Meals.create(mealSeedData, (err, data) => {
            res.redirect('/meal-planner/weekly-meals');
        });
    });
});
//home
mealRouter.get("/", (req,res) =>{
    Meals.find({}, (err, allMeals) => {
        res.render('home.ejs');
    });
});

//Index -- DONE
mealRouter.get('/weekly-meals', (req, res) => {
    Meals.find({}, (err, allMeals) => {
        res.render('index.ejs', {meals: allMeals});
    });
});

//New -- DONE
mealRouter.get('/weekly-meals/new', (req, res) => {
    res.render('new.ejs');
});

//Delete -- DONE
mealRouter.delete("/weekly-meals/:id", (req, res) => {
    Meals.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/meal-planner/weekly-meals")
    })
  })

//Update 
mealRouter.put("/weekly-meals/:id", (req, res) => { 
    // for(let key in req.body) {
    //     if(req.body.hasOwnProperty(key)){
    //       console.log(req.body.ingredients)
    //     }
    //   }
    console.log(req.body.ingredients1)
    // uIng = JSON.stringify(req.params.ingredients)
    // updatedIng = JSON.stringify(req.body.ingredients)
    Meals.findByIdAndUpdate(
      req.params.id,
      req.body,
    //   { $addToSet: { uIng:updatedIng} },
      {
        new: true
      },
      
      (error, updatedMeal) => {
        res.redirect(`/meal-planner/weekly-meals/${req.params.id}`)
      }
    )
  })


//Create -- DONE
mealRouter.post('/weekly-meals', (req, res) => {

    console.log(req.body.name)
    Meals.create(req.body, (err, createdMeal) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/meal-planner/weekly-meals');
        }
    })
});

//Edit -- DONE
mealRouter.get("/weekly-meals/:id/edit", (req, res) => {
    Meals.findById(req.params.id, (error, foundMeal) => {
        res.render("edit.ejs", {
            meals: foundMeal,
        })
    })
  })

//Show -- DONE

mealRouter.get('/weekly-meals/:id', (req, res) => { 
    Meals.findById(req.params.id, (err, allMeals) => {
        res.render('show.ejs', {meals: allMeals});
    });
})



module.exports = mealRouter