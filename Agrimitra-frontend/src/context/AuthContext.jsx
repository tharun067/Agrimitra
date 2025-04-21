import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
    };

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(null);

    useEffect(() => {
        const savedPhoneNumber = localStorage.getItem('phoneNumber');
        const authStatus = localStorage.getItem('isAuthenticated');

        if (savedPhoneNumber && authStatus === 'true') {
            setPhoneNumber(savedPhoneNumber);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (phone) => {
        setPhoneNumber(phone);
    };

    const verifyOtp = async (otp) => {
        if (otp.length === 6 && !isNaN(Number(otp))) {
            setIsAuthenticated(true);

            if (phoneNumber) {
                localStorage.setItem('phoneNumber', phoneNumber);
                localStorage.setItem('isAuthenticated', 'true');
            }

            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setPhoneNumber(null);
        localStorage.removeItem('phoneNumber');
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            phoneNumber,
            login,
            verifyOtp,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};
