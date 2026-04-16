import { motion } from 'framer-motion';
import './Features.css';

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const viewport = { once: true, margin: '-60px' } as const;

const features = [
  {
    icon: '✦',
    title: 'Minimal by Design',
    text: 'Every Yumit piece is stripped to its essence. No excess, no noise — just pure form and function working in perfect harmony.',
    tag: 'Design Philosophy',
  },
  {
    icon: '◈',
    title: 'Built to Last',
    text: 'We use only premium materials: natural ceramics, fine linen, solid wood. Our products are heirlooms, not purchases.',
    tag: 'Craftsmanship',
  },
  {
    icon: '❋',
    title: 'Thoughtful Details',
    text: 'From the weight of a cup to the texture of a throw — every detail is obsessed over so your daily rituals feel extraordinary.',
    tag: 'Attention to Detail',
  },
  {
    icon: '◉',
    title: 'Sustainable Always',
    text: 'Responsible sourcing, low-impact production, and zero-waste packaging. Beautiful living should not cost the earth.',
    tag: 'Responsibility',
  },
  {
    icon: '⟡',
    title: 'Timeless Aesthetic',
    text: 'Trends fade. Yumit pieces endure. Our design language draws from centuries of craft traditions, reinterpreted for modern living.',
    tag: 'Heritage',
  },
];

export default function Features() {
  const scrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__header">
          <motion.span
            className="features__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            What Sets Us Apart
          </motion.span>
          <motion.h2
            className="features__title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Made Different.<br />Made Better.
          </motion.h2>
          <motion.p
            className="features__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Each Yumit product is the result of years of refinement, collaboration
            with master artisans, and an unwavering commitment to the extraordinary.
          </motion.p>
        </div>

        <div className="features__grid">
          {/* Wide card with image */}
          <motion.div
            className="features__card features__card--wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
          >
            <div className="features__card-visual">
              <img src="/images/showcase-3.jpg" alt="Yumit living room" loading="lazy" />
            </div>
            <div className="features__card-body">
              <div className="features__card-icon">🏡</div>
              <h3 className="features__card-title">Every Room, Reimagined</h3>
              <p className="features__card-text">
                Yumit offers a complete ecosystem of home goods — from living room
                to kitchen to bedroom. Each piece is designed to coexist beautifully
                with the others, creating spaces that feel unified, calm, and intentional.
              </p>
              <span className="features__card-tag">Full Collection</span>
            </div>
          </motion.div>

          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="features__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease }}
            >
              <div className="features__card-icon">{feat.icon}</div>
              <h3 className="features__card-title">{feat.title}</h3>
              <p className="features__card-text">{feat.text}</p>
              <span className="features__card-tag">{feat.tag}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="features__promise"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease }}
        >
          <div className="features__promise-text">
            <h3>Our Promise to You</h3>
            <p>
              If a Yumit product ever falls short of your expectations, we make it right.
              No questions. That's the confidence we have in everything we create.
            </p>
          </div>
          <button className="features__promise-btn" onClick={scrollToCta}>
            Shop Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}
