import { Bell, Globe, Lock, Save, Shield } from 'lucide-react';
import React, { useState } from 'react'

function SettingsPage() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [locationEnabled, setLocationEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
    const [language, setLanguage] = useState('english');
    const [saveSuccess, setSaveSuccess] = useState(false);

    const handleSaveSettings = () => {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
    };
    
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      
            {saveSuccess && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg animate-fade-in">
                    Settings saved successfully
                </div>
            )}
      
            <div className="card mb-6">
                <div className="flex items-center mb-4">
                    <Bell className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold">Notifications</h2>
                </div>
        
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Enable Notifications</p>
                            <p className="text-sm text-gray-500">
                                Receive updates about disease alerts and treatment reminders
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={notificationsEnabled}
                                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
          
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Auto-Save Diagnoses</p>
                            <p className="text-sm text-gray-500">
                                Automatically save all plant diagnoses to your history
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={autoSaveEnabled}
                                onChange={() => setAutoSaveEnabled(!autoSaveEnabled)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                </div>
            </div>
      
            <div className="card mb-6">
                <div className="flex items-center mb-4">
                    <Globe className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold">Region & Language</h2>
                </div>
        
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Use Device Location</p>
                            <p className="text-sm text-gray-500">
                                Improve disease predictions based on regional patterns
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={locationEnabled}
                                onChange={() => setLocationEnabled(!locationEnabled)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
          
                    <div>
                        <label className="block font-medium mb-1">Language</label>
                        <select
                            className="input"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="chinese">Chinese</option>
                        </select>
                    </div>
                </div>
            </div>
      
            <div className="card mb-6">
                <div className="flex items-center mb-4">
                    <Shield className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold">Appearance</h2>
                </div>
        
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Dark Mode</p>
                            <p className="text-sm text-gray-500">
                                Use dark theme for the application
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={darkModeEnabled}
                                onChange={() => setDarkModeEnabled(!darkModeEnabled)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                    </div>
                </div>
            </div>
      
            <div className="card mb-6">
                <div className="flex items-center mb-4">
                    <Lock className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold">Privacy</h2>
                </div>
        
                <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                        Your data is securely stored and never shared with third parties without your explicit consent.
                        Read our <a href="#" className="text-primary-600 hover:underline">privacy policy</a> to learn more.
                    </p>
          
                    <button className="btn-outline text-sm">
                        Delete My Account Data
                    </button>
                </div>
            </div>
      
            <div className="flex justify-end">
                <button
                    onClick={handleSaveSettings}
                    className="btn-primary flex items-center"
                >
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                </button>
            </div>
        </div>
    );
}

export default SettingsPage
