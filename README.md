
# Inspired Eating - Meal Planner

#### Project 2 by Brianna Gaines

**Summary**

| Field | Detail |
|-------|--------|
| Project Name | Inspired Eating|
| Description | This app allows a user to create a weekly meal plan by adding, editing, or deleting meal. |
| Live Website | https://inspired-eating.herokuapp.com/meal-planner |
| Repo | https://github.com/briannag31/inspired-eating-planner |

## Technologies being used:

- HTML
- CSS
- JavaScript
- JQuery
- Heroku
- EJS
- Method Override
- Express
- MongoDB
- Mongoose
- Google Fonts
- Canva

## Route Tables

| Endpoint | Method | Response | 
| -------- | ------ | -------- | 
| /meal-planner | GET | Takes user to home page| 
| /meal-planner/weekly-meals | GET | Index of all meals|
| /meal-planner/weekly-meals/new | GET | Allows user to add new meal|
| /meal-planner/weekly-meals/:id| GET | Shows individual meal | 
| /meal-planner/weekly-meals/:id/edit | GET | Shows form for user to edit meal |
| /meal-planner/weekly-meals/:id/delete| DELETE | deletes meal with matching id| 
| /meal-planner/weekly-meals/:id| PUT | Updates meal with matching id| 
| /meal-planner/weekly-meals| POST | Adds new meal to index page| 

## Model
|Meal  ||
| -------- | ------ |  
| ID | Object | 
| Name | String | 
| Description| String | 
| Time| Number |
| Ingredients| Array |


## Wireframes 

![Home Page](https://i.imgur.com/C73sf2d.png)
![Index Page](https://i.imgur.com/SRMWLdO.png)
![New Page](https://i.imgur.com/7b09GNv.png)
![Show Page](https://i.imgur.com/c5EQCuw.png)
![Edit Page](https://i.imgur.com/Gj7JFUy.png)
![Model](https://i.imgur.com/IfqaZcx.png)

## User Interface Mockups

![Home Page](https://i.imgur.com/ZLDO3op.png)
![Index Page](https://i.imgur.com/ZNuqImk.png)
![New Page](https://i.imgur.com/8pgcD4X.png)
![Show Page](https://i.imgur.com/6eeHVOh.png)
![Edit Page](https://i.imgur.com/GsTHZ9O.png)

## Future Enhancements

- Add authentication
- Add an API call so users can search for meal ideas
- Add a shopping list so as users are adding meals, they can click on ingredients to add to their list
- Make it mobile friendly
