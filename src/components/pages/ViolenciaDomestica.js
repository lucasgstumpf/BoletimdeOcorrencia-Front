import React from 'react';
import styles from './Login.module.css';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

function violenciaDomestica() {
    return (
        <div className={styles.formulario}>
            <form >
                <Input
                    type="text"
                    text="Nome do agressor"
                    name="nameAgressor"
                    placeholder="Insira o nome do agressor" />
                <Input
                    type="text"
                    text="caracteristica do Agressor"
                    name="caracteristicaAgressor"
                    placeholder="Insira a característica do agressor" />

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

                <SubmitButton text="Denunciar!" />
            </form>
        </div>

    );
}

export default violenciaDomestica;