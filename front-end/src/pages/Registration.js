import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration () {
    const initialValues = {
        username: "",
        password:"",

    };

    const validationSchema = Yup.object().shape({
        username:Yup.string().min(4).max(10).required(),
        password:Yup.string().min(4).max(10).required(),
    })

    const onSubmit =(data) => {
       axios.post("http://localhost:3001/auth",data).then (() => {
           console.log(data);
       }) 
    };
    return <div>
        <Formik>
            <Form className="formContainer">
                <label>Username</label>
                <ErrorMessage name ="username" component ="span"/>
                <Field
                autocomplete ="off"
                id="inputCreatePost"
                name="username"
                placeholder="(Ex.username)"/>

                <label>password: </label>
                <ErrorMessage name="password" component="span"/>

                <Field
                autocomplete ="off"
                value="password"
                id="inputCreatePost"
                name="password"
                placeholder="(Ex.password)"/>

                <button type="submit">Register</button>
            </Form>
        </Formik>
    </div>;
}
export default Registration;