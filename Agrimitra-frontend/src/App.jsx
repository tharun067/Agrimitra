import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={
            isAuthenticated ? <Navigate to="/dashboard" replace/>:<LoginPage />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='*' element={<Navigate to="/" replace/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
