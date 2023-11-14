import axios from 'axios';
import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import swal from 'sweetalert';

async function loginUser(credentials) {
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.withCredentials = true;
    const resp = await axios.post('https://192.168.0.227:9020/teacher/login', JSON.stringify(credentials))
    console.log(resp)
    // return axios.post('https://192.168.0.227:9020/parents/login', credentials)
    //     .then(data => data.json())
}

const SignIn = () => {
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            phone,
            password
        });
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
                .then((value) => {
                    console.log(value)
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                    window.location.href = "/parent/home";
                });
        } else {
            swal("Failed", response.message, "error");
        }
    }

    return (
        <div>
            {/* <Grid item xs={false} md={7} className={classes.image} /> */}
            <div>
                <div>
                    <div>
                        <FaLock />
                    </div>
                    <div>
                        Sign in
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input required id="tel" name="tel" label="휴대폰번호" onChange={e => setPhone(e.target.value)} />
                        <input required id="password" name="password" label="Password" type="password" onChange={e => setPassword(e.target.value)} />
                        <button type="submit">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;