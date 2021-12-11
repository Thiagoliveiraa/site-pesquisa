import React, { useState } from 'react';

export const MainContext = React.createContext({});

export const Provider = (props) => {

    const [nome, setNome] = useState("");
    const [formacao, setFormacao] = useState("");
    const [trabalho, setTrabalho] = useState("");
    const [empresaAtual, setEmpresaAtual] = useState("");
    const [empresaSonho, setEmpresaSonho] = useState("");
    const [projetos, setProjetos] = useState("");

    return (
        <MainContext.Provider value={{
                nome, setNome, 
                formacao, setFormacao, 
                trabalho, setTrabalho, 
                empresaAtual, setEmpresaAtual, 
                empresaSonho, setEmpresaSonho, 
                projetos, setProjetos
                }}>
            {props.children}
        </MainContext.Provider>
    )
}