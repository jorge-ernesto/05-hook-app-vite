/* eslint-disable no-unused-vars */
// Importar librerias
import { useState, useEffect } from 'react';
import { Message } from './Message';
import { useForm } from '../../hooks/useForm';

export const SimpleFormWithCustomHook = () => {

    /****************** Hooks ******************/

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    /****************** Funciones ******************/

    // Solo se ejecutara una unica vez y cuando el componente es montado la primera vez
    useEffect(() => {
        // console.log('useEffect called!')
    }, []);

    // Se ejecuta cada vez que hay un cambio en formState
    useEffect(() => {
        // console.log('formState changed!')
    }, [formState]);

    // Se ejecuta cada vez que hay un cambio en email
    useEffect(() => {
        // console.log('email changed!')
    }, [email]);

    /****************** Respuesta ******************/

    return (
        <>
            {/* Formulario */}
            <h1>Formulario con Custom Hook</h1>
            <input type="input" className="form-control" name="username" value={username} onChange={onInputChange} placeholder="Ingrese usuario" />
            <input type="email" className="form-control mt-2" name="email" value={email} onChange={onInputChange} placeholder="Ingrese email" />
            <input type="password" className="form-control mt-2" name="password" value={password} onChange={onInputChange} placeholder="Ingrese contraseña" />

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>

            {/* Separador */}
            <hr className="text-danger" style={{ borderWidth: '3px' }} />
        </>
    )
}
