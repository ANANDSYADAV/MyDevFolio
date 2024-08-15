import { IoLogoGithub } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

function Footer() {
  return (
    <div className='bg-black w-full h-[500px] md:h-[350px] md:px-10 py-5 text-white'>
      <hr className="w-[40%] ml-[10%]" />
      <div className='flex flex-col gap-3 md:flex-row my-12 md:my-5 md:mx-12 justify-between items-center h-[80%]'>
        <div className="flex flex-col items-start mx-2 px-4 md:px-0 w-[70%]">
          <h2 className='font-bold text-[25px]'>ANAND YADAV</h2>
          <p className="text-xl">I am an undergraduate student at the National Institute of Technology, Agartala, studying computer science. </p>
          <p className="text-xl"> I have a strong interest in web development and related fields.</p>
        </div>
        <div className='flex flex-col justify-center items-center font-bold text-2xl gap-3 w-full sm:w-[20%] ml-2'>
          <h1>SOCIALS</h1>
          <div className="flex flex-row gap-4 text-3xl">

            <a rel="noreferrer" href="https://www.linkedin.com/in/anand-yadav-08b7b2230/" target="_blank">
              <GrLinkedinOption className="text-white bg-black cursor-pointer" />
            </a>

            <a rel="noreferrer" href="https://github.com/ANANDSYADAV" target="_blank">
              <IoLogoGithub className="text-white cursor-pointer" />
            </a>

            <a rel="noreferrer" href="https://leetcode.com/anandsyadav257/" target="_blank">
              <SiLeetcode className="text-white cursor-pointer" />
            </a>

            <a rel="noreferrer" href="https://www.codingninjas.com/studio/profile/ninja_Anand" target="_blank">
              <SiCodingninjas className="text-white cursor-pointer" />
            </a>

            <a rel="noreferrer" href="https://auth.geeksforgeeks.org/user/anandsya3qfj" target="_blank">
              <SiGeeksforgeeks className="text-white cursor-pointer" />
            </a>

          </div>
        </div>
      </div>
      <hr className="w-[40%] ml-[50%]" />
    </div>
  )
}

export default Footer