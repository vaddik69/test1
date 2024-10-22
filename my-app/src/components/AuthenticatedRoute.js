import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthenticatedRoute = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    let whoIs = localStorage.getItem('whoIs');
    if (!whoIs) { whoIs = 'user'; }

    
    if (whoIs === 'user') {
        return (user.roles.includes('user') && user.id === '1') 
                        ? <Outlet /> : <Navigate to='/signin' />;

    } else if (whoIs === 'admin') {
        return (admin.roles.includes('admin') && admin.id === '1') 
                        ? <Outlet /> : <Navigate to='/admin/signin' />;
    }

};

export default AuthenticatedRoute;