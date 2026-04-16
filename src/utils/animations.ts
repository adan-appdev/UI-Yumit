// Shared animation configurations for Framer Motion
// Using inline animate props to avoid TypeScript Variants typing issues

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
};

export const defaultTransition = {
  duration: 0.9,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

export const slowTransition = {
  duration: 1.2,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

export const fastTransition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const viewportOnce = { once: true, margin: '-80px' } as const;
