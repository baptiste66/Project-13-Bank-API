import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/reducers/auth';
import authService from '../../service/callAPI';
import { useNavigate } from 'react-router-dom';

export default function Connection() {
    const [wrongLogin, setWrongLogin] = useState(false)
    const dispatch = useDispatch();
    const [email, setemail] = useState('tony@stark.com');
    const [password, setPassword] = useState('password123');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await authService.login(email, password);
            const { token } = response.body;
            console.log(token)
            dispatch(loginSuccess({ token }));
            navigate('/user');
        } catch (error) {
            console.error('Login failed:', error.message);
            setWrongLogin(true)
        }
    };

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {wrongLogin?<p className='pb_auth'>Problème d'authentication verifier le mail et le mot de passe</p>:''}
                    <button className="sign-in-button" type='submit'>Sign In</button>
                    {/* <!--  --> */}
                </form>
            </section>
    </main>
    )
}
