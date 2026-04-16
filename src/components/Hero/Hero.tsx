import { useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToStory = useCallback(() => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToCta = useCallback(() => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const item = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <img
          className="hero__bg-image"
          src="/images/hero-bg.jpg"
          alt="Yumit Home Goods"
          loading="eager"
        />
      </motion.div>

      <div className="hero__overlay" />

      <motion.div
        className="hero__content"
        style={{ y: contentY, opacity }}
      >
        <motion.span className="hero__eyebrow" {...item(0.3)}>
          Yumit Home Collection 2025
        </motion.span>

        <motion.h1 className="hero__headline" {...item(0.45)}>
          Redefine<br />
          <em>Your Space</em>
        </motion.h1>

        <motion.p className="hero__subline" {...item(0.6)}>
          Thoughtfully crafted home goods that bring calm, beauty,
          and purpose to every corner of your life.
        </motion.p>

        <motion.div className="hero__actions" {...item(0.75)}>
          <button className="hero__btn-primary" onClick={scrollToCta}>
            Explore Collection
          </button>
          <button className="hero__btn-secondary" onClick={scrollToStory}>
            Our Story
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.6, duration: 0.8, ease }}
        onClick={scrollToStory}
      >
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
