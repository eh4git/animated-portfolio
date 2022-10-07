import { FunctionComponent } from "react";
import { Skill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, name, level },
}) => {
  const barWidth = `${level}`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  };

  return (
    <div className="my-2 bg-green-200 rounded-full dark:text-white dark:bg-night-200">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-br from-day-200 to-day-500 dark:from-night-300 dark:to-night-500"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
