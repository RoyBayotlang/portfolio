import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CertificationsPage from './pages/CertificationsPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
    </Routes>
  )
}
