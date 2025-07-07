import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    /****************** Hooks ******************/

    const [formState, setFormState] = useState(initialForm);

    /****************** Funciones ******************/

    function onInputChange(event) {
        // Debug
        // console.log('event', event);

        let { target } = event;
        let { name, value } = target;
        setFormState({
            ...formState,
            [name]: value // name: value, no funciona, ya que name no se lee como username o email, para esto existen las propiedades computadas de los objetos, name -> [name]
        });
    }

    function onResetForm() {
        setFormState(initialForm);
    }

    /****************** Respuesta ******************/

    return {
        formState,
        onInputChange,
        onResetForm,
        ...formState
    }
}
