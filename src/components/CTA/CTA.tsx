import { motion } from 'framer-motion';
import './CTA.css';

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const viewport = { once: true, margin: '-60px' } as const;

const trustItems = [
  { icon: '✓', text: 'Free shipping over $120' },
  { icon: '✓', text: '30-day free returns' },
  { icon: '✓', text: 'Lifetime craftsmanship guarantee' },
  { icon: '✓', text: 'Sustainably made' },
];

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta__bg-pattern" />

      <div className="cta__inner">
        <motion.span
          className="cta__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
        >
          Begin Your Journey
        </motion.span>

        <motion.h2
          className="cta__title"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.85, delay: 0.1, ease }}
        >
          Upgrade<br />
          <em>Your Living Space</em>
        </motion.h2>

        <motion.p
          className="cta__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.2, ease }}
        >
          Discover the full Yumit collection — curated home goods that transform
          how you live, work, and rest every single day.
        </motion.p>

        <motion.div
          className="cta__actions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <button className="cta__btn-primary">
            Shop the Collection
          </button>
          <button className="cta__btn-secondary">
            View Lookbook
          </button>
        </motion.div>

        <motion.div
          className="cta__trust"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.45, ease }}
        >
          {trustItems.map((item) => (
            <div key={item.text} className="cta__trust-item">
              <span className="cta__trust-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
