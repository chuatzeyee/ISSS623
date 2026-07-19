import { Routes, Route, Navigate } from 'react-router-dom'
import NavPill from './components/NavPill'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Topics from './pages/Topics'
import Debate from './pages/Debate'
import Project from './pages/Project'
import Proposals from './pages/Proposals'
import Quiz from './pages/Quiz'

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <main id="main-content" className="pb-24 scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/debate" element={<Debate />} />
          <Route path="/project" element={<Project />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <NavPill />
      <ScrollToTop />
    </div>
  )
}
