import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthenticatedRoute = () => {
    const userRole = localStorage.getItem('userRole');
    const isAuth = localStorage.getItem('isAuth') === 'true';

    if (userRole === 'user') {
        return isAuth ? <Outlet /> : <Navigate to="/signin" />;
    }
    else if (userRole === 'admin') {
        return isAuth ?  <Outlet /> : <Navigate to="/admin/signin" />;
    }
};

export default AuthenticatedRoute;