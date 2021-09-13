import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import "./form.css"

function Formulario() {

  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, 'Preencha com seu nome completo')
      .max(20, 'Preencha com seu nome completo')
      .required('Preencha com seu nome completo'),
    email: Yup.string()
      .email('Preencha com um e-mail válido')
      .required('Preencha com um e-mail válido'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        email: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div className="Form">
          <h1 className="font-weight-bold">Participe de nossas new com promoções e novidades!</h1>
          <Form className='inputs'>  
            <TextField  className="name" name="firstName" type="text" placeholder="Digite seu Nome"/>
            <TextField className="email" name="email" type="email" placeholder="Digite seu email"/>
            <button className="button" type="submit">Eu quero!</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Formulario;