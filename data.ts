import { RiComputerLine, RiCloudLine } from "react-icons/ri";
import { FiMonitor, FiDatabase } from "react-icons/fi";
import { IoEarth } from "react-icons/io5";
import { FaJava, FaGitAlt } from "react-icons/fa";
import { Project, Service, Skill } from "./type";
import {
  SiJavascript,
  SiPhp,
  SiJava,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiApollographql,
} from "react-icons/si";
import { GrStackOverflow, GrServer } from "react-icons/gr";
import { HiServer, HiDesktopComputer } from "react-icons/hi";

export const services: Service[] = [
  {
    title: "Frontend",
    about:
      "Incorporating component libraries like <b>Bootstrap</b> and <b>MaterialUI</b>, or frameworks such as <b>Tailwind</b>, I can provide an eye-catching and responsive UI.",
    Icon: FiMonitor,
  },
  {
    title: "Backend",
    about:
      "Utilizing <b>Node.js</b> and <b>Express</b>, or <b>PHP</b>, I can create server-side applications to host a wide array of content or other functionalities.",
    Icon: HiServer,
  },
  {
    title: "Full Stack",
    about:
      "I can build beautiful full stack applications using <b>HTML</b>, <b>CSS</b>, <b>React</b>, and <b>MySQL</b> or <b>MongoDB</b>.",
    Icon: GrStackOverflow,
  },
  {
    title: "Databases",
    about:
      "Provide applications with highly available data from an array of databases such as, <b>MySQL</b>, <b>MongoDB</b>, and <b>Firebase</b>.",
    Icon: FiDatabase,
  },
  {
    title: "Cloud Services",
    about:
      "<b>AWS</b>, <b>GCP</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: RiCloudLine,
  },
  {
    title: "Git",
    about:
      "Proficient with <b>Git</b> version management, and cloud repository services like <b>GitHub</b>. I am ready to collaborate with teams of any size!",
    Icon: FaGitAlt,
  },
];

export const languages: Skill[] = [
  {
    name: "Javascript",
    level: "90%",
    Icon: SiJavascript,
  },
  {
    name: "HTML5",
    level: "90%",
    Icon: SiHtml5,
  },
  {
    name: "React",
    level: "85%",
    Icon: SiReact,
  },
  {
    name: "CSS3",
    level: "80%",
    Icon: SiCss3,
  },
  {
    name: "PHP",
    level: "80%",
    Icon: SiPhp,
  },
  {
    name: "MySQL",
    level: "75%",
    Icon: SiMysql,
  },
  {
    name: "MongoDB",
    level: "75%",
    Icon: SiMongodb,
  },
  {
    name: "Java",
    level: "30%",
    Icon: FaJava,
  },
];

export const tools: Skill[] = [
  {
    name: "Visual Studio Code",
    level: "95%",
    Icon: SiJavascript,
  },
  {
    name: "React Dev Tools",
    level: "70%",
    Icon: SiReact,
  },
  {
    name: "MySQL Workbench",
    level: "80%",
    Icon: SiMysql,
  },
  {
    name: "Git",
    level: "90%",
    Icon: FaGitAlt,
  },
  {
    name: "NPM",
    level: "85%",
    Icon: SiNodedotjs,
  },
  {
    name: "Atlas",
    level: "75%",
    Icon: SiMongodb,
  },
  {
    name: "Apollo GraphQL",
    level: "75%",
    Icon: SiApollographql,
  },
].sort((a, b) => parseInt(b.level) - parseInt(a.level));

export const projects: Project[] = [
  {
    id: 1,
    name: "Once Upon An Adventure",
    description: [
      "An online RPG set in a fantasy world. Select a character then interact with a range of unique NPC to complete mini-games. Earn coins and face the final boss.",
      "Password authenticated account, data is hashed before save. User sessions via JSON Web Tokens. Data is saved in MongoDB. Redux to handles game state and logic.",
    ],
    image_path: "https://d3kccomi9ge1kz.cloudfront.net/onceUponAnAdventure.png",
    deployed_url: "https://www.onceuaa.com/",
    github_url: "https://github.com/eh4git/once-upon-an-adventure",
    category: ["full-Stack", "back-End"],
    key_tech: ["Node.js", "React", "Redux", "MongoDB"],
  },
  {
    id: 2,
    name: "Gallery-ECommerce",
    description: [
      "Built with React, this is an application that provides a front-end UI for an e-commerce platform. Users can favorite items, add items to a cart, manage the items in the cart and place an order.",
      "A grid CSS3 layout provides a unique display for multiple art pieces or other products. Provides a great platform to build upon.",
    ],
    image_path: "https://d3kccomi9ge1kz.cloudfront.net/Ecommerce.png",
    deployed_url: "https://scrimba-ec-ommerce.vercel.app/",
    github_url: "https://github.com/eh4git/Scrimba_ECommerce",
    category: ["front-End"],
    key_tech: ["JavaScript", "React", "CSS3"],
  },
  {
    id: 3,
    name: "Time2Fly",
    description: [
      "A React Native app that allows flight attendants to track their hours and will let the user know when they will reach their maximum allowed work time.",
      "Time is tracked using the users location data. A customized location data permission menu informs users and satisfies Play Store requirements. Firebase is used for user auth and data storage.",
    ],
    image_path: "https://d3kccomi9ge1kz.cloudfront.net/image-coming-soon.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["mobile"],
    key_tech: ["JavaScript", "React Native", "Firebase"],
  },
  {
    id: 4,
    name: "Minesweeper",
    description: [
      "The classic game of minesweeper with a few improvements. Users always open multiple tiles on their first click and it will never be a bomb. Choose four different difficulty settings.",
      "A constant work in progress with new features in the works. SCSS is used to give the game a very retro feel.",
    ],
    image_path: "https://d3kccomi9ge1kz.cloudfront.net/react-minesweeper.png",
    deployed_url: "https://react-minesweeper-ten.vercel.app/",
    github_url: "https://github.com/eh4git/react_minesweeper",
    category: ["front-End"],
    key_tech: ["React", "Typescript", "SCSS"],
  },
  {
    id: 5,
    name: "Story Time",
    description: [
      "A full stack application that allows user to create a password authenticated account. Add children to an account and customize their story time experience.",
      "Fully customize any child's bedtime stories. JavaScript is used to collect user input and inject it into any story of your choosing.",
    ],
    image_path: "https://d3kccomi9ge1kz.cloudfront.net/storyTime.png",
    deployed_url: "https://fathomless-waters-70908.herokuapp.com/",
    github_url: "https://github.com/eh4git/StoryTime",
    category: ["full-Stack", "back-End"],
    key_tech: ["JavaScript", "MySQL", "Express", "Node.js"],
  },
  {
    id: 6,
    name: "Rick Kittson Hardwood Flooring",
    description: [
      "Informational page for a wood flooring business. Provides polished UI with smooth scrolling and parallax. Optimized production build produced utilizing Gulp.js.",
      "Multiple sections display information regarding various services and features of the business. Testimonial section is displayed on a carousel. Contact the business directly through a contact form.",
    ],
    image_path:
      "https://d3kccomi9ge1kz.cloudfront.net/rick_kittson_hardwood_flooring.png",
    deployed_url: "https://rick-kittson-hardwood-flooring.vercel.app/",
    github_url: "https://github.com/eh4git/Rick_Kittson_Hardwood_Flooring",
    category: ["front-End"],
    key_tech: ["HTML5", "CSS3", "JavaScript", "Gulp.js"],
  },
];
