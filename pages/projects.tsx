import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { fadeInUp, routeFadeIn, stagger } from "../animations";
import { motion, useAnimation, useInView } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView, projects]);

  const handleFilteredCategories = (category: Category) => {
    console.log(category === active, category, active);
    if (category === active) {
      setProjects(projectsData);
      setActive("all");
      return;
    }
    // if (category === active) {
    //   setProjects(projectsData);
    //   setActive("all");
    //   return;
    // }
    const filteredProjects = projectsData.filter(project =>
      project.category.includes(category)
    );
    setProjects(filteredProjects);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2"
      // style={{ height: "75vh" }}
    >
      <ProjectNavbar
        handleFilteredCategories={handleFilteredCategories}
        active={active}
      />
      <motion.div
        ref={ref}
        variants={stagger}
        initial="initial"
        animate={controls}
        className="relative grid grid-cols-12 gap-4 my-3"
        layout
      >
        {projects.map(project => (
          <motion.div
            key={project.name}
            variants={fadeInUp}
            className="col-span-12 p-2 rounded-lg from-day-200 to-day-500 sm:col-span-6 lg:col-span-4 bg-gradient-to-br dark:from-night-200 dark:to-night-500 shadow-custom-raised"
            layoutId={project.name}
          >
            <ProjectCard
              project={project}
              key={project.name}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
