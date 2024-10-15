import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<SignIn />} />
            </Routes>
        </Router>
    );
};

export default App;
