import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        localStorage.setItem('isAuthenticated', false);
        navigate('/signin');
    }

    return (
        <div>
           <Header title='Dashboard' onSignOut={handleSignOut} />
        </div>
    );
};

export default Dashboard;
