import {toast} from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import './../styles/Home.css'
import {usePosts} from './../context/PostContext.js'

const PostCard = ({post}) => {
    const {deletePost} = usePosts()
    const handleDelete = (post, id) => {
        toast((t) => (
            <div className="toast-notification">
                <p>Desea eliminar el post? <strong>"{post}"</strong></p>
                <div className="botonera">
                    <button onClick={ ()=>{
                        deletePost(id)
                        toast.dismiss(t.id)
                    }  }>Borrar</button>
                    <button onClick={() => toast.dismiss(t.id)}>Cancelar</button>
                </div>
            </div>
        ))
    }
  return (
        <div className="card" key={post._id}>
        <h3>{post.titulo}</h3>
        <p>{post.descripcion}</p>
        <button onClick={() => handleDelete(post.titulo, post._id)} id="deleteButton"><MdDelete/></button>
        </div>
    
  )
}

export default PostCard