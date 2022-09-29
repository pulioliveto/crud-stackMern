const Post = require('./../models/Post.js')

exports.obtenerPosts = async (req, res) => {
    try {
        const getPosts = await Post.find()
        res.send(getPosts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.crearPosts = async (req, res) => {
    try {
        const {titulo, descripcion} = req.body;
        console.log(req.file);
        const postCreate = new Post({titulo, descripcion});
        await postCreate.save();
        res.json(postCreate)
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}


exports.actualizarPosts = async (req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(updatePost)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


exports.eliminarPosts = async (req, res) => {
    try {
        const postRemove = await Post.findByIdAndDelete(req.params.id)
        if(!postRemove) return res.sendStatus(404)
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}
exports.obtenerPost = async (req, res) => {
    try {
        const postId = await Post.findById(req.params.id)
        if(!postId) {
            res.sendStatus(404)
        }
        res.json(postId)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}