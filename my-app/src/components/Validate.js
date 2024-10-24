export const handleSignInSubmit = (e, email, password, setError, navigate, userRole) => {
    e.preventDefault();
    
    const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validEmail = null;
    let validPassword = null;
    let redirectPath = null;

    if (userRole === 'user') {
        validEmail = 'user@example.com';
        validPassword = 'password456';
        redirectPath = '/dashboard';
    }
    else if (userRole === 'admin') {
        validEmail = 'admin@example.com';
        validPassword = 'password123';
        redirectPath = '/admin/dashboard';
    }

    if (!email) {
        setError('Email is required');
        return;
    }
    if (!password) {
        setError('Password is required');
        return;
    }
    if (!EMAIL_REGEXP.test(email)) {
        setError('Incorrect email format');
        return;
    }
    if (email === validEmail && password === validPassword) {
        localStorage.setItem('userRole', userRole);
        localStorage.setItem('isAuthenticated', true);
        navigate(redirectPath);
    } else {
        setError('Incorrect email or password');
    }
};
