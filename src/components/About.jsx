import { Link } from 'react-router-dom';
import { SkillsArr } from '../assets/constants'
import { GiArmoredBoomerang } from "react-icons/gi";

export default function About() {
  return (
    <section id="about" className=" flex flex-col justify-center items-center sm:px-5 px-10 py-[25%] sm:py-[20%] md:py-[15%] text-center gap-[50px]">
      <article className="flex flex-col justify-center items-center gap-3">
        <p className="font-sans text-3xl font-bold">ABOUT ME</p>
        <div className="border-b-4 border-blue-900 w-[50px] rounded-xl" />
      </article>
      <article className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center text-start font-serif gap-5 w-[100%] md:w-[40%]">
          <div className="flex flex-col text-[18px] text-gray-700 gap-5">
            <p className='first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-semibold first-letter:text-gray-600 first-letter:font-serif'>I am a passionate and results-driven Software Engineer with a strong foundation in programming, data structures, and algorithms, supported by hands-on experience in full-stack web development.</p>
            <p className='first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-semibold first-letter:text-gray-600 first-letter:font-serif'>I am committed to writing clean, efficient code and creating seamless, user-centric softwares. With a continuous drive to learn and grow, I look forward to tackling real-world challenges and contributing to innovative digital solutions in the evolving field of web development.</p>
          </div>
        </div>
        <figure>
          <img
            className='h-[400px] w-[300px] md:h-[400px] md:w-full rounded-[80px] first-line:shadow-3xl shadow-slate-600 object-cover'
            src="https://i.ibb.co/9HMqsK1k/formal-img.png" alt="My Image" />
        </figure>
      </article>

      <article className="flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-7 w-[100%] md:w-[80%]">
          <p className="font-sans text-2xl font-bold">My Skills</p>
          <div className="flex flex-row flex-wrap gap-3 text-[18px] font-bold text-gray-900 justify-center items-center">
            {SkillsArr.map((skill) => {
              return (

                <span key={skill.id} className="bg-indigo-300 hover:bg-indigo-200 hover:scale-110 py-2 px-5 rounded-md flex items-center justify-center gap-1">

                  {skill.icon && skill.icon} {skill.name}

                </span>

              )
            })}
          </div>
        </div>
      </article>

      <Link to='/more_details?tab=Career' role='button' className="bg-gray-700 hover:bg-gray-500 text-white py-2 px-5 rounded-md flex items-center gap-1">Know More <GiArmoredBoomerang /></Link>
    </section>
  )
}
