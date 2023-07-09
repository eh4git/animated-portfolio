import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Project } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_tech,
  },
  showDetail,
  setShowDetail,
}) => {

  
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        height="300"
        width="450"
        layout="responsive"
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
      />
      <p className="my-2 text-center">{name}</p>
      {/*//*  Was originally position absolute. Currently set to
       */}
      {showDetail === id && (
        <div className="fixed lg:absolute lg:top-0 lg:left-0 lg:w-full left-[5%] top-[2%] z-10 grid w-[90%] h-auto p-3 sm:p-10 text-black bg-gray-100 rounded-lg bottom- lg:grid-cols-2 gap-x-12 bg-gradient-to-br dark:from-night-200 dark:text-green-100 dark:to-night-500 shadow-custom-glow">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-green-100 rounded-md"
            >
              <Image
                layout="responsive"
                height="300"
                width="450"
                src={image_path}
                alt={name}
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-green-100 rounded-md dark:bg-night-700"
              >
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-green-100 rounded-md dark:bg-night-700"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <div>
              {description.map(section => (
                <motion.h3
                  key={section.slice(1, 5).trim()}
                  variants={fadeInUp}
                  className="mb-3 font-medium"
                >
                  {section}
                </motion.h3>
              ))}
            </div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_tech.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-green-100 rounded-md dark:bg-night-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <button
              onClick={() => setShowDetail(null)}
              className="absolute p-1 bg-green-100 rounded-full top-3 right-3 focus:outline-none dark:bg-night-700"
            >
              <IoClose size={30} />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
