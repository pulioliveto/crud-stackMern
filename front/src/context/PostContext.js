import { useState, useContext, createContext, useEffect } from "react";
import { getPostsRequest, createPostRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/postsRequest.js";

export const usePosts = () => {
	const context = useContext(postContext);
	return context;
}; //Funcion que utiliza el contexto y lo retorna asi NO repetimos este codigo multiples veces en los componentes.

const postContext = createContext(); //Funcion que crea contexto

const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const res = await getPostsRequest(); //Consulta a la base de datos.
		setPosts(res.data); //Guardamos en el estado los posts que vienen de la base de datos.
	}; 

	const createPost = async (post) => {
		const res = await createPostRequest(post);
		setPosts([...posts, res.data])
	}; //Guardamos en el estado los posts que ya vienen desde la base de datos y los post que creamos mediante el formulario y luego si enviamos toda la data a la base
	
	const deletePost = async (id) => {
		const res = await deletePostRequest(id);
		
		if(res.status === 204){
			setPosts(posts.filter(post => post._id !== id))
		}
		
	}
	const getPost = async (id) => {
		const res = await getPostRequest(id)
		return res.data
	}
	const updatePost = async (id, post) =>{
		const res = await updatePostRequest(id, post)
		console.log(res);
		setPosts(posts.map(post => post._id === id ? res.data : post))
	}
    useEffect(() => {
        getPosts()
    }, [])

	return (
		<postContext.Provider
			value={{
				posts,
				getPosts,
				createPost,
				deletePost,
				getPost, 
				updatePost
			}}
		>
			
			{children}
		</postContext.Provider>
	);
};

export default PostProvider;
