import React from 'react';
import styles from './Registros.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';
import LinkButton from '../layouts/LinkButton';

function Registros() {
  return (
    <div className={styles.formulario}>
      <h1>Bem vindo!</h1>
      <p>O que gostaria de registrar?</p>
      <LinkButton to="/violenciaDomestica" text="Violencia domestica" />
      <LinkButton to="/furtoRoubo" text="Furto ou roubo" />
      <LinkButton to="/acidente" text="Acidente" />
      <br/>
      <LinkButton to="/meusregistros" text="Meus registros" />
    </div>

  );
}

export default Registros;