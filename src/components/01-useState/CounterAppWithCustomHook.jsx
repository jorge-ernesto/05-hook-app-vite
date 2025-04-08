// Importar librerias
import { useCounter } from '../../hooks/useCounter';

export const CounterAppWithCustomHook = () => {

    /****************** Hooks ******************/

    const { contador, aumentarContador, descontarContador, resetearContador } = useCounter(10);

    /****************** Respuesta ******************/

    return (
        <>
            {/* Ejemplo usando Custom Hook */}
            <h1 className="text-success">Custom Hook: {contador}</h1>
            <button className="btn btn-primary" onClick={() => aumentarContador(2)}>+1</button>
            <button className="btn btn-primary" onClick={() => resetearContador()}>Reset</button>
            <button className="btn btn-primary" onClick={() => descontarContador(2)}>-1</button>

            {/* Separador */}
            <hr className="text-danger" style={{ borderWidth: '3px' }} />
        </>
    )
}
