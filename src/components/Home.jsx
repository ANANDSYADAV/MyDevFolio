import { IoLogoGithub } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {

  const [ text ] = useTypewriter({
    words: ['ANAND YADAV', 'a Web Developer', 'a Problem Solver', 'a Coding Enthusiast', 'a NCC Cadet', 'a Learner'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="top-[80px] relative">
      <div id="home" className='flex flex-col bg-blue-100 justify-center items-center w-full min-h-[500px] gap-10 px-10 text-center'>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <p className='text-black font-bold text-5xl font-sans'>
            HEY, I'M <span className="text-red-900">{text}</span> 
            <span className='text-green-900 font-semibold'>
            <Cursor cursorStyle='|'/>
            </span>
          </p>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-black font-semibold text-md font-sans'>I am an undergraduate student at the National Institute of Technology, Agartala, studying computer science.</p>
            <p className='text-black font-semibold text-md font-sans'>I have a strong interest in web development and related fields.</p>
          </div>
        </div>
        <div className="bg-white h-[50px] rounded-xl w-auto flex flex-row justify-center items-center gap-5 px-4">

          <span className="h-full w-auto flex justify-center items-center">
            <a rel="noreferrer" href="https://www.linkedin.com/in/anand-yadav-08b7b2230/" target="_blank">
              <GrLinkedinOption className="text-black bg-white cursor-pointer p-1 text-3xl rounded-lg hover:bg-blue-300" />
            </a>
          </span>

          <span className="h-full w-auto flex justify-center items-center">
            <a rel="noreferrer" href="https://github.com/ANANDSYADAV" target="_blank">
              <IoLogoGithub className="text-black bg-white cursor-pointer p-1 text-3xl rounded-lg hover:bg-blue-300" />
            </a>
          </span>

          <span className="h-full w-auto flex justify-center items-center">
            <a rel="noreferrer" href="https://leetcode.com/anandsyadav257/" target="_blank">
              <SiLeetcode className="text-black bg-white cursor-pointer p-1 text-3xl rounded-lg hover:bg-blue-300" />
            </a>
          </span>

          <span className="h-full w-auto flex justify-center items-center">
            <a rel="noreferrer" href="https://www.codingninjas.com/studio/profile/ninja_Anand" target="_blank">
              <SiCodingninjas className="text-black bg-white cursor-pointer p-1 text-3xl rounded-lg hover:bg-blue-300" />
            </a>
          </span>

          <span className="h-full w-auto flex justify-center items-center">
            <a rel="noreferrer" href="https://auth.geeksforgeeks.org/user/anandsya3qfj" target="_blank">
              <SiGeeksforgeeks className="text-black bg-white cursor-pointer p-1 text-3xl rounded-lg hover:bg-blue-300" />
            </a>
          </span>

        </div>
        <Link
          to={'projects'}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="bg-blue-700 py-3 px-10 text-white text-xl font-bold font-sans rounded-sm hover:opacity-[0.9]">PROJECTS</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
