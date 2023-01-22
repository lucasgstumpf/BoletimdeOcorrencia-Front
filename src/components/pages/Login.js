import React from 'react';
import styles from './Login.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

function Login() {
  return (
    <div className={styles.formulario}>
      <form >
        <Input
          type="text"
          text="Usuario"
          name="name"
          placeholder="Insira o nome de usuario" />
        <Input
          type="password"
          text="Senha"
          name="password"
          placeholder="Insira sua senha" />

        <SubmitButton text="Cadastrar"/>
      </form>
    </div>

  );
}

export default Login;