import React from 'react';
import styles from './Login.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

function Cadastro() {
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

        <Input
          type="number"
          text="CPF"
          name="cpf"
          placeholder="Insira seu CPF" />

        <Input
          type="number"
          text="Telefone"
          name="telefone"
          placeholder="Insira seu telefone" />

        <Input
          type="date"
          text="Data de nascimento"
          name="telefone"
          placeholder="Insira sua data de nascimento" />


        <SubmitButton text="Cadastrar" />
      </form>
    </div>

  );
}

export default Cadastro;