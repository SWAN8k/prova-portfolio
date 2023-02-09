import React from 'react';
import Router, { useRouter } from 'next/router';
import {} from 'react-icons/'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsLinkedin, BsTelephone } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

function Contact() {
  const router = useRouter();


  return (
    <div className='h-full bg-zinc-700'>
      <div className='flex items-center justify-center h-screen'>

        <span onClick={() => router.push('/Knowledge')} className='flex items-center text-center justify-center h-4/5 w-72  absolute right-3/4 cursor-pointer transition-all ease-in-out duration-100 hover:bg-zinc-600'>
          <svg onClick={() => router.push('/Knowledge')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 absolute left-28 text-orange-300 transition-all ease-in-out duration-100 hover:scale-125 hover:text-yellow-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

        </span>
        <div className='flex flex-col items-center justify-center h-4/5 w-4/5 border-gray-300 shadow-2xl shadow-slate-300 overflow-hidden'>
          <div className='flex flex-col items-center text-center w-2/3 h-2/3 '>
            <h1 className='flex items-center justify-center text-center text-5xl font-serif text-slate-300'> <b>I miei contatti :</b> </h1>
            <div className='flex flex-row items-center justify-center text-3xl mt-14 font-serif relative -left-5' ><b><div className="flex ">Telefono : <div className="text-slate-200 ml-1"> +39 3928010852</div></div> <div className="flex relative left-80 ml-28 bottom-8 gap-1.5 text-3xl"> <div className='flex text-green-600'><FaWhatsapp/> </div>  <div className='flex text-blue-500'><FaTelegram/></div> <div className='flex text-white'><BsTelephone/></div></div> </b>
            </div>
            <div className='flex flex-row items-center justify-center text-3xl font-serif relative left-10'><b>Socials : <a target="_blank" href="https://it-it.facebook.com/francesco.rielli.1" className="text-blue-600">Facebook</a></b> <a target="_blank" href="https://it-it.facebook.com/francesco.rielli.1"><div className="text-blue-400 mr-3 relative top-0 left-2 text-3xl transition-all ease-in-out duration-300  hover:scale-125 hover:text-blue-600"><BsFacebook/></div></a><b>| <a target="_blank" href="https://www.instagram.com/francesco.rielli/" className="text-orange-400">Instagram</a> </b> <a target="_blank"  href="https://www.instagram.com/francesco.rielli/"><div className="relative top-0 left-2 text-3xl text-orange-500 transition-all ease-in-out duration-300 hover:text-purple-500 hover:scale-125"><BsInstagram/></div></a></div>
          <div className='flex flex-row items-center justify-center text-3xl mt-10 font-serif relative -left-1'><b>Mail : <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxkNVBKhsNcrJLgNllSqVRzrHwPfKpXpXPmzmCnRFnJpSszGqddqzHvMvbZWSRdXkb" className='text-red-400'>frielli.12@gmail.com</a></b> <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxkNVBKhsNcrJLgNllSqVRzrHwPfKpXpXPmzmCnRFnJpSszGqddqzHvMvbZWSRdXkb"><div className="relative top-0 left-2 text-3xl text-red-500 transition-all ease-in-out duration-300 hover:text-red-600 hover:scale-125"><SiGmail/></div></a></div>
          <div className='flex flex-row items-center justify-center text-3xl mt-10 font-serif relative -left-1'><b>Linkedin : <a target="_blank" href="https://www.linkedin.com/in/francesco-rielli-937a05235/" className='text-slate-200'>Francesco Rielli</a></b> <a target="_blank" href="https://www.linkedin.com/in/francesco-rielli-937a05235/"><div className="relative top-0 left-2 text-3xl text-blue-400 transition-all ease-in-out duration-300 hover:text-blue-700 hover:scale-125"><BsLinkedin/></div></a></div>
          </div>
          <footer className='text-slate-400 font-mono relative top-20'>Made with NEXTJS and TAILWIND |20/01/2023|</footer>
        </div>
        
      </div>



    </div>
  )
}

export default Contact;
