/* eslint-disable no-unused-vars */
// Importar librerias
import { useEffect, useState } from 'react';

export const Message = () => {

    /****************** Hooks ******************/

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    /****************** Funciones ******************/

    // Espacio de memoria donde estara definida la funcion
    const mouseMove = (event) => {
        setCoords({ x: event.x, y: event.y });
    }

    // Solo se ejecutara una unica vez y cuando el componente es montado la primera vez
    useEffect(() => {
        console.log('Message Mounted');

        // Creamos evento -- se ejecuta cada vez que el mouse se mueve
        window.addEventListener('mousemove', mouseMove);

        // Solo se ejecutara una unica vez y cuando el componente es desmontado
        return () => {
            console.log('Message Unmounted');

            // Eliminamos evento
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    /****************** Respuesta ******************/

    return (
        <>
            <h3>Usuario ya existe</h3>
            {/* {JSON.stringify(coords)} */}
        </>
    )
}
