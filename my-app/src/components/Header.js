import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../css/Dashboard.css'

const Header = ({ title, logoutPath }) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.setItem('isAuthenticated', false);
         
        navigate(logoutPath);
    }

    return (
    <header className="header">
         <p className='dash'>{title}</p>

        <form onSubmit={handleLogout}>
            <button type='submit'>
                Sign Out
            </button>
        </form>
    </header>
    )
}

export default Header;