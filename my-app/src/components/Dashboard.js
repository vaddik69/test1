import React from 'react';
import Header from './Header';
import '../css/Dashboard.css'

const Dashboard = () => {
    return (
        <div>
           <Header title='Dashboard' logoutPath='/signin' user='user' />
        </div>
    );
};

export default Dashboard;
