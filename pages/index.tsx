// import { GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn, stagger } from "../animations";
import InViewWrapper from "../components/InViewWrapper";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="p-2 my-3 text-base font-semibold">
        I am an enthusiastic full stack web developer with a passion for
        developing engaging interfaces and integrating seamless data-flows. My
        passion has lead me to research and utilize a wide array of technologies
        from HTML/CSS/JavaScript to Next.js and Apollo, as well as AWS and
        Google cloud services.
        <br />
        <br />
        Currently I am a Teaching Assistant for a full-stack coding boot camp
        hosted by the University of California, Riverside and provided by edX.
        In addition to that I also tutor in full stack development for edX,
        providing services for students from universities across the US, UK, and
        Australia.
        <br />
        <br />
        I am always open to new opportunities and love to collaborate, please
        reach out if you have anything I may be interested in!
        <br />
        <br />
        Thanks for stopping by!
      </h5>
      <div
        className="flex-grow p-4 mt-5 border-t-4 bg-gradient-to-b from-green to-green-500 dark:from-night-700 dark:to-night-500 border-brown-700"
        style={{ marginRight: "-1.5rem", marginLeft: "-1.5rem" }}
      >
        <h6 className="my-4 text-xl font-bold tracking-wide">What I Offer</h6>
        <InViewWrapper className="grid gap-6 lg:grid-cols-2" variants={stagger}>
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="col-span-2 p-2 rounded-lg bg-gradient-to-br from-day-200 to-day-500 md:col-span-1 dark:from-night-300 dark:to-night-200 shadow-custom-raised"
            >
              <ServiceCard service={service} key={service.title} />
            </motion.div>
          ))}
        </InViewWrapper>
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
