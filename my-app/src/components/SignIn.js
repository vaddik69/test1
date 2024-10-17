import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignIn.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const validEmail = 'admin@example.com';
    const validPassword = 'password123';
    const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!password) {
            setError('Password is required');
            return;
        }
        if (!EMAIL_REGEXP.test(email)) {
            setError('Incorrect email format');
            return;
        }
        if (email === validEmail && password === validPassword) {
            navigate('/dashboard');
        } else {
            setError('Incorrect email or password');
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit} className='form'>
                <h1>Sign In</h1>

                {error && <p className='error-msg'>{error}</p>}
                
                <div className='input-box' >
                    <input type='text' placeholder='E-mail' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={(e) => e.target.setSelectionRange(email.length, email.length)} />
                </div>

                <div className='input-box' >
                    <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={(e) => e.target.setSelectionRange(password.length, password.length)} />
                </div>

                <button type="submit" disabled={!email || !password}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
