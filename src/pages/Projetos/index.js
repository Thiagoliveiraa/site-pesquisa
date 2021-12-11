import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { MainContext } from '../../providers'

const Projetos = () => {

    const mainContext = useContext(MainContext);
    console.log(mainContext)

    const handleSetProjetos = (event) => {
        mainContext.setProjetos(event.target.value);
    }

    return(
        <div>

            <p>Qual sua área de projetos favorita?</p>

            <select onChange={handleSetProjetos} value={mainContext.Projetos}>
                <option value="Front-End">      Front-End</option>
                <option value="Back-End">       Back-End</option>
                <option value="Banco de Dados"> Banco de Dados</option>
                <option value="Full Stack">     Full Stack</option>
                <option value="Outras áreas">   Outras áreas</option>
            </select>

            <br />

            <Link to="/Trabalho">
                <button>Voltar</button>
            </Link>

            <Link to="/Resultados">
                <button>Próxima Página</button>
            </Link>

        </div>
    )
}

export default Projetos;