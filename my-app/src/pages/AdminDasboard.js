import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AdminDashboard.css';
import Header from '../components/DashboardHeader.js';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        localStorage.setItem('isAuthenticated', false);
        navigate('/admin/signin');
    }

    return (
        <div>
            <Header title='Admin Dashboard' onSignOut={handleSignOut} />
        </div>
    );
};

export default AdminDashboard;
