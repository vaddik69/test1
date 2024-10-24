import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AnonymousRoute = () => {
    const userRole = localStorage.getItem('userRole');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (userRole === 'user' && isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }
    else if (userRole === 'admin' && isAuthenticated) {
        return <Navigate to='/admin/dashboard' />;
    }

    return <Outlet />;
};

export default AnonymousRoute;
