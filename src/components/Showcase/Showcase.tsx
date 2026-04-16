import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Showcase.css';

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const viewport = { once: true, margin: '-60px' } as const;

const galleryItems = [
  {
    src: '/images/showcase-1.jpg',
    alt: 'Yumit bedroom collection',
    title: 'The Bedroom Edit',
    desc: 'Linen & Textiles',
    tall: true,
  },
  {
    src: '/images/showcase-2.jpg',
    alt: 'Yumit kitchen collection',
    title: 'Kitchen Essentials',
    desc: 'Ceramics & Wood',
    tall: false,
  },
  {
    src: '/images/showcase-3.jpg',
    alt: 'Yumit living room collection',
    title: 'Living Room',
    desc: 'Furniture & Accent',
    tall: false,
  },
];

function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div className="showcase__parallax" ref={ref}>
      <motion.div className="showcase__parallax-inner" style={{ y }}>
        <img
          className="showcase__parallax-img"
          src="/images/hero-bg.jpg"
          alt="Yumit interior"
          loading="lazy"
        />
      </motion.div>
      <div className="showcase__parallax-overlay" />
      <motion.div
        className="showcase__parallax-caption"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.85, ease }}
      >
        <h3>Where Craft<br />Meets Calm</h3>
        <p>
          Spaces designed to slow you down, to breathe, and to feel at home
          in the deepest sense of the word.
        </p>
      </motion.div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="showcase__header">
        <motion.span
          className="showcase__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
        >
          Visual Showcase
        </motion.span>
        <motion.h2
          className="showcase__title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          See It in Your Space
        </motion.h2>
      </div>

      <ParallaxSection />

      <div className="showcase__gallery">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.title}
            className={`showcase__gallery-item ${item.tall ? 'showcase__gallery-item--tall' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: i * 0.12, ease }}
          >
            <div className="showcase__gallery-img-wrap">
              <img
                className="showcase__gallery-img"
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </div>
            <div className="showcase__gallery-overlay" />
            <div className="showcase__gallery-info">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="showcase__texture-band"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 1, ease }}
      >
        <h3>"Design is not just what it looks like — it's how it makes you feel."</h3>
        <p>
          Every Yumit product is crafted to evoke a feeling. The warmth of morning light,
          the calm of a quiet Sunday, the joy of a space that's entirely your own.
        </p>
      </motion.div>
    </section>
  );
}
