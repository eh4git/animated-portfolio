// import { GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn, stagger } from "../animations";

const index = () => {
  console.log(services);
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 text-base font-medium">
        I am an enthusiastic full stack web developer. I have worked with a
        range of tech stacks including....
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginRight: "-1.5rem", marginLeft: "-1.5rem" }}
      >
        <h6 className="text-xl font-bold tracking-wide my-34">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200"
            >
              <ServiceCard service={service} key={service.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const data = await fetch("http://localhost:3000/api/services");
//   const services = await data.json();
//   console.log("server", services);
//   return {
//     props: { services },
//   };
// };
