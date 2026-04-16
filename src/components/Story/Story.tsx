import { motion } from 'framer-motion';
import './Story.css';

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const viewport = { once: true, margin: '-80px' } as const;

function ScrollReveal({
  children,
  delay = 0,
  x = 0,
  y = 30,
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { number: '12+', label: 'Years of craftsmanship' },
  { number: '40k', label: 'Homes transformed' },
  { number: '98%', label: 'Customer satisfaction' },
];

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="story__inner">
        <div className="story__header">
          <ScrollReveal>
            <span className="story__eyebrow">Our Philosophy</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="story__title">Objects That Tell a Story</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="story__desc">
              We believe every object in your home should serve a purpose — beautiful,
              intentional, and built to last. Yumit is the art of living simply, beautifully.
            </p>
          </ScrollReveal>
        </div>

        {/* Block 1 */}
        <div className="story__block">
          <ScrollReveal x={-40} y={0}>
            <div className="story__block-image-wrap">
              <img
                className="story__block-image"
                src="/images/product-story.jpg"
                alt="Yumit ceramic collection"
                loading="lazy"
              />
              <div className="story__block-badge">
                <span className="story__block-badge-icon">🏺</span>
                <span className="story__block-badge-text">Handcrafted</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal x={40} y={0} delay={0.15}>
            <div className="story__block-content">
              <span className="story__block-label">The Origin</span>
              <h3 className="story__block-title">Born from a Love of Beautiful Living</h3>
              <p className="story__block-text">
                Yumit began in a small studio in Kyoto, where our founders were inspired
                by the Japanese concept of wabi-sabi — finding beauty in imperfection and
                authenticity. Each piece is crafted with quiet intention.
              </p>
              <p className="story__block-text">
                We work with artisans across Japan, Scandinavia, and the Mediterranean
                to bring you objects that carry heritage, warmth, and lasting quality.
              </p>
              <span className="story__block-link">
                Learn about our heritage
                <span className="story__block-link-arrow">→</span>
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Block 2 */}
        <div className="story__block story__block--reverse">
          <ScrollReveal x={40} y={0}>
            <div className="story__block-image-wrap">
              <img
                className="story__block-image"
                src="/images/showcase-2.jpg"
                alt="Yumit kitchen collection"
                loading="lazy"
              />
              <div className="story__block-badge">
                <span className="story__block-badge-icon">🌿</span>
                <span className="story__block-badge-text">Sustainably Sourced</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal x={-40} y={0} delay={0.15}>
            <div className="story__block-content">
              <span className="story__block-label">The Material</span>
              <h3 className="story__block-title">Materials That Age Beautifully</h3>
              <p className="story__block-text">
                We choose only materials that improve with age. Our ceramics develop
                unique character over time. Our linens soften with each wash. Our wood
                deepens in warmth with every passing season.
              </p>
              <p className="story__block-text">
                Every material is responsibly sourced, ethically produced, and
                designed to last a lifetime — not a season.
              </p>
              <span className="story__block-link">
                Explore our materials
                <span className="story__block-link-arrow">→</span>
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="story__stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="story__stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
            >
              <div className="story__stat-number">{stat.number}</div>
              <div className="story__stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
