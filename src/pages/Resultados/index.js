import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { MainContext } from '../../providers';

const Resultado = () => {

    const mainContext = useContext(MainContext);

    function resetResults() {
        mainContext.setNome("");
        mainContext.setFormacao("");
        mainContext.setTrabalho("");
        mainContext.setEmpresaAtual("");
        mainContext.setEmpresaSonho("");
        mainContext.setProjetos("");
    }

    return (
        <div>
            <p>Olá, {mainContext.nome} !</p>
            <p>Você tem uma boa formação em {mainContext.formacao}</p>
            <p>{(mainContext.trabalho ==='Sim') 
                ? "Atualmente você trabalha na empresa " + mainContext.empresaAtual 
                : "Sua empresa dos sonhos é a " + mainContext.empresaSonho }, é um ótimo local para trabalhar!</p>
            <p>Temos vagas em {mainContext.projetos} disponíveis para você aplicar.</p>

            <Link to="/">
                <button onClick={resetResults}>Recomeçar</button>
            </Link>
        </div>
    )

}

export default Resultado;
