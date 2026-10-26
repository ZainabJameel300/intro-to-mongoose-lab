const mongoose = require('mongoose')

const recipeScheema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLenght : 2,
        maxLenght : 100,
    },
    instructions:{
      type: String,
    },
    prepTime: {
        type: Number,
        min: 5,
        max:500,
        required: true
    }, 
    difficulty: {
        type: String,
        enum:['Easy','Medium','Hard'],
        toLowerCase: true
    },

},{timestamps : true}) 

//model:

const Recipe= mongoose.model('Recipe',recipeScheema)

module.exports = Recipe //export the model so we can use it in the learnDatabase file 
