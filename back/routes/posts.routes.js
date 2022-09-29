const express = require('express');
const router = express.Router();
const {obtenerPosts, crearPosts, actualizarPosts, obtenerPost, eliminarPosts} = require('./../controllers/posts.controllers.js')


router.get('/posts', obtenerPosts)
router.post('/posts', crearPosts)
router.put('/posts/:id', actualizarPosts)
router.delete('/posts/:id', eliminarPosts)
router.get('/posts/:id', obtenerPost)

module.exports =  router;
