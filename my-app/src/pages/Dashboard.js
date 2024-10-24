import React from 'react';
import Header from '../components/DashboardHeader.js';
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
           <Header 
            title='Dashboard' 
            onSignOut={handleSignOut} />
    );
};

export default Dashboard;
