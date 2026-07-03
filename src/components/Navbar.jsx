import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页', short: '首' },
  { to: '/project/t2i', label: '文生图', short: '图' },
  { to: '/project/t2v', label: '文生视频', short: '视' },
  { to: '/project/vqa', label: '视觉理解', short: '解' },
  { to: '/project/caption', label: '视觉描述', short: '述' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop / Tablet top navbar */}
      <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`} data-component="navbar" data-qoder-id="qel-navbar-95f3ec6b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-navbar-95f3ec6b&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;navbar&quot;,&quot;loc&quot;:{&quot;line&quot;:25,&quot;column&quot;:7}}">
        <NavLink to="/" className="navbar-brand" data-qoder-id="qel-navbar-brand-3003376e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-navbar-brand-3003376e&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;navbar-brand&quot;,&quot;loc&quot;:{&quot;line&quot;:26,&quot;column&quot;:9}}">王洁</NavLink>
        <ul className="navbar-links" data-qoder-id="qel-navbar-links-c0b8245f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-navbar-links-c0b8245f&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;navbar-links&quot;,&quot;loc&quot;:{&quot;line&quot;:27,&quot;column&quot;:9}}">
          {navItems.map((item) => (
            <li key={item.to} data-qoder-id="qel-li-3c693b3d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-li-3c693b3d&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;li&quot;,&quot;loc&quot;:{&quot;line&quot;:29,&quot;column&quot;:13}}">
              <NavLink
                to={item.to}
                className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
                end={item.to === '/'}
               data-qoder-id="qel-navlink-7a21db8c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-navlink-7a21db8c&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;navlink&quot;,&quot;loc&quot;:{&quot;line&quot;:30,&quot;column&quot;:15}}">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile bottom tab bar */}
      <nav className="mobile-nav" data-component="mobile-nav" aria-label="移动端导航" data-qoder-id="qel-mobile-nav-8472bd1a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-mobile-nav-8472bd1a&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;mobile-nav&quot;,&quot;loc&quot;:{&quot;line&quot;:43,&quot;column&quot;:7}}">
        <ul className="mobile-nav-items" data-qoder-id="qel-mobile-nav-items-61f447e2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-mobile-nav-items-61f447e2&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;mobile-nav-items&quot;,&quot;loc&quot;:{&quot;line&quot;:44,&quot;column&quot;:9}}">
          {navItems.map((item) => (
            <li key={item.to} data-qoder-id="qel-li-30692859" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-li-30692859&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;li&quot;,&quot;loc&quot;:{&quot;line&quot;:46,&quot;column&quot;:13}}">
              <NavLink
                to={item.to}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                end={item.to === '/'}
               data-qoder-id="qel-navlink-7e21e1d8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-navlink-7e21e1d8&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;navlink&quot;,&quot;loc&quot;:{&quot;line&quot;:47,&quot;column&quot;:15}}">
                <span style={{ fontSize: '16px', lineHeight: 1 }} data-qoder-id="qel-span-4d6a7d94" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-span-4d6a7d94&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;span&quot;,&quot;loc&quot;:{&quot;line&quot;:52,&quot;column&quot;:17}}">{item.short}</span>
                <span data-qoder-id="qel-span-4e6a7f27" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-span-4e6a7f27&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/Navbar.jsx&quot;,&quot;componentName&quot;:&quot;Navbar&quot;,&quot;elementRole&quot;:&quot;span&quot;,&quot;loc&quot;:{&quot;line&quot;:53,&quot;column&quot;:17}}">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
