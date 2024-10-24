import React from 'react';
import '../css/SignInForm.css';
import { Link } from 'react-router-dom';

const SignInForm = ({ handleSubmit, error, email, password, setEmail, setPassword, linkPath, linkTitle}) => {
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit} className='form'>
                <h1>Sign In</h1>

                {error && <p className='error-msg'>{error}</p>}
                
                <div className='input-box'>
                    <input 
                    type='text' 
                    placeholder='E-mail' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={(e) => e.target.setSelectionRange(email.length, email.length)} />
                </div>

                <div className='input-box' >
                    <input
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={(e) => e.target.setSelectionRange(password.length, password.length)} />
                </div>

                <button type="submit" disabled={!email || !password}>
                    Sign In
                </button>

                <Link className='link' to={linkPath}>{linkTitle}</Link>
            </form>
        </div>
    )
};

export default SignInForm;