import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card(props){
    console.log("props")
    console.log(props)
    return (

        <div className='card--container'>
            <h1>{props.endereco}</h1>
            <p>{props.createdAt}</p>

        </div>

    );
}

export default Card