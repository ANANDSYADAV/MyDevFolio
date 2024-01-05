import { FaInstagramSquare } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from 'react'

function Contact() {
  const [copyStatus1, setCopyStatus1] = useState(false);
  const [copyStatus2, setCopyStatus2] = useState(false);
  const [copyStatus3, setCopyStatus3] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  }

  useEffect(() => {
    if (copyStatus1) {
      copyToClipboard(document.getElementsByClassName('span')[0].innerHTML);
      setTimeout(() => {
        setCopyStatus1(false);
      }, 300)
    } else if (copyStatus2) {
      copyToClipboard(document.getElementsByClassName('span')[1].innerHTML);
      setTimeout(() => {
        setCopyStatus2(false);
      }, 300)
    } else if (copyStatus3) {
      copyToClipboard(document.getElementsByClassName('span')[2].innerHTML);
      setTimeout(() => {
        setCopyStatus3(false);
      }, 300);
    }
  }, [copyStatus1, copyStatus2, copyStatus3]);

  return (
    <div id="contact" className="flex flex-col h-700px justify-center items-center text-center bg-slate-200 py-12">
      <div className="flex flex-col justify-center items-center gap-3 px-5">
        <p className="font-sans text-3xl font-bold">CONTACT</p>
        <div className="border-b-4 border-blue-900 w-[50px] rounded-xl" />
        <p className="font-sans text-xl font-normal ">Feel free to drop me a message on any of the below-listed options, and I will get back to you as soon as possible</p>
      </div>
      <div className="flex flex-col mt-5 w-[90%] md:w-[60%] justify-center items-center gap-1">

        <div className="flex bg-orange-300 gap-3 w-[100%] md:w-[75%] xl:w-[50%] rounded-lg justify-between items-center py-2 px-3">
          <IoIosMail className="text-4xl" />
          <span className="span text-xl text-gray-700 py-2 px-3 rounded-lg bg-transparent">a9663323@gmail.com</span>
          {copyStatus1 ? (<TiTick className={`text-[30px] cursor-pointer`} />) : (<FaCopy onClick={() => setCopyStatus1(true)} className={`text-3xl cursor-pointer`} />)}
        </div>

        <div className="flex bg-orange-300 w-[100%] md:w-[75%] xl:w-[50%] rounded-lg justify-between items-center py-2 px-3">
          <IoIosCall className="text-4xl" />
          <span className="span text-xl text-gray-700 py-2 px-3 rounded-lg bg-transparent">1234567890</span>
          {copyStatus2 ? (<TiTick className={`text-[30px] cursor-pointer`} />) : (<FaCopy onClick={() => setCopyStatus2(true)} className={`text-3xl cursor-pointer`} />)}
        </div>

        <div className="flex bg-orange-300 gap-3 w-[100%] md:w-[75%] xl:w-[50%] rounded-lg justify-between items-center py-2 px-3">
          <FaInstagramSquare className="text-4xl" />
          <span className="span text-xl text-gray-700 py-2 px-3 rounded-lg bg-transparent">anandsyadav257</span>
          {copyStatus3 ? (<TiTick className={`text-[30px] cursor-pointer`} />) : (<FaCopy onClick={() => setCopyStatus3(true)} className={`text-3xl cursor-pointer`} />)}
        </div>

      </div>
    </div>
  )
}

export default Contact