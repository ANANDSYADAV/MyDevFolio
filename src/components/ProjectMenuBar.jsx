import { Link } from 'react-scroll'

function ProjectMenuBar({ menuShow, setMenuShow }) {
    return (
        <div className={` w-full overflow-x-auto z-10 bg-gray-700 text-white text-[18px] font-serif lg:translate-y-[150px] fixed transition-all ${menuShow ? 'translate-y-[80px]' : 'translate-y-[150px]'}`}>
            <div className='flex flex-col gap-5 items-center justify-center back py-4'>
            <Link
                    to={'top'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>PAGE-TOP</Link>
                  <Link
                    to={'overview'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>OVERVIEW</Link>
                  <Link
                    to={'responsive'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>RESPONSIVE</Link>
                  <Link
                    to={'links'}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>LINKS</Link>
            </div>
        </div>
    )
}

export default ProjectMenuBar