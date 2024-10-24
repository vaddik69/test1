import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/AdminSignIn.css';
import SignInForm from '../components/SignInForm';
import { handleSignInSubmit } from '../components/Validate';

const AdminSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        handleSignInSubmit(e, email, password, setError, navigate, 'admin');
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
