import {useEffect, useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {usePosts} from './../context/PostContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import './../styles/NewPost.css'
import { MdWest } from "react-icons/md";

const NewPost = () => {
   const {createPost, getPost, updatePost} = usePosts()
   const navigate = useNavigate()
    const [posts, setPosts] = useState({
        titulo: '',
        descripcion: ''
    })
   const params = useParams()
   useEffect(() => {
    (async() => {
        if (params.id){
        const response =  await getPost(params.id)
        setPosts(response)
       }
    })()
    
   }, [params.id])
   
//    console.log(params)
  return (
    <div>
        <Formik initialValues={posts}
        validationSchema={Yup.object({ //Yup es para hacer validaciones en los inputs(field en formik) del form.
            titulo:Yup.string().required('El titulo es requerido'),
            descripcion: Yup.string().required(`La descripción es requerida`)
        })}
        onSubmit = { async (valor, accion)=>{
            if(params.id) {
                await updatePost(params.id, valor)
                navigate('/')
            }
            else{
                await createPost(valor)
                navigate('/');
            }
            
        }}
        enableReinitialize
        >
       
            {({handleSubmit})=> (
                <Form onSubmit={handleSubmit}>
                    <Link to="/"><h4><MdWest/> Volver </h4></Link>
                    <h1>Creá tu post!</h1>
                <Field name="titulo" placeholder="Titulo" type="text" required />
                {/* <ErrorMessage className="errorMensaje" component="p" name="titulo" /> */}
                <Field component="textarea" rows={3}name="descripcion" placeholder="Descripcion" type="text" required/>
                {/* <ErrorMessage className="errorMensaje"component="p" name="descripcion" /> */}
                <button type="submit" className="button">Enviar</button>
            </Form>
            )}


        </Formik>
    </div>
  )
}

export default NewPost