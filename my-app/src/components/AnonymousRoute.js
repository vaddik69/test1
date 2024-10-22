import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AnonymousRoute = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    if (user && user.id === '1') {
        return <Navigate to="/dashboard" />;
    }
    else if (admin && admin.id === '1') {
        return <Navigate to='/admin/dashboard' />;
    }

    return <Outlet />;
};

export default AnonymousRoute;
