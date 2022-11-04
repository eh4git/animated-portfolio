import { RiComputerLine, RiCloudLine } from 'react-icons/ri';
import { FiMonitor, FiDatabase } from 'react-icons/fi';
import { IoEarth } from 'react-icons/io5';
import { FaJava } from 'react-icons/fa'
import { Project, Service, Skill } from './type';
import { SiJavascript, SiPhp, SiJava, SiMysql, SiReact, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si'
import { GrStackOverflow, GrServer } from 'react-icons/gr'
import { HiServer, HiDesktopComputer } from 'react-icons/hi'

export const services:Service[] = [
    {
        title: 'Frontend',
        about: 'Incorporating component libraries like <b>Bootstrap</b> and <b>MaterialUI</b>, or frameworks such as <b>Tailwind</b>, I can provide an eye-catching and responsive UI.',
        Icon: FiMonitor
    },
    {
        title: 'Backend',
        about: 'Utilizing <b>Node.js</b> and <b>Express</b>, or <b>PHP</b>, I can create server-side applications to host a wide array of functionalities.',
        Icon: HiServer
    },
    {
        title: 'Full Stack',
        about: 'I can build beautiful full stack applications using <b>HTML</b>, <b>CSS</b>, <b>React</b>, and <b>MySQL</b> or <b>MongoDB</b>.',
        Icon: GrStackOverflow
    },
    {
        title: 'Databases',
        about: 'Provide applications with highly available data from an array of databases such as, <b>MySQL</b>, <b>MongoDB</b>, and <b>Firebase</b>.',
        Icon: FiDatabase
    },
    {
        title: 'Cloud Services',
        about: '<b>AWS</b>, <b>GCP</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        Icon: RiCloudLine
    },
]


export const languages:Skill[] = [
    {
        name: 'Javascript',
        level: "90%",
        Icon: SiJavascript
    },
    {
        name: 'HTML5',
        level: "90%",
        Icon: SiHtml5
    },
    {
        name: 'React',
        level: "85%",
        Icon: SiReact
    },
    {
        name: 'CSS3',
        level: "80%",
        Icon: SiCss3
    },
    {
        name: 'PHP',
        level: "75%",
        Icon: SiPhp
    },
    {
        name: 'MySQL',
        level: "75%",
        Icon: SiMysql
    },
    {
        name: 'MongoDB',
        level: "75%",
        Icon: SiMongodb
    },
    {
        name: 'Java',
        level: "60%",
        Icon: FaJava
    },
  
]

export const tools:Skill[] = [
    {
        name: 'Visual Studio Code',
        level: "90%",
        Icon: SiJavascript
    },
    {
        name: 'React Dev Tools',
        level: "70%",
        Icon: FaJava
    },
  
]

export const projects:Project[] = [
    {
        id: 1,
        name: "Once Upon An Adventure",
        description: "An online RPG set in a fantasy world. Complete mini-games to earn enough coins to face the final boss. Sign in and save your progress with authenticated users.",
        image_path: "https://d3kccomi9ge1kz.cloudfront.net/onceUponAnAdventure.png",
        deployed_url: "https://www.onceuaa.com/",
        github_url: "https://github.com/eh4git/once-upon-an-adventure",
        category: ["react", "mongoDB"],
        key_tech: ["React", "Redux", "MongoDB"]
    },
    {
        id: 2,
        name: "Gallery-ECommerce",
        description: "Built with React this application that front-end UI for an e-commerce platform. Users can favorite items, add items to a cart, manage the items in the cart and place an order.",
        image_path: "https://d3kccomi9ge1kz.cloudfront.net/Ecommerce.png",
        deployed_url: "https://scrimba-ec-ommerce.vercel.app/",
        github_url: "https://github.com/eh4git/Scrimba_ECommerce",
        category: ["react"],
        key_tech: ["React"]
    },
    {
        id: 3,
        name: "Time2Fly",
        description: "A React Native application that allows flight attendants to easily track their hours and will let the user know when they will reach their maximum allowed work time.",
        image_path: "https://d3kccomi9ge1kz.cloudfront.net/image-coming-soon.jpg",
        deployed_url: "#",
        github_url: "#",
        category: ["react"],
        key_tech: ["React Native"]
    },
    {
        id: 4,
        name: "Minesweeper",
        description: "The classic game of minesweeper with a few improvements. Users always open multiple tiles on their first click and can choose four different difficulty settings.",
        image_path: "https://d3kccomi9ge1kz.cloudfront.net/react-minesweeper.png",
        deployed_url: "https://react-minesweeper-ten.vercel.app/",
        github_url: "https://github.com/eh4git/react_minesweeper",
        category: ["react", 'typeScript'],
        key_tech: ["React", "Typescript",]
    },
    {
        id: 5,
        name: "Story Time",
        description: "A full stack application that allows user to create an authenticated account. Add children to an account and customize their story time experience.",
        image_path: "https://d3kccomi9ge1kz.cloudfront.net/storyTime.png",
        deployed_url: "https://fathomless-waters-70908.herokuapp.com/",
        github_url: "https://github.com/eh4git/StoryTime",
        category: ["mysql", "express", "node"],
        key_tech: ["MySQL", "Express", "Node.js"]
    },
    {
        id: 6,
        name: "Rick Kittson Hardwood Flooring",
        description: "",
        image_path: "https://d3kccomi9ge1kz.cloudfront.net/rick_kittson_hardwood_flooring.png",
        deployed_url: "https://rick-kittson-hardwood-flooring.vercel.app/",
        github_url: "https://github.com/eh4git/Rick_Kittson_Hardwood_Flooring",
        category: ["javaScript"],
        key_tech: ["HTML5", "CSS3", "JavaScript"]
    },
]