

import React from 'react';
import Counter from '../../components/Counter/Counter';
//importamos el archivo CSS que dará diseño a nuestro componente/container actual
import './Home.css';

//Al ser componentes funcionales, tienen como habremos imaginado,
//una función :)

const Home = () => {

    return (
        //El return tiene que tener OBLIGATORIAMENTE un div padre, en caso contrario dará error.

        <div className='homeDesign'>

            hola soy home desde home
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>

        </div>
    )
}

//finalmente, para que este componente/container pueda ser importado en alguna parte,
//tendrá que ser exportado desde aquí

export default Home;