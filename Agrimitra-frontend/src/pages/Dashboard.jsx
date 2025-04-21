import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Route, Routes } from 'react-router-dom'
import PredictionModule from '../components/PredictionModule'
import HistoryPage from '../components/HistoryPage'
import SettingsPage from '../components/SettingsPage'
import UserPage from '../components/UserPage'
import HelpPage from '../components/HelpPage'

function Dashboard() {
    return (
        <DashboardLayout>
            <Routes>
                <Route path='/' element={<PredictionModule />} />
                <Route path='/history' element={<HistoryPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/history' element={<UserPage />} />
                <Route path='/help' element={<HelpPage/>} />
            </Routes>
        </DashboardLayout>
    );
}

export default Dashboard
