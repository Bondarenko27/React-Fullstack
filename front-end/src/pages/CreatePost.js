import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";


function CreatePost(){

    const initialValues = {
        title:"",
        text:"",
        username:"",
    };

    const validationSchema = Yup.object().shape({
        title:Yup.string().required(),
        text:Yup.string().required() ,
        username:Yup.string().min(4).max(10).required()
    })

    const onSubmit=(data)=> {
        axios.post("http://localhost:3001/posts",data).then((response) => {
            
        console.log(response.data);
        });
    };
    return (
        <div className="createPostPage">
            
         <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}>
         <Form className="formCont">
             <label>Title:</label>
             <ErrorMessage name ="title" element= "span"/>
             <Field  id="inputCreatePost" name="title" placeholder="Ex. Title.." />
             <label>Post:</label>
             <ErrorMessage name ="text" element= "span"/>
             <Field  id="inputCreatePost" name="text" placeholder="Ex. Post.." />
             <label>Username:</label>
             <ErrorMessage name ="username" element= "span"/>
             <Field  id="inputCreatePost" name="username" placeholder="Ex. Kiki.." />
             <button type="submit">Create Post</button>
         </Form>
         </Formik>
        </div>
    )
}

export default CreatePost