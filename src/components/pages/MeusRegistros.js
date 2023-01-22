import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./Login.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import Card from "../layouts/Card";

function MeusRegistros() {
  const [values, setValues] = useState();
  const [listas , setListas] = useState();
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmitViolencia= (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/registrosViolencia",{
        cpf: values.cpf
    }).then((res) => {
        setListas(res.data);
        console.log(res.data)
    }).catch((err) => console.log(err))
  };

  const handleSubmitFurtos= (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/registrosFurto",{
        cpf: values.cpf
    }).then((res) => {
        setListas(res.data);
        console.log(res.data)
    }).catch((err) => console.log(err))
  };

  const handleSubmitAcidente= (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/registrosAcidente",{
        cpf: values.cpf
    }).then((res) => {
        setListas(res.data);
        console.log(res.data)
    }).catch((err) => console.log(err))
  };


  return (
    <div>
        <div className={styles.formulario}>
            <form >
                <Input
                type="text"
                text="Insira seu cpf"
                name="cpf"
                placeholder="Insira o seu cpf"
                handleOnChange={handleChangeValues}
                />
                <button type='button' onClick={handleSubmitViolencia} className={styles.botao}>Ver Violencia Domestica!</button>
                <button type='button' onClick={handleSubmitFurtos} className={styles.botao}>Ver Furtos e roubos!</button>
                <button type='button' onClick={handleSubmitAcidente} className={styles.botao}>Ver Acidentes!</button>
            </form>
            

            
        </div>
      <div className={styles.formulario} >
        {typeof listas !== "undefined" && listas.map((value) => {
            return <Card key={value.resumo} 
            
            listCard = {listas}
            setListCard = {setListas} 
            endereco = {value.resumo}
            createdAt = {value.createdAt}>

             </Card>
        })}
      </div > 
    </div>

  );
}

export default MeusRegistros;
