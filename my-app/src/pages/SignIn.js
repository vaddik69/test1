import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/SignIn.css';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const validEmail = 'user@example.com';
    const validPassword = 'password456';
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
                localStorage.setItem('userRole', 'user');
                localStorage.setItem('isAuthenticated', true);
            navigate('/dashboard');
        } else {
            setError('Incorrect email or password');
        }
    };

    return (
        <SignInForm
         handleSubmit={handleSubmit}
         error={error}
         email={email}
         password={password}
         setEmail={setEmail}
         setPassword={setPassword} 
         linkPath='/admin/signin'
         linkTitle='Sign in as admin' />
    );
};

export default SignIn;
