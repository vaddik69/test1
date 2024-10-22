import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import AdminSignIn from './components/AdminSignIn';
import AdminDashboard from './components/AdminDasboard';
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
