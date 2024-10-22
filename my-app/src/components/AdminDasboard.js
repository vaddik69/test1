import React from 'react';
import '../css/AdminDashboard.css'
import Header from './Header';

const AdminDashboard = () => {
    return (
        <div>
            <Header title='Admin Dashboard' logoutPath='/admin/signin' user='admin' />
        </div>
    );
};

export default AdminDashboard;
