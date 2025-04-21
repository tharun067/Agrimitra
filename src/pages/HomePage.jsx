import { Activity, Leaf, Shield, Users } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
    const {isAuthenticated} = useAuth();
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Leaf className="h-8 w-8 text-primary-600" />
                            <span className="ml-2 text-2xl font-bold text-primary-800">Agrimitra</span>
                        </div>
                        <div>
                            { isAuthenticated ? (
                                <Link to="/dashboard" className="btn-primary">
                                    Dashboard
                                </Link>
                            ) : (
                                <Link to="/login" className="btn-primary">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
      
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 animate-fade-in">
                            Protect Your Crops with AI-Powered Disease Detection
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 animate-slide-up">
                            Agrimitra helps farmers identify plant diseases instantly through image analysis,
                            providing timely solutions to protect your harvest and maximize yield.
                        </p>
                        <Link to="/login" className="btn-primary text-lg px-8 py-3 shadow-md animate-slide-up">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
      
            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary-800">How Agrimitra Helps Your Crops</h2>
          
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card transition-transform duration-300 hover:scale-105">
                            <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Early Disease Detection</h3>
                            <p className="text-gray-600">
                                Identify plant diseases in their early stages, before they can spread and damage your entire crop.
                            </p>
                        </div>
            
                        <div className="card transition-transform duration-300 hover:scale-105">
                            <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                <Activity className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
                            <p className="text-gray-600">
                                Get real-time identification of diseases with our advanced AI algorithms trained on thousands of plant images.
                            </p>
                        </div>
            
                        <div className="card transition-transform duration-300 hover:scale-105">
                            <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expert Recommendations</h3>
                            <p className="text-gray-600">
                                Receive tailored treatment suggestions and best practices from agricultural experts to combat identified diseases.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
      
            {/* CTA Section */}
            <section className="bg-primary-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to protect your crops?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of farmers who trust Agrimitra for their plant health management.
                    </p>
                    <Link to="/login" className="btn bg-white text-primary-800 hover:bg-gray-100 px-8 py-3 font-semibold text-lg">
                        Start Now
                    </Link>
                </div>
            </section>
      
            {/* Footer */}
            <footer className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <Leaf className="h-6 w-6 text-primary-600" />
                            <span className="ml-2 text-xl font-semibold text-primary-800">Agrimitra</span>
                        </div>
                        <p className="text-gray-600">© 2025 Agrimitra. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage
