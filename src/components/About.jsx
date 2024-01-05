import { SkillsArr } from '../assets/constants'

function About() {
  return (
    <div id="about" className="h-[2000px] sm:h-[1450px] md:h-[1300px] lg:h-[1050px] flex flex-col justify-center items-center sm:px-5 px-10 py-10 text-center gap-[50px]">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="font-sans text-3xl font-bold">ABOUT ME</p>
        <div className="border-b-4 border-blue-900 w-[50px] rounded-xl" />
        <p className="font-sans text-xl font-normal ">Here you will find more information about me, what I do, and my current skills, mostly in terms of programming and technology</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5 w-[100%] md:w-[40%]">
          <p className="font-sans text-2xl font-bold">Get to know me!</p>
          <div className="flex flex-col text-[18px] text-gray-700 gap-2 md:gap-1">
            <p>I'm a passionate and dedicated computer science student with a keen interest in exploring the world of web technologies. My academic journey has equipped me with a strong foundation in programming languages, data structures, and algorithms, while my personal projects and experiences have allowed me to dive deeper into web development frameworks, front-end technologies, and back-end systems.</p>
            <p>I am enthusiastic about using my knowledge to create responsive and user-friendly web applications. I look forward to embracing the challenges and opportunities that the field of web technologies presents.</p>
          </div>
        </div>
        <div>
          <img
            className='rounded-s-[200px] rounded-e-[200px] h-[300px] w-[300px] md:h-[400px] md:w-[90%] border-red-300 border-2'
            src="https://images.pexels.com/photos/19740567/pexels-photo-19740567/free-photo-of-my-image.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="My Image" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5 w-[100%] md:w-[80%]">
          <p className="font-sans text-2xl font-bold">My Skills</p>
          <div className="flex flex-row flex-wrap gap-3 text-[18px] font-bold text-gray-900 justify-center items-center">
            {SkillsArr.map((skill, index) => {
              return (
                <span key={index} className="bg-indigo-300 py-2 px-5 rounded-md flex items-center gap-1">
                  {skill.icon && skill.icon} {skill.name}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About