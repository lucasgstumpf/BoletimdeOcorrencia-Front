import React, { useState, useEffect } from "react";
import styles from './Login.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';
import Axios from "axios";
var autenticar = false;

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
        setTimeout(() => {
          window.location.href = '/registros'
        }, 3000);
    }
}, [isLoggedIn])

  const [values, setValues] = useState();
  console.log(values);
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    Axios.post("http://localhost:5000/autenticacao",{
      cpf: values.cpf,
      senha: values.password
    }).then((res) => {
      if(res.data[0] !== undefined) {
        console.log("Entrou")
        setIsLoggedIn(true);
      }
      console.log(res.data[0])
    
    }).catch((err) => console.log(err))
  }
 
  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="Usuario"
          name="cpf"
          placeholder="Insira o cpf" 
          handleOnChange={handleChangeValues}/>
        <Input
          type="password"
          text="senha"
          name="password"
          handleOnChange={handleChangeValues}
          placeholder="Insira sua senha" />

        <SubmitButton text="Entrar"/>
      </form>
    </div>

  );
}

export default Login;