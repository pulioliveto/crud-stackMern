import {usePosts} from './../context/PostContext.js'
import {Link} from 'react-router-dom'
import './../styles/Home.css'

import {toast} from 'react-hot-toast';
import PostCard from '../components/PostCard.js';

import { FcDataRecovery } from "react-icons/fc";

const Home = () => {
    const {posts}= usePosts()
    if(posts.length === 0){
        return(
            <div className="section">
                <h3>Ningún post disponible <FcDataRecovery className="icon"/> </h3>
                <Link to="/new"><button className="button">Crear post</button></Link>
            </div>
        )
    }
    
  return (
    <div className="section">
        <Link to="/new"><button className="button">Crear post</button></Link>
        <div className="grid-card">
            
        {posts.map(post => (
            <PostCard post={post} /> //Este map obtiene los posts del array 'posts' que viene desde el estado del contexto y hace referencia a la base de datos.
            
        ))}
        </div>
    </div>
  )
}

export default Home