import { useState, useEffect } from 'react'

export const useFetch = () => {

    /****************** Hooks ******************/

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    /****************** Funciones ******************/

    async function getFetch() {

        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await resp.json();
        console.log(data);
    }

    // Solo se ejecutara una unica vez y cuando el componente es montado la primera vez
    useEffect(() => {
        getFetch();
    }, []);

    return {
        // state, // Es lo mismo que lo de abajo, pero hay que desestructurarlo al usar el Hook
        // ...state, // Es lo mismo que lo de abajo, exactamente igual, es decir ya esta desestructurado al usar el Hook
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}
