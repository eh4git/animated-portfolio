export const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  export const stagger = {
    initial: {
    
    },
    animate: {
     transition:{
      staggerChildren: .2
     }
    },
  };

  export const routeFadeIn = {
    initial: {
      opacity: 0,
      x:-100
    },
    animate: {
      opacity:1,
      x:0,
      transition:{
      delay: .1,
      duration: .1
     }
    },
    exit:{
      opacity: 0,
      x: 100,
      transition:{
      delay: .1,
      ease: "easeInOut"
     }
    }
  };