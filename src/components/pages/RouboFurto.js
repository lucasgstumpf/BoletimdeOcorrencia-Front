import React, { useState } from "react";
import Axios from "axios";
import styles from './Login.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

function RouboFurto() {
  const [values, setValues] = useState();
  // console.log(values);
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/cadastrarFurto",{
      caracteristica_agressor: values.caracteristicaAgressor,
      endereco: values.enderecoAgressor,
      pertences_perdidos: values.pertenceAgressor,
      resumo: values.resumoAgressor,
    }).then((res) => {
      console.log(res)
    }).catch((err) => console.log(err))
  }
  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="caracteristica do Agressor"
          name="caracteristicaAgressor"
          placeholder="Insira a característica do agressor" 
          handleOnChange={handleChangeValues}/>

        <Input
          type="text"
          text="Endereço"
          name="enderecoAgressor"
          placeholder="Insira o endereço do ocorrido" 
          handleOnChange={handleChangeValues}/>
        <Input
          type="text"
          text="Pertences perdidos"
          name="pertenceAgressor"
          placeholder="Insira os pertences roubados/furtados" 
          handleOnChange={handleChangeValues}/>

        <Input
          type="text"
          text="Resumo"
          name="resumoAgressor"
          placeholder="Insira o resumo do ocorrido" 
          handleOnChange={handleChangeValues}/>

        <SubmitButton text="Denunciar!" />
      </form>
    </div>

  );
}

export default RouboFurto;