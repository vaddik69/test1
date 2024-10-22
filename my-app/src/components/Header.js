import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../css/Dashboard.css'

const Header = ({ title, logoutPath, user }) => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        let checkUser = JSON.parse(localStorage.getItem(user));
        if (checkUser) { 
            checkUser.id = '0';
            localStorage.setItem(user, JSON.stringify(checkUser));
         }
         
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