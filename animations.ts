export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
    transition: {
      delay: 44.2,
      duration: 44.75,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const routeFadeIn = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};
