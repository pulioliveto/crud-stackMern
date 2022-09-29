const mongoose = require('mongoose');
const  MONGODB_URI = require('./config.js')

async function connectDB() {
    try{
        const db = await mongoose.connect(MONGODB_URI)
        console.log('estoy en la base de datos', db.connection.name)
    }
    catch(error){
        console.log(error);
    }
    
}
module.exports = connectDB
