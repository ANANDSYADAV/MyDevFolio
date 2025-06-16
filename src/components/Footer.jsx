import { socialLinks } from "../assets/constants";
import { v4 as uuidv4 } from 'uuid';

function Footer() {
  return (
    <footer className='bg-black w-full md:px-10 py-10 text-white'>
      <hr className="w-[40%] ml-[10%]" />
      <section className='flex flex-col gap-3 lg:flex-row my-12 md:my-5 md:mx-12 justify-between items-center h-auto'>
        <article className="flex flex-col items-start mx-2 px-4 md:px-0 w-[65%]">
          <h2 className='font-bold text-[25px]'>ANAND YADAV</h2>
          <p className="text-xl">I am a recent Computer Science graduate from the National Institute of Technology, Agartala, with hands-on experience in web development and related technologies.</p>
        </article>
        <article className='flex flex-col justify-center items-center font-bold text-2xl gap-3 w-full sm:w-[25%] ml-2'>
          <h1>SOCIALS</h1>
          <div className="flex flex-row items-center gap-4 text-4xl">
            {socialLinks.map((link) => (
              <a rel="noreferrer" href={link.href} target="_blank" key={uuidv4()} className={link.styleForFooter}>{link.icon}</a>
            ))}
          </div>
        </article>
      </section>
      <hr className="w-[40%] ml-[50%]" />
    </footer>
  )
}

export default Footer