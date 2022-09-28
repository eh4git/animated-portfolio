import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn } from "../animations";
const resume = () => {
  return (
    <motion.div
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Full Stack Web Development Certificate
            </h5>
            <p className="font-semibold">UCLA Extension (2020)</p>
            <p>
              Completed an intensive 12 week program that covered Html5, CSS3,
              Javascript, Node.js, Express, MySQL, MongoDB, ORM/DR, and React.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Teaching Assistant/Tutor</h5>
            <p className="font-semibold">UCI/UCR (2020 - present)</p>
            <p>
              Helping upcoming developers to reach their potential. Instruct
              students in a wide variety of web development technologies. Manage
              daily classroom administration.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & FrameWorks</h5>
          <div className="my-2">
            {languages.map(language => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map(language => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
