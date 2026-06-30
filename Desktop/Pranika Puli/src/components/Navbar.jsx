import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../data/content'

const links = [
  { to: '/',             label: 'Home',       emoji: '🏠' },
  { to: '/resume',       label: 'Resume',     emoji: '📄' },
  { to: '/experience',   label: 'Experience', emoji: '🏫' },
  { to: '/artwork',      label: 'Artwork',    emoji: '🎨' },
  { to: '/testimonials', label: 'Kind Words', emoji: '💬' },
  { to: '/contact',      label: 'Connect',    emoji: '✉️' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled
        ? 'bg-cream-50/97 backdrop-blur-md shadow-md'
        : 'bg-transparent backdrop-blur-none shadow-none'
    }`}>
      {/* Top colour stripe — only visible once scrolled */}
      <div className={`h-1.5 bg-gradient-to-r from-coral-500 via-mustard-400 via-teal-500 via-sage-400 to-coral-500 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-xl">✏️</span>
          <span className="font-fun font-700 text-teal-800 text-base sm:text-lg leading-tight drop-shadow-sm">
            {personal.name.split(' ')[0]}
            <span className="text-coral-600"> {personal.name.split(' ')[1]}</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label, emoji }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-fun font-600 transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-pin'
                    : 'text-navy-800 hover:bg-mustard-100 hover:text-teal-700 hover:shadow-sm'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="text-base">{emoji}</span>
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-pin active:scale-95 transition-transform"
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-cream-50/98 border-t-2 border-mustard-300 overflow-hidden shadow-card"
          >
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {links.map(({ to, label, emoji }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-fun font-600 transition-all duration-150 ${
                      isActive
                        ? 'bg-teal-600 text-white shadow-pin'
                        : 'bg-white text-navy-800 hover:bg-mustard-100 hover:text-teal-700 shadow-sm'
                    }`
                  }
                >
                  <span>{emoji}</span>{label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
