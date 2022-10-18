import { motion } from "framer-motion";
import { useState } from "react";
import { routeFadeIn } from "../animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "message") {
      //   console.log(formData.message.length);
      if (formData.message.length >= 500) {
        setError("Password must be 500 characters or less.");
        setFormData({ ...formData, [name]: value.slice(0, 500) });
        return;
      } else {
        setError("");
      }
    }
    setFormData({ ...formData, [name]: value });
  };
  return (
    <motion.div
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2"
      style={{ height: "75vh" }}
    >
      <motion.div className="p-5 rounded-md bg-gradient-to-br from-night-300 to-night-500">
        <motion.div>
          <h2>Contact Me</h2>
        </motion.div>
        <form
          action=""
          className="flex flex-col items-center justify-center p-4"
        >
          <motion.div className="flex flex-col justify-center w-3/4">
            <label htmlFor="name" className="mt-4 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full"
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div className="flex flex-col justify-center w-3/4">
            <label htmlFor="email" className="mt-4 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div className="flex flex-col justify-center w-3/4">
            <label htmlFor="message" className="mt-4 mb-2">
              Message
            </label>
            <p>{error}</p>
            <textarea
              name="message"
              id="message"
              className="w-full"
              maxLength={501}
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>
          <button>Submit</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
