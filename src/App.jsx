import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import BirdCursor from './components/BirdCursor'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    // 根据路由控制背景：首页不显示背景
    if (pathname === '/') {
      document.body.classList.add('home-page')
    } else {
      document.body.classList.remove('home-page')
    }
  }, [pathname])
  return null
}

/* Page wrapper with enter animation */
function PageWrapper({ children }) {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-root">
        <LoadingScreen />
        <Navbar />
        <BirdCursor />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
