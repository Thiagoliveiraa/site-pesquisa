import React, { useContext } from 'react';

import { MainContext } from '../../providers'


const TrabalhoComp = () => {

    const mainContext = useContext(MainContext);
    console.log("Trabalho rendered");

    const handleSetEmpresaAtual = (event) => {
        mainContext.setEmpresaAtual(event.target.value);
    }

    const handleSetEmpresaSonho = (event) => {
        mainContext.setEmpresaSonho(event.target.value);
    } 

    if (mainContext.trabalho === 'Sim'){
        return (
            <div>
                <p>Qual a empresa que você trabalha atualmente? </p>
                <textarea onChange={handleSetEmpresaAtual} value={mainContext.empresaAtual}></textarea>
            </div>
        )
    } else if (mainContext.trabalho === 'Não') {
        return (
            <div>
                <p>Qual sua empesa dos sonhos para trabalhar? </p>
                <textarea onChange={handleSetEmpresaSonho} value={mainContext.empresaSonho}></textarea>
            </div>
        )
    } else {
        return (
            <div>
                
            </div>
        )
    }


}

export default TrabalhoComp;