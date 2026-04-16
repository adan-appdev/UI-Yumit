import { motion } from 'framer-motion';
import './Footer.css';

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const viewport = { once: true, margin: '-40px' } as const;

const footerCols = [
  {
    title: 'Collection',
    links: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Outdoor'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Artisans', 'Sustainability', 'Press', 'Careers'],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Shipping & Returns', 'Care Guide', 'Contact Us', 'Gift Cards'],
  },
];

const socials = ['𝕏', 'In', 'ig', 'Pt'];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
        >
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo" onClick={scrollToTop}>Yumit</span>
            <p className="footer__tagline">
              Beautiful, intentional home goods crafted for those who believe
              that how you live is a reflection of who you are.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <span key={s} className="footer__social-btn">{s}</span>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerCols.map((col, colIdx) => (
            <div key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__links">
                {col.links.map((link, linkIdx) => (
                  <li key={link}>
                    <motion.span
                      className="footer__link"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{
                        duration: 0.5,
                        delay: colIdx * 0.06 + linkIdx * 0.04,
                        ease,
                      }}
                      onClick={() => {
                        if (link === 'Our Story') scrollTo('story');
                        else if (link === 'Press' || link === 'Sustainability') scrollTo('features');
                        else scrollTo('cta');
                      }}
                    >
                      {link}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2025 Yumit. All rights reserved.
          </span>
          <div className="footer__legal">
            <span className="footer__legal-link">Privacy Policy</span>
            <span className="footer__legal-link">Terms of Service</span>
            <span className="footer__legal-link">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
