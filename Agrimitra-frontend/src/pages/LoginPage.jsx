/*import { Leaf } from "lucide-react";
import { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase";

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

    function onSignup() {
        setIsLoading(true);
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
            const confirmation = signInWithPhoneNumber(auth, phoneNumber, recaptcha)
            console.log(confirmation);
        } catch (error) {
            console.log(error);
        }
    }

    async function onOTPVerify() {
        setIsLoading(true);
        try {
            await user.confirm(otp);
            setUser(user);
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col">
            {/* Header 
            <header className="pt-8 px-4">
                <div className="max-w-md mx-auto w-full">
                    <Link to="/" className="flex items-center">
                        <Leaf className="h-8 w-8 text-primary-600" />
                        <span className="ml-2 text-2xl font-bold text-primary-800">Agrimitra</span>
                    </Link>
                </div>
            </header>
            <Toaster toastOptions={{ duration: 4000 }} />

            {user ? (
                <h2 className="text-center text-white font-medium text-2xl">
                    👍 Login Success
                </h2>
            ) : (
                <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                    <div className="card max-w-md w-full mx-auto animate-fade-in bg-emerald-500">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            {otpSent ? 'Verify OTP' : 'Login to your account'}
                        </h2>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}

                        {!otpSent ? (
                            <div className="flex flex-col items-center gap-0.5">
                                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full ">
                                    <BsTelephoneFill size={30} />
                                </div>
                                <label htmlFor="" className="font-bold text-xl text-black text-center ">
                                    Verify your phone number
                                    </label>
                                    <div className="text-center">
                                <PhoneInput
                                    country={"in"}
                                    value={phoneNumber}
                                    onChange={(phoneNumber)=>setPhoneNumber("+"+phoneNumber)}
                                    className="w-full mt-4 "
                                        />
                                        </div>
                                    <div id="recaptcha-container"></div>
                                <button
                                    onClick={onSignup}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-full  mt-4"
                                >
                                    {isLoading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>Send code via SMS</span>
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                    <BsFillShieldLockFill size={30} />
                                </div>
                                <label htmlFor="otp" className="font-bold text-xl text-white text-center">
                                    Enter your OTP
                                </label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="opt-container "
                                ></OtpInput>
                                <button
                                    onClick={onOTPVerify}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded mt-4"
                                >
                                    {isLoading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>Verify OTP</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Footer 
            <footer className="py-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2025 Agrimitra. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default LoginPage;
*/

import React, { useState } from 'react';
import { Leaf, Phone, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    const navigate = useNavigate();
    const { login, verifyOtp } = useAuth();
  
    const handleSendOtp = async (e) => {
        e.preventDefault();
  
        if (!phoneNumber || phoneNumber.length < 10) {
            setError('Please enter a valid phone number');
            return;
        }
  
        setIsLoading(true);
        setError('');
    
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            login(phoneNumber);
            setOtpSent(true);
        } catch (err) {
            setError('Failed to send OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
        };
  
        const handleVerifyOtp = async (e) => {
        e.preventDefault();
    
        if (!otp || otp.length !== 6) {
            setError('Please enter a valid 6-digit OTP');
            return;
        }
    
        setIsLoading(true);
        setError('');
    
        try {
            const success = await verifyOtp(otp);
            if (success) {
            navigate('/dashboard');
            } else {
            setError('Invalid OTP. Please try again.');
            }
        } catch (err) {
            setError('Failed to verify OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
        };
  
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col">
            {/* Header */}
            <header className="pt-8 px-4">
                <div className="max-w-md mx-auto w-full">
                    <Link to="/" className="flex items-center">
                        <Leaf className="h-8 w-8 text-primary-600" />
                        <span className="ml-2 text-2xl font-bold text-primary-800">Agrimitra</span>
                    </Link>
                </div>
            </header>
  
            {/* Login Form */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="card max-w-md w-full mx-auto animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        {otpSent ? 'Verify OTP' : 'Login to your account'}
                    </h2>
  
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                            {error}
                        </div>
                    )}
  
                    {!otpSent ? (
                        <form onSubmit={handleSendOtp}>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="input pl-10"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                            </div>
  
                            <button
                                type="submit"
                                className={`btn-primary w-full mt-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send OTP'}
                                {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp}>
                            <div className="mb-4">
                                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                                    OTP Code
                                </label>
                                <input
                                    id="otp"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                    className="input text-center text-xl tracking-widest"
                                    placeholder="• • • • • •"
                                    required
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                    We've sent a 6-digit code to {phoneNumber}
                                </p>
                            </div>
  
                            <button
                                type="submit"
                                className={`btn-primary w-full mt-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Verifying...' : 'Verify & Login'}
                                {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
                            </button>
  
                            <div className="mt-4 text-center">
                                <button
                                    type="button"
                                    onClick={() => setOtpSent(false)}
                                    className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                                >
                                    Use a different phone number
                                </button>
                            </div>
                        </form>
                    )}
  
                    
                </div>
            </div>
  
            {/* Footer */}
            <footer className="py-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2025 Agrimitra. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LoginPage
