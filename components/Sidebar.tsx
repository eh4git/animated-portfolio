import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { SiCodewars } from "react-icons/si";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
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
        <span className="mr-1 text-green-200">Erik</span>
        <span>Hirsch</span>
      </h3>

      <p className="px-2 py-1 my-3 rounded-full bg-gradient-to-br from-day-200 to-day-500 dark:from-night-300 dark:to-night-500 dark:hover:shadow-custom-glow shadow-custom-light">
        Full-Stack Web Developer
      </p>
      <a
        href="/assets/Erik_Hirsch_Software_Developer.pdf"
        download="Erik_Hirsch_Software_Developer.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 rounded-full cursor-pointer bg-gradient-to-br from-day-200 to-day-500 dark:from-night-300 dark:to-night-500 dark:hover:shadow-custom-glow dark:hover:z-10 shadow-custom-light"
      >
        <GiTie className="w-6 h-6" />
        <p>Download Resume</p>
      </a>

      {/* Icons & Address*/}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-200 md:w-full">
        <a href="https://github.com/eh4git" target="_blank">
          <AiFillGithub className="w-8 h-8 rounded-full cursor-pointer dark:hover:shadow-custom-glow" />
        </a>
        <a href="https://www.linkedin.com/in/e-hirsch/" target="_blank">
          <AiFillLinkedin className="w-8 h-8 rounded-full cursor-pointer dark:hover:shadow-custom-glow" />
        </a>
        <a href="https://www.codewars.com/users/eh4CW" target="_blank">
          <SiCodewars className="w-8 h-8 rounded-full cursor-pointer dark:hover:shadow-custom-glow" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-green-300 bg-gradient-to-br from-day-200 to-day-500 dark:from-night-300 dark:to-night-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Apple Valley, CA</span>
        </div>
        <p className="my-2">ehirsch760@gmail.com</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 my-2 rounded-full dark:text-white bg-gradient-to-br from-day-200 to-day-500 focus:outline-none dark:hover:shadow-custom-glow dark:from-night-300 dark:to-night-500 shadow-custom-light"
        onClick={() => window.open("mailto:ehirsch760@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 rounded-full dark:text-white bg-gradient-to-br from-day-200 to-day-500 dark:hover:shadow-custom-glow dark:from-night-300 dark:to-night-500 shadow-custom-light"
      >
        <div className="flex items-center justify-center">
          {theme === "light" ? (
            <BsMoonStarsFill className="w-16 text-night-300" />
          ) : (
            <BsFillSunFill className="w-16 text-day-200" />
          )}
          <p>Toggle Theme</p>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
