import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Projects from './components/Projects'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <Router>
      <div className="app">
        <Navbar 
          setSidebarVisible={setSidebarVisible} 
          sidebarVisible={sidebarVisible}
        />
        <div className="content-wrapper">
          <Sidebar 
            isVisible={sidebarVisible} 
            onClose={() => setSidebarVisible(false)}
          />
          <Routes>
            <Route path="/" element={<Dashboard sidebarVisible={sidebarVisible} />} />
            <Route path="/dashboard" element={<Dashboard sidebarVisible={sidebarVisible} />} />
            <Route path="/projects" element={<MainContent sidebarVisible={sidebarVisible} />} />
            <Route path="/projects/:projectId" element={<Projects sidebarVisible={sidebarVisible} />} />
          </Routes>
        </div>
        <Footer sidebarVisible={sidebarVisible} />
      </div>
    </Router>
  )
}

export default App 