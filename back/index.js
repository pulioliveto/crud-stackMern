const express = require('express');
const app = express();
const postsRoutes = require('./routes/posts.routes.js') ;
const connectDB = require('./db.js')
const PORT = require('./config.js')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

app.listen(2000);
connectDB();
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.json())    

app.use(bodyParser.urlencoded({ extended: false })) 


app.use(fileUpload(
    {
        useTempFiles: true,
        tempFileDir: './images'
    }
))


app.use(postsRoutes);
console.log('Server is Running', 2000)
