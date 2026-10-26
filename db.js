const mongoose = require('mongoose')

async function connectToDB(){
    try{
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('Connected to the database')
    }
    catch(err){
        console.log('Error: '+err)
    }
}

module.exports = connectToDB