import { useParams } from 'react-router-dom'
import { ProjectInfoArr } from '../assets/constants'
import { Link } from 'react-scroll'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ProjectMenuBar from './ProjectMenuBar';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ProjectDetails() {
  const { pid } = useParams();
  const [menuShow, setMenuShow] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pid])

  return (
    <>
      <div className='fixed top-0 h-[80px] w-full bg-white flex font-serif text-gray-800 font-semibold z-10'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-row gap-4 items-center h-full pl-12'>
            <img
              className='rounded-full h-[45px] w-[45px]'
              src="https://images.pexels.com/photos/19740913/pexels-photo-19740913/free-photo-of-me-cropped.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="My Image" />
            <p className='text-[18px]'>ANAND YADAV</p>
          </div>
          <div className='lg:block hidden'>
            <div className="flex flex-row items-center">
              <div className='fixed right-0 mr-12'>
                <div className='flex flex-row gap-10'>
                  <Link
                    to={'top'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>PAGE-TOP</Link>
                  <Link
                    to={'overview'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>OVERVIEW</Link>
                  <Link
                    to={'responsive'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>RESPONSIVE</Link>
                  <Link
                    to={'links'}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>LINKS</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            {menuShow ?
              (<RxCross2
                onClick={() => setMenuShow(false)}
                className='lg:hidden fixed right-0 mr-12 text-black cursor-pointer text-3xl' />)
              :
              (<IoMenu
                onClick={() => setMenuShow(true)}
                className='lg:hidden fixed right-0 mr-12 text-black cursor-pointer text-3xl' />)
            }
          </div>
        </div>
      </div>

      {menuShow && <ProjectMenuBar menuShow={menuShow} setMenuShow={setMenuShow} />}

      <div className='flex flex-col justify-center items-center bg-slate-200 h-[2150px] sm:h-[2250px] md:h-[2600px] absolute top-[80px] w-[100%]'>

        <div id='top' className='flex flex-col justify-center items-center gap-14 h-[400px] mb-8'>
          <p className='text-5xl font-sans font-extrabold'>{ProjectInfoArr[pid - 1].title}</p>
          <p className='text-xl text-center w-[90%] sm:w-[70%]'>This page contains the information of {ProjectInfoArr[pid - 1].title} Project which includes the Project Overview, Tools Used and Live Links.</p>
        </div>

        <div className='flex flex-col justify-center items-center mx-10 w-[100%] gap-5 py-[40px]'>
          <div id='overview' className='flex flex-col justify-center items-center mx-10 w-[100%] gap-5 bg-slate-200 py-[40px]'>
            <p className='text-3xl font-sans font-extrabold'>Project Overview</p>
            <div className="border-b-4 border-blue-900 w-[50px] rounded-xl mb-8" />
            <img src={ProjectInfoArr[pid - 1].image1} alt={ProjectInfoArr[pid - 1].title} className="h-[150px] w-[380px] sm:h-[300px] sm:w-[600px] md:h-[500px] md:w-[800px]" />

            <div className='flex flex-col items-center justify-center gap-5 text-center w-[80%]'>

              <div className='w-[90%] sm:w-[60%] text-lg text-left'>
                {ProjectInfoArr[pid - 1].lines.map((line) => {
                  return (
                    <p key={uuidv4()} >• {line}</p>
                  )
                })}
              </div>
            </div>
          </div>
          <div id='responsive' className='flex flex-col justify-center items-center mx-10 w-[100%] gap-5 bg-slate-200 py-[40px]'>
            <p className='text-3xl font-extrabold'>Responsive Design</p>
            <div className="border-b-4 border-blue-900 w-[50px] rounded-xl mb-8" />
            <img src={ProjectInfoArr[pid - 1].image2} alt={ProjectInfoArr[pid - 1].title} className="h-[150px] w-[380px] sm:h-[300px] sm:w-[600px] md:h-[500px] md:w-[800px]" />
          </div>
          {/* {ProjectInfoArr[pid - 1].image2} */}
        </div>
        <div className='w-[90%] flex flex-col items-center gap-5'>
          <p className='text-3xl font-extrabold text-center mt-5'>Tools Used</p>
          <div className="border-b-4 border-blue-900 w-[50px] rounded-xl mb-8" />
          <div className="flex flex-row flex-wrap gap-3 text-[18px] font-bold text-gray-900 justify-center items-center">
            {ProjectInfoArr[pid - 1].techs.map((tech) => {
              return (
                <span key={uuidv4()} className="bg-indigo-300 py-2 px-5 rounded-md flex items-center gap-1">
                  {tech}
                </span>
              )
            })}
          </div>

          <div id='links' className='w-[90%] flex flex-col items-center gap-5 mt-10'>
            <p className='text-3xl font-extrabold text-center mt-5'>Links</p>
            <div className="border-b-4 border-blue-900 w-[50px] rounded-xl mb-8" />

            <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
              <a rel="noreferrer" href={ProjectInfoArr[pid - 1].code} target='_blank' className='w-[200px] bg-blue-700 py-3 text-white text-xl font-bold font-sans rounded-md hover:opacity-[0.9] mx-auto lg:mx-0 text-center'>
                View Code
              </a>
              <a rel="noreferrer" href={ProjectInfoArr[pid - 1].live} target='_blank' className='w-[200px] bg-slate-700 py-3 text-white text-xl font-bold font-sans rounded-md hover:opacity-[0.9] mx-auto lg:mx-0 text-center'>
                Live Link
              </a>
            </div>
          </div>

          <div className='my-[100px]'>
            <NavLink to='/' className='w-[200px] bg-gray-800 py-3 text-blue-200 text-xl font-bold font-sans rounded-md hover:text-indigo-100 mx-auto lg:mx-0 text-center px-10'>
              ← Go Back
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails