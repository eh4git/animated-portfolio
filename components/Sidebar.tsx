import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://d3kccomi9ge1kz.cloudfront.net/Optimized-ProfilePic.jpg"
        alt="Erik's profile image"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green mr-1">Erik</span>
        <span>Hirsch</span>
      </h3>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        href=""
        download="name"
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Icons & Address*/}
      <div className="flex justify-around my-5 text-green-700 w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="my-5 py-4 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Apple Valley, CA</span>
        </div>
        <p className="my-2">ehirsch760@gmail.com</p>
      </div>

      <button
        className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
        onClick={() => window.open("mailto:ehirsch760@gmail.com")}
      >
        Email Me
      </button>
      <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;