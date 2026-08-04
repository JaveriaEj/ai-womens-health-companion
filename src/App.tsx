import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Education from './pages/Education'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/education" element={<Education />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App