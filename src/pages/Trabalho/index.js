import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { MainContext } from '../../providers'
import TrabalhoComp from '../../components/TrabalhoComp'

const Trabalho = () => {

    const mainContext = useContext(MainContext);
    console.log(mainContext)

    const handleSetTrabalho = (event) => {
        mainContext.setTrabalho(event.target.value);
    }

    return (
        <div>
            <form>
                <p>Você está trabalhando atualmente?</p>
                <label>Sim </label>
                <input name="radio" value="Sim" type="radio" onChange={handleSetTrabalho} checked={(mainContext.trabalho ==='Sim' ? true : false)} /><br />
                <label>Não </label>
                <input name="radio" value="Não" type="radio" onChange={handleSetTrabalho} checked={(mainContext.trabalho ==='Não' ? true : false)} /><br />
            </form>

            <TrabalhoComp />

            <Link to="/">
                <button>Voltar</button>
            </Link>

            <Link to="/Projetos">
                <button>Próxima Página</button>
            </Link>

        </div>

    )
}

export default Trabalho;