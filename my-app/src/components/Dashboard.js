import React from 'react';
import Header from './Header';
import '../css/Dashboard.css'

const Dashboard = () => {
    return (
        <div>
           <Header title='Dashboard' logoutPath='/signin' />
        </div>
    );
};

export default Dashboard;
