import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const validEmail = 'admin@example.com';
    const validPassword = 'password123';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Email is required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Incorrect email format');
            return;
        }
        if (!password) {
            setError('Password is required');
            return;
        }

        if (email === validEmail && password === validPassword) {
            navigate('/dashboard');
        } else {
            setError('Incorrect email or password');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Sign In</h2>
                {error && <p style={styles.error}>{error}</p>}
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" disabled={!email || !password}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        textAlign: 'center',
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px',
    },
    error: {
        color: 'red',
    },
};

export default SignIn;
