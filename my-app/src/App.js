import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import AdminSignIn from './pages/AdminSignIn';
import AdminDashboard from './pages/AdminDasboard';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import AnonymousRoute from './components/AnonymousRoute';

const App = () => {

    return (
        <Router>
            <Routes>
                <Route element={ <AnonymousRoute /> }>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path='/admin/signin' element={<AdminSignIn />} />
                </Route>

                <Route element={ <AuthenticatedRoute /> }>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Route>

                <Route path="*" element={<Navigate to="/signin" />} />
            </Routes>
        </Router>
    );
};

export default App;
