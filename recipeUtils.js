const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')
async function createRecipe(newRecipe) {
    try{
     return await Recipe.create(newRecipe)
    }
    catch(err){
        console.log('Failed to create recipe : '+err)
    }
} 

async function getAllRecipes(){
    try{
      const allRecipes = await Recipe.find()
      for(let i=0; i<allRecipes.length;i++){
        console.log(allRecipes[i].name+ ' is an '+allRecipes[i].difficulty+ ' recipe and takes '+allRecipes[i].prepTime+ ' minutes to prepare')
      }
    }
    catch(err){
        console.log('Falid to display all the recipes'+err)
    }
} 

async function getRecipeById(id) {
    try{
     const foundRecipe = await Recipe.findById(id)
     console.log(foundRecipe)
    }
    catch(err){
        console.log('Recipe not found: '+err)
    }
} 

async function updateRecipe(recipeId, newRecipeData){
    try{
     const updtadedRecipe= await Recipe.findByIdAndUpdate(recipeId,newRecipeData,{new:true})
     console.log(updtadedRecipe)
    }
    catch(err){
     console.log('Failed to Update records: '+err)
    }
 }

 async function deleteRecipe(recipeId){
    try{
     await Recipe.findByIdAndDelete(recipeId)
     console.log('Recipe successfully deleted.')
    }
    catch(err){
        console.log('Could not find the recipe to delet')
    }
}

module.exports ={createRecipe , getAllRecipes, getRecipeById, updateRecipe, deleteRecipe} 