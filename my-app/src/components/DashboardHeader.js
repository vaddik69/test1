import React from 'react';
import '../css/DashboardHeader.css';

const Header = ({ title, onSignOut }) => {
    return (
    <header className="header">
         <p className='dash'>{title}</p>

        <form onSubmit={onSignOut}>
            <button type='submit'>
                Sign Out
            </button>
        </form>
    </header>
    )
};

export default Header;