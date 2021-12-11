import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MainContext } from '../../providers'

function InfoBasicas() {

    const mainContext = useContext(MainContext);
    console.log(mainContext);

    const handleSetName = (event) => {
        mainContext.setNome(event.target.value);
    }

    const handleSetFormacao = (event) => {
        mainContext.setFormacao(event.target.value);
    }
    
    return (
        <div>
            <p>Qual seu nome? </p>
            <textarea onChange={handleSetName} value={mainContext.nome}></textarea>
            <br />

            <p>Qual a sua formação?</p>
            <textarea onChange={handleSetFormacao} value={mainContext.formacao}></textarea>
            <br />

            <Link to="/trabalho">
                <button>Próxima Página</button>
            </Link>
        </div>
    )

}

export default InfoBasicas;