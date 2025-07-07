// Importar librerias
import { useState } from 'react';

export const useCounter = (valorInicial = 10) => {

    /****************** Hooks ******************/

    let [contador, setContador] = useState(valorInicial)

    /****************** Funciones ******************/

    function aumentarContador(valor = 1) {
        setContador(contador + valor)
    }

    function descontarContador(valor = 1) {
        if (contador === 0) {
            return false;
        }
        setContador(contador - valor)
    }

    function resetearContador() {
        setContador(valorInicial)
    }

    /****************** Respuesta ******************/

    return {
        contador,
        aumentarContador,
        descontarContador,
        resetearContador
    }

}
