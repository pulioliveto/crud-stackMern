import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {usePosts} from './../context/PostContext'
import {useNavigate} from 'react-router-dom'
import './../styles/NewPost.css'
import { FcHighPriority } from "react-icons/fc";

const NewPost = () => {
   const {createPost} = usePosts()
   const navigate = useNavigate()
  return (
    <div>
        <Formik initialValues={{
            titulo: '',
            descripcion: ''
        }}
        validationSchema={Yup.object({ //Yup es para hacer validaciones en los inputs(field en formik) del form.
            titulo:Yup.string().required('El titulo es requerido'),
            descripcion: Yup.string().required(`La descripción es requerida`)
        })}
        onSubmit = { async (valor, accion)=>{
            await createPost(valor)
            navigate('/');
        }}
        >
       
            {({handleSubmit})=> (
                <Form onSubmit={handleSubmit}>
                    <h1>Creá tu post!</h1>
                <Field name="titulo" placeholder="Titulo" type="text" required />
                {/* <ErrorMessage className="errorMensaje" component="p" name="titulo" /> */}
                <Field name="descripcion" placeholder="Descripcion" type="text" required/>
                {/* <ErrorMessage className="errorMensaje"component="p" name="descripcion" /> */}
                <button type="submit" className="button">Enviar</button>
            </Form>
            )}


        </Formik>
    </div>
  )
}

export default NewPost