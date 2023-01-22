import React from 'react';
import styles from './Home.module.css';
import {GiPoliceOfficerHead} from 'react-icons/gi'
import LinkButton from '../layouts/LinkButton'

function Home() {
  return (
    <div> 
      <section className={styles.apresentacao}>
        <div className={styles.policeicon}>
          <GiPoliceOfficerHead/>
        </div>
        <div className={styles.texto_apresentacao}>
          
          <LinkButton to="/cadastro" text="Registrar-se"/>
          <LinkButton to="/login" text="Login"/>
        </div>
      </section>

    </div>

  );
}

export default Home;