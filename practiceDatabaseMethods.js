const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const Recipe = require('./models/Recipe')
const connectToDB = require('./db')
const {createRecipe
     , getAllRecipes, 
     getRecipeById,
      updateRecipe, 
      deleteRecipe} = require('./recipeUtils')

connectToDB()



// createRecipe({
//  name: "Brookies",
//  instructions: "Bake at 220C",
//  prepTime: 160,
//  difficulty: "Hard"
// })



// getAllRecipes()



//  getRecipeById('6adf35fc38c9ee80736d188f')

 

// updateRecipe('6adf359b2dd0bf75130cd0a7',{prepTime:150})




// deleteRecipe('6adf427c21df9398abb74a73')