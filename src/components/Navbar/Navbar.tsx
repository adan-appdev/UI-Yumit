import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'Story', id: 'story' },
  { label: 'Features', id: 'features' },
  { label: 'Showcase', id: 'showcase' },
  { label: 'Contact', id: 'cta' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="navbar__inner">
          <span className="navbar__logo" onClick={scrollToTop}>
            Yumit
          </span>

          <ul className="navbar__nav">
            {navLinks.map((link) => (
              <li key={link.id}>
                <span
                  className="navbar__link"
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </span>
              </li>
            ))}
          </ul>

          <button
            className="navbar__cta"
            onClick={() => scrollTo('cta')}
          >
            Shop Now
          </button>

          <div
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {navLinks.map((link) => (
              <span
                key={link.id}
                className="navbar__mobile-link"
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </span>
            ))}
            <button
              className="navbar__mobile-cta"
              onClick={() => scrollTo('cta')}
            >
              Shop Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
