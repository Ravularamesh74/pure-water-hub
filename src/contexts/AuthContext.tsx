import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    email: string;
    username: string;
    role: 'admin' | 'user';
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => boolean;
    register: (email: string, password: string, name: string) => boolean;
    forgotPassword: (email: string) => boolean;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('shiva_user');
        if (savedUser) {
            setIsAuthenticated(true);
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (email: string, password: string) => {
        // Mock authentication
        if (email === 'admin@shivaganga.com' && password === 'admin123') {
            const userData: User = { id: '1', email, username: 'Admin', role: 'admin' };
            localStorage.setItem('shiva_user', JSON.stringify(userData));
            setIsAuthenticated(true);
            setUser(userData);
            return true;
        } else if (email && password.length >= 6) {
            const userData: User = { id: '2', email, username: email.split('@')[0], role: 'user' };
            localStorage.setItem('shiva_user', JSON.stringify(userData));
            setIsAuthenticated(true);
            setUser(userData);
            return true;
        }
        return false;
    };

    const register = (email: string, _password: string, name: string) => {
        // Mock registration
        const userData: User = { id: Date.now().toString(), email, username: name, role: 'user' };
        localStorage.setItem('shiva_user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
        return true;
    };

    const forgotPassword = (email: string) => {
        console.log("Reset link sent to:", email);
        return true;
    };

    const logout = () => {
        localStorage.removeItem('shiva_user');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register, forgotPassword, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
