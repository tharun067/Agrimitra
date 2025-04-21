import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, LogOut, Menu, X, Home, History, Settings2, HelpCircleIcon } from 'lucide-react';
import { ImProfile } from 'react-icons/im';
import { useAuth } from '../context/AuthContext';


function DashboardLayout({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const navItems = [
        { name: 'Home', path: '/dashboard', icon: <Home className='w-5 -5' /> },
        { name: 'History', path: '/dashboard/history', icon: <History className='w-5 -5' /> },
        { name: 'Settings', path: '/dashboard/settings', icon: <Settings2 className='w-5 -5' /> },
        { name: 'Profile', path: '/dashboard/profile', icon: <ImProfile className='w-5 -5' /> },
        { name: 'Help', path: '/dashboard/help', icon: <HelpCircleIcon className='w-5 -5' /> },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    }
    const handleLogout = () => {
        logout();
        navigate('/');
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden"
                    onClick={closeSidebar}
                ></div>
            )}
      
            {/* Mobile sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                    <Link to="/dashboard" className="flex items-center" onClick={closeSidebar}>
                        <Leaf className="h-8 w-8 text-primary-600" />
                        <span className="ml-2 text-xl font-bold text-primary-800">Agrimitra</span>
                    </Link>
                    <button
                        onClick={closeSidebar}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
        
                <nav className="mt-4 px-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={closeSidebar}
                            className={`flex items-center px-4 py-2 my-1 text-base font-medium rounded-lg ${isActive(item.path)
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {item.icon}
                            <span className="ml-3">{item.name}</span>
                        </Link>
                    ))}
          
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 mt-4 text-base font-medium text-red-600 rounded-lg hover:bg-red-50"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="ml-3">Logout</span>
                    </button>
                </nav>
            </div>
      
            {/* Header */}
            <header className="bg-white shadow-sm z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                            <Link to="/dashboard" className="flex items-center lg:ml-0">
                                <Leaf className="h-8 w-8 text-primary-600" />
                                <span className="ml-2 text-xl font-bold text-primary-800">Agrimitra</span>
                            </Link>
                        </div>
            
                        <div className="flex items-center">
                            <button
                                onClick={handleLogout}
                                className="ml-4 flex items-center text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
                            >
                                <LogOut className="h-5 w-5 mr-1" />
                                <span className="hidden md:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
      
            {/* Desktop sidebar and main content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Desktop sidebar */}
                <aside className="hidden lg:flex lg:flex-shrink-0">
                    <div className="w-64 flex flex-col border-r border-gray-200 bg-white">
                        <nav className="flex-1 px-4 py-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center px-4 py-2 my-1 text-base font-medium rounded-lg ${isActive(item.path)
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.icon}
                                    <span className="ml-3">{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </aside>
        
                {/* Main content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout
