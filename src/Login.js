import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'user') {
            setUser(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleLogin = () => {
        const apiUrl = 'http://localhost:4000/user/sign-in';

        const hashedPassword = bcrypt.hashSync(password, 10);

        axios.post(apiUrl, { user, password: hashedPassword })
            .then((res) => {
                console.log('서버 응답:', res.data);
            })
            .catch((err) => {
                console.error('서버 요청 오류:', err);
            });
    }

    return (
        <div>
            <h2>로그인</h2>
            <form>
                <div>
                    <label>사용자 이메일:</label>
                    <input type='text' name="user" value={user} onChange={handleInputChange} />
                </div>
                <div>
                    <label>패스워드:</label>
                    <input type='password' name="password" value={password} onChange={handleInputChange} />
                </div>
                <button type="button" onClick={handleLogin}>로그인</button>
            </form>
        </div>
    );
}

export default Login;
