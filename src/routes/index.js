import React from 'react';

import InfoBasicas from '../pages/InfoBasicas';
import Trabalho from '../pages/Trabalho';
import Projetos from '../pages/Projetos';
import Resultados from '../pages/Resultados';

import { Router, Route } from 'react-router-dom';

const Routes = () => {
    return(
        <div>
            <Routers>
                    <Route path="/" exact={true} component={InfoBasicas} />
                    <Route path="/Trabalho" component={Trabalho} />
                    <Route path="/Projetos" component={Projetos} />
                    <Route path="/Resultados" component={Resultados} />
            </Routers>
        </div>
    )
}

export default Routes;