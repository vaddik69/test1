import React from 'react'
import '../css/Dashboard.css'

const Header = () => {
    return (
    <header className="header">
         <p className='dash'>Dashboard</p>

        <form>
            <button type='submit' onSubmit={localStorage.clear()}>
                Sign Out
            </button>
        </form>
    </header>
    )
}

export default Header;