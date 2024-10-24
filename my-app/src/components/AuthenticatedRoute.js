import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthenticatedRoute = () => {
    const userRole = localStorage.getItem('userRole');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (userRole === 'user') {
        return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
    }
    else if (userRole === 'admin') {
        return isAuthenticated ?  <Outlet /> : <Navigate to="/admin/signin" />;
    }
};

export default AuthenticatedRoute;