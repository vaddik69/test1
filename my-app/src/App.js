import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import AdminSignIn from './components/AdminSignIn';
import AdminDashboard from './components/AdminDasboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
                <Route path='/admin/signin' element={<AdminSignIn setIsAuthenticated={setIsAuthenticated} />} />
                <Route
                    path="/dashboard"
                    element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />}
                />
                <Route
                    path="/admin/dashboard"
                    element={<ProtectedRoute element={<AdminDashboard />} isAuthenticated={isAuthenticated} />}
                />
                <Route path="*" element={<Navigate to="/signin" />} />
            </Routes>
        </Router>
    );
};

export default App;
