import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { TfiHtml5 } from "react-icons/tfi";
import { FaGitAlt } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const ProjectInfoArr = [
    {
        title: 'YouTube Clone',
        intro: `It's a perfect YouTube clone that fetches data using Rapid API.`,
        lines: ['A React-based YouTube clone that is entirely responsive.', 'Provides you with a search box to display videos according to the query you entered.', 'Shows a loading skeleton by the time data is being fetched using a Rapid API.'],
        techs: ['React', 'React Router', 'Redux Toolkit', 'React-Player', 'React-Loading-Skeleton'],
        image1: '/images/project-One-1.png',
        image2: '/images/project-One-2.png',
        code : 'https://github.com/ANANDSYADAV/YouTube-Clone',
        live: 'https://youtube-clone-kappa-gray.vercel.app/'
    },
    {
        title: 'Movie App',
        intro: `It's a movie rating app that fetches data using an API.`,
        lines: ['A React-based movie rating app that is completely responsive.', 'Provides a search box to display videos based on the query entered.', 'Uses React Slick as a carousel component and shows a loading skeleton while data is being fetched.'],
        techs: ['React', 'React Router', 'Redux Toolkit', 'React Slick', 'React-Loading-Skeleton'],
        image1: '/images/project-Two-1.png',
        image2: '/images/project-Two-2.png',
        code: 'https://github.com/ANANDSYADAV/Movie-App',
        live: 'https://movie-app-rho-sooty.vercel.app/'
    },
    {
        title: 'Dice Game',
        intro: `It's a dice game that lets you try your luck.`,
        lines: ['A React-based dice game that is completely responsive.', 'It lets you select a number and then roll a random number on dice.', 'If the selected number matches the number appearing on the dice, you get plus points; otherwise, you get negative 2.'],
        details: `  `,
        techs: ['React', 'React Router', 'styled-components'],
        image1: '/images/project-Three-1.png',
        image2: '/images/project-Three-2.png',
        code: 'https://github.com/ANANDSYADAV/Dice-Game',
        live: 'https://dice-game-dun.vercel.app/'
    }
];

export const SkillsArr = [
    {
        name: 'C'
    },
    {
        name: 'C++'
    },
    {
        name: 'HTML',
        icon: <TfiHtml5 />
    },
    {
        name: 'CSS',
        icon: <FaCss3 />
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript />
    },
    {
        name: 'React',
        icon: <FaReact />
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />
    },
    {
        name: 'React Router',
        icon: <SiReactrouter />
    },
    {
        name: 'Redux Toolkit',
        icon: <TbBrandRedux />
    },
    {
        name: 'Git',
        icon: <FaGitAlt />
    },
    {
        name: 'GitHub',
        icon: <VscGithubInverted />
    },
    {
        name: 'VS Code',
        icon: <DiVisualstudio />
    },
    {
        name: 'SQL Basics',
        icon: <GrMysql />
    },
    {
        name: 'MongoDB Basics',
        icon: <SiMongodb />
    },
];
