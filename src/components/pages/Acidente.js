import React from 'react';
import styles from './Login.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

function Acidente() {
  return (
    <div className={styles.formulario}>
      <form >


        <Input
          type="text"
          text="Endereço"
          name="enderecoAgressor"
          placeholder="Insira o endereço do ocorrido" />

        <Input
          type="text"
          text="Resumo"
          name="resumoAgressor"
          placeholder="Insira o resumo do ocorrido" />

        <Input
          type="text"
          text="Marca do veiculo"
          name="marcaVeiculo"
          placeholder="Insira a marca do veiculo do infrator" />

        <Input
          type="text"
          text="Modelo do veiculo"
          name="modeloVeiculo"
          placeholder="Insira o modelo do veiculo do infrator" />

        <Input
          type="text"
          text="Placa do veiculo"
          name="placaVeiculo"
          placeholder="Insira a placa do veiculo do infrator" />

        <Input
          type="text"
          text="Cor do veiculo"
          name="corVeiculo"
          placeholder="Insira a cor do veiculo do infrator" />

        <SubmitButton text="Denunciar!" />
      </form>
    </div>

  );
}

export default Acidente;