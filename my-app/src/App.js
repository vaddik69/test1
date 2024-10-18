import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import AdminSignIn from './components/AdminSignIn';
import AdminDashboard from './components/AdminDasboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/admin/signin' element={<AdminSignIn />} />
                <Route path='/admin/dashboard' element={<AdminDashboard />} />
                <Route path="*" element={<Navigate to="/signin" />} />
            </Routes>
        </Router>
    );
};

export default App;
