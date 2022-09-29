const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
        trim: true
    },
    descripcion:{
        type:String,
        required: true,
        trim: true
    },
    imagen:{
        url: String,
        public_id: String
    }
})

module.exports = mongoose.model('Post', postSchema);