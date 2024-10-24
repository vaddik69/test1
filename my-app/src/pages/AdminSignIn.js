import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/AdminSignIn.css';
import SignInForm from '../components/SignInForm';

const AdminSignIn = () => {
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
                localStorage.setItem('userRole', 'admin');
                localStorage.setItem('isAuthenticated', true);
            navigate('/admin/dashboard');
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
         linkPath='/signin'
         linkTitle='Sign in as user' />
    );
};

export default AdminSignIn;
