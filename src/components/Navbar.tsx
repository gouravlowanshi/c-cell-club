import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZap, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Teams', href: '#teams' },
  { label: 'Register', href: '#register' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'teams', 'register'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <FiZap className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-[#0A0A0A] tracking-tight">C-Cell</span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                  <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                          activeSection === link.href.replace('#', '')
                              ? 'text-[#0A0A0A] font-semibold'
                              : 'text-[#64748B] hover:text-[#0A0A0A]'
                      }`}
                  >
                    {link.label}
                    {activeSection === link.href.replace('#', '') && (
                        <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A0A0A] rounded-full" />
                    )}
                  </button>
              ))}
            </nav>

            <button className="md:hidden text-[#0A0A0A] p-2" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
              >
                <div className="px-4 py-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                      <button
                          key={link.href}
                          onClick={() => scrollTo(link.href)}
                          className={`text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                              activeSection === link.href.replace('#', '')
                                  ? 'text-[#0A0A0A] bg-gray-100 font-semibold'
                                  : 'text-[#64748B] hover:bg-gray-50 hover:text-[#0A0A0A]'
                          }`}
                      >
                        {link.label}
                      </button>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
}