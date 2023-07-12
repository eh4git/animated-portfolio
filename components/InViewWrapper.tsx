import React, { useRef, useEffect, FunctionComponent } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
// import { stagger } from "../animations";

type WrapperProps = {
  children: React.ReactNode | React.ReactNode[];
  variants?: {
    initial?: any;
    animate?: any;
  };
  className?: string;
};

const InViewWrapper: FunctionComponent<WrapperProps> = ({
  children,
  variants,
  className,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      console.log("animate");
      controls.start("animate");
    } else {
      console.log("initial");
      controls.start("initial");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewWrapper;
