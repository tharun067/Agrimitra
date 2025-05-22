import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Route, Routes } from 'react-router-dom'
import PredictionModule from '../components/PredictionModule'
import HistoryPage from '../components/HistoryPage'
import SettingsPage from '../components/SettingsPage'
import UserPage from '../components/UserPage'
import HelpPage from '../components/HelpPage'
import HowItWorksPage from '../components/HowItWorksPage'
function Dashboard() {
    return (
        <DashboardLayout>
            <Routes>
                <Route path='/' element={<PredictionModule />} />
                <Route path='/history' element={<HistoryPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/profile' element={<UserPage />} />
                <Route path='/help' element={<HelpPage />} />
                <Route path='/how-it-works' element={<HowItWorksPage/>} />
            </Routes>
        </DashboardLayout>
    );
}

export default Dashboard
