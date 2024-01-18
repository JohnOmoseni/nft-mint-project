export const container = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      when: "beforeChildren",
    },
  },
};

export const aboutAnimate = {
  hidden: { opacity: 0, x: -100 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1.2,
    },
  },
  hiddenBody: { opacity: 0, scale: 0.8 },
  scale: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

export const listAnimate = {
  hidden: { opacity: 0, y: 100 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      type: "spring",
    },
  }),
};
