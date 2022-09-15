import { RiComputerLine, RiCloudLine } from 'react-icons/ri';
import { IoEarth } from 'react-icons/io5'
import { Service } from './type';


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