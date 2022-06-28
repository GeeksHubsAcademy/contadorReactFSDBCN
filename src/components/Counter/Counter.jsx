
import React, {useState, useEffect} from 'react';

const Counter = () => {

    //A continuación teneis la estructura de los hooks, 
    const [resultado, setResultado] = useState(0);

    //Las funciones useEffect, vienen provistas de la casa,
    //son funciones que nos permiten interactuar en los distintos pasos 
    //del montaje de un componente

    //PRIMERO, EL COMPONENTE SE MONTA

    //En los componentes funcionales, se trabaja con useEffect
    //En los componentes de clase, es más intuitivo, y la funcion se llama componentDidMount()

    useEffect(()=>{
        //Esta función SOLO se ejecuta una vez, al montarse por primera vez.
        console.log("Hola, me he montado por primera vez", resultado);
        // eslint-disable-next-line
    },[]);

    //CUANDO SE ACTUALIZA EL COMPONENTE, SE EJECUTARÁ LA SIGUIENTE

    //Al actualizarse el componente, se ejecuta el siguiente useEffect
    //El equivalente a esto en los componentes de clase, sería componentDidUpdate()

    useEffect(()=>{

        //Este useEffect corresponde a las actualizaciones, se ejecutará cada vez
        //que el componente se haya ACTUALIZADO

        console.log("Me he actualizado",resultado);
    });

    // useEffect(()=>{
    //     //Este useEffect de seguimiento personalizado sólo se ejecutará
    //     //si cambia de valor el hook asignado dentro de los corchetes
    //     console.log("Hola, me he ejecutado porque resultado ha cambiado", resultado);
    // },[resultado]);

    //Después de los useEffect, anoto las funciones normales

    const operar = (operacion) => {

        if(operacion === "+"){
            //En este caso, estoy modificando (seteando) el valor del hook. por lo tanto
            //el componente se recargará de nuevo
            setResultado(resultado + 1);

        }else{

            setResultado(resultado - 1);

        };
    }

    //Zona de renderizado (pintado en pantalla)

    return(
        <div>
            <button onClick={()=>operar("+")}>+</button>
            {resultado}
            <button onClick={()=>operar("-")}>-</button>
        </div>
    )
}

export default Counter;
