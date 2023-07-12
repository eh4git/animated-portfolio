import { useEffect, useRef, FunctionComponent } from "react";
import { Skill } from "../type";
import { motion, useAnimation, useInView } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, name, level },
}) => {
  const controls = useAnimation();
  // const [ref, inView] = useInView();
  const ref = useRef(null);
  const inView = useInView(ref);
  const barWidth = `${level}`;

  const variants = {
    initial: {
      width: 0,
      opacity: 0,
    },
    animate: {
      width: barWidth,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 3,
        // velocity: 10,
        type: "spring",
        // bounce: 1,
        damping: 15,
        stiffness: 150,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  return (
    <div className="my-2 rounded-full bg-brown-500 dark:text-white dark:bg-night-200">
      <motion.div
        ref={ref}
        className="flex items-center px-4 py-1 rounded-full whitespace-nowrap bg-gradient-to-br from-day-200 to-day-500 dark:from-night-300 dark:to-night-500"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        <Icon className="mr-3 min-w-max" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
