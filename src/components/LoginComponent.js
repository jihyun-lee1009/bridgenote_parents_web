import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const LoginComponent = () => {
    const dispatch = useDispatch();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {

    }, [msg]);

    const LoginFunc = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <h1>LoginComponent</h1>
            <form onSubmit={LoginFunc}>
                <label htmlFor='id'>id : </label>
                <input type='text' id='id' />
                <label htmlFor='password'>password : </label>
                <input type='password' />
                <button type='submit'></button>
                {msg}
            </form>
        </>
    )
}

export default LoginComponent
