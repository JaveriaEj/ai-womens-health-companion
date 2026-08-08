import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Features from './pages/Features'
import Education from './pages/Education'
import Dashboard from './pages/Dashboard'
import CycleTracker from './pages/CycleTracker'
import AIAssistant from './pages/AIAssistant'
import Login from './pages/Login'
import ComingSoon from './pages/ComingSoon'
import SymptomLogger from './pages/SymptomLogger'
import Nutrition from './pages/Nutrition'
import MentalWellness from './pages/MentalWellness'
import Medications from './pages/Medications'
import Healthcare from './pages/Healthcare'
import Emergency from './pages/Emergency'
import Pregnancy from './pages/Pregnancy'
import HealthReports from './pages/HealthReports'
import Wearables from './pages/Wearables'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/education" element={<Education />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cycle-tracker" element={<CycleTracker />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/symptom-logger" element={<SymptomLogger />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/mental-wellness" element={<MentalWellness />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/health-reports" element={<HealthReports />} />
          <Route path="/wearables" element={<Wearables />} />
          <Route path="/login" element={<Login />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App