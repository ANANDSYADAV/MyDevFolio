import { Link } from 'react-scroll'

function MobileMenuBar({ menuShow, setMenuShow }) {
    return (
        <div className={` w-full overflow-x-auto z-10 bg-gray-700 text-white text-[18px] font-serif lg:translate-y-[150px] fixed transition-all ${menuShow ? 'translate-y-[80px]' : 'translate-y-[150px]'}`}>
            <div className='flex flex-col gap-5 items-center justify-center back py-4'>
                <Link
                    to={'home'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-center hover:text-blue-300 cursor-pointer'>
                    HOME
                </Link>
                <Link
                    to={'about'}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-center hover:text-blue-300 cursor-pointer'>
                    ABOUT
                </Link>
                <Link
                    to={'projects'}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-center hover:text-blue-300 cursor-pointer'>
                    PROJECTS
                </Link>
                <Link
                    to={'contact'}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenuShow(false)}
                    className='text-center hover:text-blue-300 cursor-pointer'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default MobileMenuBar