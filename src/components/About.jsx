import { Link } from 'react-router-dom';
import { SkillsArr } from '../assets/constants'
import { GiArmoredBoomerang } from "react-icons/gi";
import { v4 as uuidv4 } from 'uuid';

export default function About() {
  return (
    <section id="about" className=" flex flex-col justify-center items-center sm:px-5 px-10 py-[25%] sm:py-[20%] md:py-[15%] text-center gap-[50px]">
      <article className="flex flex-col justify-center items-center gap-3">
        <p className="font-sans text-3xl font-bold">ABOUT ME</p>
        <div className="border-b-4 border-blue-900 w-[50px] rounded-xl" />
        {/* <p className="font-sans text-xl font-normal ">Here you will find more information about me, what I do, and my current skills, mostly in terms of programming and technology</p> */}
      </article>
      <article className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center text-start font-serif gap-5 w-[100%] md:w-[40%]">
          {/* <p className="font-sans text-2xl font-bold">Get to know me!</p> */}
          <div className="flex flex-col text-[18px] text-gray-700 gap-5">
            <p className='first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-semibold first-letter:text-gray-600 first-letter:font-serif'>I am a passionate and results-driven Computer Science graduate with a strong foundation in programming, data structures, and algorithms, supported by hands-on experience in full-stack web development. I have worked on several real-world projects involving responsive front-end interfaces, RESTful APIs, real-time systems, and scalable back-end solutions using modern web technologies and frameworks.</p>
            <p className='first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-semibold first-letter:text-gray-600 first-letter:font-serif'>Through internships, collaborative team projects, and hackathons, I have gained valuable exposure to both client-side and server-side development, as well as cloud-based application design. I am committed to writing clean, efficient code and creating seamless, user-centric web experiences. With a continuous drive to learn and grow, I look forward to tackling real-world challenges and contributing to innovative digital solutions in the evolving field of web development.</p>
          </div>
        </div>
        <div>
          <figure>
            <img
              className='rounded-s-[200px] rounded-e-[200px] h-[300px] w-[300px] md:h-[400px] md:w-[90%] border-red-300 border-2'
              src="https://images.pexels.com/photos/19740567/pexels-photo-19740567/free-photo-of-my-image.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="My Image" />
          </figure>
        </div>
      </article>
      <article className="flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-7 w-[100%] md:w-[80%]">
          <p className="font-sans text-2xl font-bold">My Skills</p>
          <div className="flex flex-row flex-wrap gap-3 text-[18px] font-bold text-gray-900 justify-center items-center">
            {SkillsArr.map((skill) => {
              return (
                <span key={uuidv4()} className="bg-indigo-300 hover:bg-indigo-200 py-2 px-5 rounded-md flex items-center justify-center gap-1">
                  {skill.icon && skill.icon} {skill.name}
                </span>
              )
            })}
          </div>
        </div>
      </article>

      <Link to='/more_details' role='button' className="bg-gray-700 hover:bg-gray-500 text-white py-2 px-5 rounded-md flex items-center gap-1">Know More <GiArmoredBoomerang /></Link>
    </section>
  )
}
