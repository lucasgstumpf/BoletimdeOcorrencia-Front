import React, {useState} from 'react';
import Axios from "axios";
import styles from './Login.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

function Cadastro() {
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
    Axios.post("http://localhost:5000/cadastrar",{
      name: values.name,
      senha: values.senha,
      cpf: values.cpf,
      telefone: values.telefone,
      data_nascimento: values.data_nascimento
    }).then((res) => {
      console.log(res)
    }).catch((err) => console.log(err))
  }
  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="Usuario"
          name="name"
          placeholder="Insira o nome de usuario" 
          handleOnChange={handleChangeValues}/>
        <Input
          type="password"
          text="Senha"
          name="senha"
          placeholder="Insira sua senha" 
          handleOnChange={handleChangeValues}/>

        <Input
          type="number"
          text="CPF"
          name="cpf"
          placeholder="Insira seu CPF" 
          handleOnChange={handleChangeValues}/>

        <Input
          type="number"
          text="Telefone"
          name="telefone"
          placeholder="Insira seu telefone" 
          handleOnChange={handleChangeValues}/>

        <Input
          type="date"
          text="Data de nascimento"
          name="data_nascimento"
          placeholder="Insira sua data de nascimento" 
          handleOnChange={handleChangeValues}/>


        <SubmitButton text="Cadastrar" />
      </form>
    </div>

  );
}

export default Cadastro;