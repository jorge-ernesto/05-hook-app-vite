// Importar librerias
import { useState } from 'react';

export const CounterApp = () => {

    /****************** Hooks ******************/

    const [state, setState] = useState({
        contador1: 10,
        contador2: 20,
        contador3: 30
    })

    /****************** Respuesta ******************/

    return (
        <>
            {/* Ejemplo useState */}
            <h1 className="text-success">useState</h1>
            <h2>Contador 1: {state.contador1}</h2>
            <h2>Contador 2: {state.contador2}</h2>
            <h2>Contador 3: {state.contador3}</h2>
            <button
                className="btn btn-primary"
                onClick={
                    () => {
                        setState({
                            ...state,
                            contador1: state.contador1 + 1
                        })
                    }
                }
            >+1</button>

            {/* Separador */}
            <hr className="text-danger" style={{ borderWidth: '3px' }} />
        </>
    )
}
