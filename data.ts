import { RiComputerLine, RiCloudLine } from 'react-icons/ri';
import { IoEarth } from 'react-icons/io5'
import { Service, Skill } from './type';
import { SiJavascript, SiPhp, SiJava, SiMysql, SiReact, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si'


export const services:Service[] = [
    {
        title: 'Frontend Dev',
        about: 'Incorporating component libraries such as <b>Bootstrap</b> and <b>MaterialUI</b>, or frameworks such as <b>Tailwind</b>, I can provide eye-catching and responsive UI.',
        Icon: RiComputerLine
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