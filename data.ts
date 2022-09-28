import { RiComputerLine, RiCloudLine } from 'react-icons/ri';
import { FiMonitor } from 'react-icons/fi';
import { IoEarth } from 'react-icons/io5';
import { Project, Service, Skill } from './type';
import { SiJavascript, SiPhp, SiJava, SiMysql, SiReact, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si'


export const services:Service[] = [
    {
        title: 'Frontend Dev',
        about: 'Incorporating component libraries such as <b>Bootstrap</b> and <b>MaterialUI</b>, or frameworks such as <b>Tailwind</b>, I can provide an eye-catching and responsive UI.',
        Icon: FiMonitor
    },
    {
        title: 'Backend Dev',
        about: 'Utilizing <b>Node.js</b> and <b>Express</b>, or <b>PHP</b>, I can create server-side applications to host a wide array of functionalities.',
        Icon: RiCloudLine
    },
    {
        title: 'Full Stack Dev',
        about: 'I can build beautiful full stack applications using <b>HTML</b>, <b>CSS</b>, <b>React</b>, and <b>MySQL</b> or <b>MongoDB</b>.',
        Icon: IoEarth
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
        level: "20%",
        Icon: SiJava
    },
  
]

export const tools:Skill[] = [
    {
        name: 'Visual Studio Code',
        level: "90%",
        Icon: SiJavascript
    },
    {
        name: 'React Developer tools',
        level: "70%",
        Icon: SiJava
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
        category: ["react", "mongodb"],
        key_tech: ["React", "Redux", "MongoDB"]
    },
    {
        id: 2,
        name: "React-Ecommerce",
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
        deployed_url: "",
        github_url: "",
        category: ["react"],
        key_tech: ["React Native"]
    },
    {
        id: 4,
        name: "Minesweeper",
        description: "The classic game of minesweeper with a few improvements. Users always open multiple tiles on their first click and can choose four different difficulty settings.",
        image_path: "https://d3kccomi9ge1kz.cloudfront.net/react-minesweeper.png",
        deployed_url: "https://react-minesweeper-ten.vercel.app/",
        github_url: "",
        category: ["react"],
        key_tech: ["React", "Typescript",]
    },
]