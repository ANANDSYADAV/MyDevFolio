import React from "react";
import { Link } from 'react-scroll'
import { Typewriter } from "react-simple-typewriter";
import { socialLinks } from "../assets/constants";
import { v4 as uuidv4 } from 'uuid';

function Home() {

  return (
    <div className="top-[80px] relative">
      <div id="home" className='flex flex-col bg-blue-100 justify-center items-center w-full min-h-[500px] gap-10 px-10 text-center'>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <p className='text-black font-bold text-5xl font-sans'>
            <span>HEY, I'M </span>
            <span className="text-red-900">
              <Typewriter
                words={['ANAND YADAV', 'a Web Developer', 'a Problem Solver', 'a Coding Enthusiast']}
                loop={true}
                typeSpeed={120}
                deleteSpeed={80}
                cursor
                cursorStyle=''
              />
            </span>
          </p>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-black font-semibold text-md font-sans'>I am a recent Computer Science graduate from the National Institute of Technology, Agartala, with hands-on experience in web development and related technologies.</p>
          </div>
        </div>
        <div className="bg-white h-[50px] rounded-xl w-auto flex flex-row justify-center items-center gap-5 px-4 text-3xl">

          {socialLinks.map((link) => (
            <a key={uuidv4()} rel="noreferrer" href={link.href} target="_blank" className={link.styleForHome}>
              {React.cloneElement(link.icon, {
                className: "p-1 rounded-lg hover:bg-blue-700",
              })}
            </a>
          ))}

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
