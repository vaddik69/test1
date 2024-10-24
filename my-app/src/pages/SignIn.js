import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignIn.css';
import SignInForm from '../components/SignInForm';
import { handleSignInSubmit } from '../components/Validate';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        handleSignInSubmit(e, email, password, setError, navigate, 'user');
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
