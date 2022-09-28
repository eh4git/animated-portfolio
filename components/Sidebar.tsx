import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        // layout="responsive"
        width="250"
        height="250"
        src="https://d3kccomi9ge1kz.cloudfront.net/Optimized-ProfilePic.jpg"
        alt="Erik's profile image"
        className="w-32 h-32 mx-auto rounded-full"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="mr-1 text-green">Erik</span>
        <span>Hirsch</span>
      </h3>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        href="/assets/Erik_Hirsch_Software_Developer.pdf"
        download="Erik_Hirsch_Software_Developer.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Icons & Address*/}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-700 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Apple Valley, CA</span>
        </div>
        <p className="my-2">ehirsch760@gmail.com</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:ehirsch760@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
