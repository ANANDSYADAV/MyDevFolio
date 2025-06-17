import { FaReact, FaCss3, FaStackOverflow, FaAws, FaNode } from "react-icons/fa";
import { TbBrandRedux, TbBrandCpp } from "react-icons/tb";
import { SiReactrouter, SiJavascript, SiCodingninjas, SiLeetcode, SiGeeksforgeeks, SiTailwindcss, SiMongodb, SiPostman, SiJira, SiExpress } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { TfiHtml5 } from "react-icons/tfi";
import { FaGitAlt, FaGitlab } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { GrMysql, GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { RiNpmjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export const ProjectInfoArr = [
    {
        title: 'Doctor Reach',
        intro: `A doctor appointment booking platform.`,
        lines: ['A doctor appointment booking platform designed to ease the process.', 'This platform enables patients to search and book for doctors based on their medical issues.', 'Used Next.js for frontend, Strapi as backend and Kinde for all authentication purposes.'],
        techs: ['Next.js', 'Node.js', 'Strapi', 'kinde', 'Shadcn UI'],
        image1: '/images/project-4-1.png',
        image2: '/images/project-4-2.png',
        code: 'https://github.com/ANANDSYADAV/DoctorReach',
        live: 'https://doctor-reach.vercel.app/'
    },
    {
        title: 'YouTube Clone',
        intro: `It's a perfect YouTube clone that fetches data using Rapid API.`,
        lines: ['A React-based YouTube clone that is entirely responsive.', 'Provides you with a search box to display videos according to the query you entered.', 'Shows a loading skeleton by the time data is being fetched using a Rapid API.'],
        techs: ['React', 'React Router', 'Redux Toolkit', 'React-Player', 'React-Loading-Skeleton'],
        image1: '/images/project-One-1.png',
        image2: '/images/project-One-2.png',
        code: 'https://github.com/ANANDSYADAV/YouTube-Clone',
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
    // {
    //     name: 'C'
    // },
    {
        name: 'C++',
        icon: <TbBrandCpp />
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
        name: 'TypeScript',
        icon: <BiLogoTypescript />
    },
    {
        name: 'Reactjs',
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
        name: 'Nodejs',
        icon: <FaNode />
    },
    {
        name: 'Expressjs',
        icon: <SiExpress />
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />
    },
    {
        name: 'SQL',
        icon: <GrMysql />
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
        name: 'GitLab',
        icon: <FaGitlab />
    },
    {
        name: 'VS Code',
        icon: <DiVisualstudio />
    },
    {
        name: 'Postman',
        icon: <SiPostman />
    },
    {
        name: 'Jira',
        icon: <SiJira />
    },
    {
        name: 'AWS Serverless',
        icon: <FaAws />
    },
];

export const socialLinks = [
    {
        name: "Linkedin",
        icon: <GrLinkedinOption />,
        href: "https://www.linkedin.com/in/anand-yadav-08b7b2230/",
        styleForFooter: "text-white cursor-pointer hover:text-gray-500 text-3xl",
        styleForHome: "rounded-lg hover:text-white",
    },
    {
        name: "Github",
        icon: <IoLogoGithub />,
        href: "https://github.com/ANANDSYADAV",
        styleForFooter: "text-white cursor-pointer hover:text-gray-500 text-3xl",
        styleForHome: "rounded-lg hover:text-white",
    },
    {
        name: "Leetcode",
        icon: <SiLeetcode />,
        href: "https://leetcode.com/anandsyadav257/",
        styleForFooter: "text-white cursor-pointer hover:text-gray-500 text-3xl",
        styleForHome: "p-1 rounded-lg hover:text-white",
    },
    {
        name: "Codingninjas",
        icon: <SiCodingninjas />,
        href: "https://www.codingninjas.com/studio/profile/ninja_Anand",
        styleForFooter: "text-white cursor-pointer text-2xl hover:text-gray-500",
        styleForHome: "text-3xl rounded-lg hover:text-white",
    },
    {
        name: "GFG",
        icon: <SiGeeksforgeeks />,
        href: "https://auth.geeksforgeeks.org/user/anandsya3qfj",
        styleForFooter: "text-white text-4xl cursor-pointer hover:text-gray-500",
        styleForHome: "text-3xl rounded-lg hover:text-white",
    },
    {
        name: "npm",
        icon: <RiNpmjsFill />,
        href: "https://www.npmjs.com/~anandsyadav",
        styleForFooter: "text-white text-3xl cursor-pointer hover:text-gray-500",
        styleForHome: "text-3xl rounded-lg hover:text-white",
    },
    {
        name: "stackoverflow",
        icon: <FaStackOverflow />,
        href: "https://stackoverflow.com/users/22985848/anand-yadav",
        styleForFooter: "text-white text-3xl cursor-pointer hover:text-gray-500",
        styleForHome: "text-3xl rounded-lg hover:text-white",
    },
];

export const experience = [
    {
        company: "EPAM Systems",
        imgUrl: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/53iyzH5H5sbGiDKBDNhtD4/bbab813b8a8c7115b227ad942f015e07/EPAM_LOGO_Black.png",
        position: "Junior Software Engineer",
        duration: "Jan 2025 - May 2025",
        desc: "I did an internship at EPAM Systems, where I contributed to full-stack web development using modern technologies like HTML, CSS, JavaScript, Node.js, and Express. I gained hands-on experience in building scalable web applications, AWS Serverless, collaborating with teams, and following agile development practices."
    },
    {
        company: "Bureau of Indian Standards",
        imgUrl: "https://enterslice.com/learning/wp-content/uploads/2019/03/Bureau-of-Indian-Standards.jpg",
        position: "Summer Intern",
        duration: "May 2024 - July 2024",
        desc: "I completed a summer internship focused on standards related to image processing, computer graphics, and data representation. During this time, I explored the JPEG standard and contributed to understanding the technical framework behind image compression and representation."
    },
]

{/* <img src="" alt="ANAND-YADAV-" border="0">
<img src="" alt="ANAND-YADAV-page-0001" border="0">
<img src="" alt="anand-yadav--page-0001" border="0">

<img src="" alt="-page-0001" border="0">
<img src="" alt="-page-0001" border="0">
<img src="" alt="Get-the-most-out-of--Path-page-0001" border="0">
<img src="" alt="-page-0001" border="0">
<img src="" alt="-page-0001" border="0">
<img src="" alt="-page-0001" border="0">
<img src="" alt="-page-0001" border="0"> */}

export const certificates = [
    {
        name: "frontend-developer-react-certificate-hackerrank",
        link: "https://i.ibb.co/yB8BwS6z/frontend-developer-react-certificate-hackerrank-page-0001.jpg",
    },
    {
        name: "javascript-intermediate-certificate-hackerrank",
        link: "https://i.ibb.co/QFD2W98G/javascript-intermediate-certificate-hackerrank-page-0001.jpg",
    },
    {
        name: "AWS-Security-Best-Practices-for-Developers",
        link: "https://i.ibb.co/TDYGvjKp/AWS-Security-Best-Practices-for-Developers-page-0001.jpg",
    },
    {
        name: "Type-Script-for-Java-Script-Developers",
        link: "https://i.ibb.co/svzfXpMt/Type-Script-for-Java-Script-Developers-page-0001.jpg",
    },
    {
        name: "React-Using-Type-Script",
        link: "https://i.ibb.co/LDH72BjR/React-Using-Type-Script-page-0001.jpg",
    },
    {
        name: "Med-Tech-Plus",
        link: "https://i.ibb.co/Z60xWFVH/ANAND-YADAV-Med-Tech-Plus.jpg",
    },
    {
        name: "Epam Campus JS Program",
        link: "https://i.ibb.co/prNMwxjJ/ANAND-YADAV-page-0001.jpg",
    },
    {
        name: "Certificate-Node-JS",
        link: "https://i.ibb.co/hFMGRWZb/Certificate-Node-JS-page-0001.jpg",
    },
    {
        name: "Postman-Fundamental-Student-Expert",
        link: "https://i.ibb.co/2Y6qRw0r/Postman-Fundamental-Student-Expert-page-0001.jpg",
    },
    {
        name: "Learning-Jenkins",
        link: "https://i.ibb.co/svGqjmkn/Learning-Jenkins-page-0001.jpg",
    },
    {
        name: "jira-certificate",
        link: "https://i.ibb.co/sdvmsDzd/anand-yadav-jira-certificate-page-0001.jpg",
    },
    {
        name: "Confluence-Learning",
        link: "https://i.ibb.co/hRJsYxx8/Get-the-most-out-of-Confluence-Learning-Path-page-0001.jpg",
    },
]

export const academics = [
    {
        heading: "Winter Hindi Debate",
        desc: "I participated in a Hindi debate competition during my first year of college. Competing against multiple teams, I secured the 4th position, showcasing my public speaking and critical thinking skills.",
    },
    {
        heading: "NCC Journey",
        desc: "I have been an active NCC cadet during my college years, committed to discipline, leadership, and service. Through various camps and training sessions, I developed physical endurance, teamwork, and a strong sense of responsibility. My NCC journey has played a key role in shaping my character and instilling a spirit of dedication and resilience.",
        link: "/ncc"
    },
    {
        heading: "Face Detection Attendance System",
        desc: "In my final year, I developed a face detection-based attendance system using computer vision and machine learning techniques. The system captures facial data in real-time via webcam and marks attendance by recognizing registered faces accurately.",
    },
    {
        heading: "Gym Management Application",
        desc: "In my final year, I developed a face detection-based attendance system using computer vision and machine learning techniques. The system captures facial data in real-time via webcam and marks attendance by recognizing registered faces accurately.",
    },
    {
        heading: "B.Tech. Course Completion",
        desc: "Successfully completed my B.Tech in Computer Science with a CGPA of 8.94. My academic journey strengthened my technical foundation and prepared me for real-world problem-solving.",
    },
]