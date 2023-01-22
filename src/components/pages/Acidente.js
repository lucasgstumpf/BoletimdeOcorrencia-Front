import React, { useState } from "react";
import Axios from "axios";
import styles from "./Login.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function Acidente() {
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
    Axios.post("http://localhost:5000/cadastrarAcidente",{
      endereco: values.endereco,
      resumo: values.resumo,
      marca_veiculo: values.marca_veiculo,
      modelo_veiculo: values.modelo_veiculo,
      placa_veiculo: values.placa_veiculo,
      cor_veiculo: values.cor_veiculo,
      cpf: values.cpf
    }).then((res) => {
      console.log(res)
    }).catch((err) => console.log(err))
  }

  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="Endereço"
          name="endereco"
          placeholder="Insira o endereço do ocorrido"
          handleOnChange={handleChangeValues}
        />

        <Input
          type="text"
          text="Resumo"
          name="resumo"
          placeholder="Insira o resumo do ocorrido"
          handleOnChange={handleChangeValues}
        />

        <Input
          type="text"
          text="Marca do veiculo"
          name="marca_veiculo"
          placeholder="Insira a marca do veiculo do infrator"
          handleOnChange={handleChangeValues}
        />

        <Input
          type="text"
          text="Modelo do veiculo"
          name="modelo_veiculo"
          placeholder="Insira o modelo do veiculo do infrator"
          handleOnChange={handleChangeValues}
        />

        <Input
          type="text"
          text="Placa do veiculo"
          name="placa_veiculo"
          placeholder="Insira a placa do veiculo do infrator"
          handleOnChange={handleChangeValues}
        />

        <Input
          type="text"
          text="Cor do veiculo"
          name="cor_veiculo"
          placeholder="Insira a cor do veiculo do infrator"
          handleOnChange={handleChangeValues}
        />
        <Input
          type="text"
          text="CPF"
          name="cpf"
          placeholder="Insira o seu cpf"
          handleOnChange={handleChangeValues}
        />

        <SubmitButton text="Denunciar!"/>
      </form>
    </div>
  );
}

export default Acidente;
