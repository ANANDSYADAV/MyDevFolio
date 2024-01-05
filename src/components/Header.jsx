import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll'
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MobileMenuBar from './MobileMenuBar'

function Header() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <div className='fixed top-0 h-[80px] w-full bg-white flex font-serif text-gray-800 font-semibold z-10'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-row gap-4 items-center h-full pl-12'>
            <img
              className='rounded-full h-[45px] w-[45px]'
              src="/images/My-pic.png" />
            <p className='text-[18px]'>ANAND YADAV</p>
          </div>
          <div className='lg:block hidden'>
            <div className="flex flex-row items-center">
              <div className='fixed right-0 mr-12'>
                <div className='flex flex-row gap-14'>
                  <Link
                    to={'home'}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>HOME</Link>
                  <Link
                    to={'about'}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>ABOUT</Link>
                  <Link
                    to={'projects'}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>PROJECTS</Link>
                  <Link
                    to={'contact'}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='text-[18px] hover:text-blue-700 cursor-pointer'>CONTACT</Link>
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

      {menuShow && <MobileMenuBar menuShow={menuShow} setMenuShow={setMenuShow}/>}

    </>

  )
}

export default Header