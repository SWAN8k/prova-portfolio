import React from 'react';
import Router, { useRouter } from 'next/router';
import { DiCss3, DiPhotoshop } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import {SiAdobelightroom, SiAutodesk, SiExpress, SiJavascript, SiMicrosoftoffice, SiTailwindcss, SiThreedotjs, SiVectorworks} from 'react-icons/si';
import {GrNode, GrReactjs} from 'react-icons/gr';
import {TbBrandNextjs} from 'react-icons/tb';
import {FaFigma, FaJava} from 'react-icons/fa';
import {RiEnglishInput} from 'react-icons/ri';

function Knowledge() {
    const router = useRouter();


  return (
    <div className='h-screen bg-zinc-600'>
      
      <div className='flex items-center justify-center h-full'>

        <span onClick={() => router.push('/about')} className='flex items-center text-center justify-center h-4/5 w-72  absolute right-3/4 cursor-pointer transition-all ease-in-out duration-100 hover:bg-slate-700'>
          <svg onClick={() => router.push('/about')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 absolute left-28 text-orange-300 transition-all ease-in-out duration-100 hover:scale-125 hover:text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>

        <div className='flex items-center justify-center h-4/5 w-4/5 bg-slate-500 shadow-2xl shadow-blue-700 '>
          
          <div className='flex flex-col items-center text-center h-full  overflow-auto hover:overflow-scroll scrollbar-none'>
            <h1 className='flex flex-col items-center text-center font-bold text-5xl z-20 p-6 sticky top-0 bg-slate-500 border-b-2 border-zinc-800'>Queste sono le mie abilità al momento :</h1>
            <ul className='flex flex-col items-center text-center font-semibold '>
                <li className='text-4xl font-mono -mb-6'><div className='text-4xl relative top-10 right-14 text-blue-800'><AiFillHtml5 /></div> HTML,CSS<div className='text-4xl relative -top-10 left-44 text-amber-300'><DiCss3 /></div></li><p className='mb-5 text-lg'>Grado : Intermedio</p>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-yellow-300'><SiJavascript /></div> JAVASCRIPT</li><p className='mb-5 text-lg'>Grado : Medio-Basso</p>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-blue-500'>< GrReactjs /></div> REACT</li><p className='mb-5 text-lg'>Grado : Medio-Basso</p>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-black'><TbBrandNextjs /></div> NEXTJS</li><p className='mb-5 text-lg'>Grado : Medio-Basso</p>
                <li className='text-4xl font-mono mb-2'><div className="text-4xl relative top-10 right-14 text-blue-700"><SiTailwindcss /></div> TAILWIND</li><p className='mb-5 text-lg'>Grado : Medio-Basso</p>
                <li className='text-4xl font-mono mb-2'><div className="text-4xl relative top-10 right-14 text-green-500"><GrNode /></div> NODE.JS</li><p className='mb-5 text-lg'>Grado : Basso</p>
                <li className='text-4xl font-mono mb-2'><div className="text-4xl relative top-10 right-14 text-white"><SiExpress /></div> EXPRESS.JS</li><p className='mb-5 text-lg'>Grado : Basso</p>
                <li className='text-4xl font-mono mb-2'><div className="text-4xl relative top-10 right-14 text-red-600"><FaJava /></div> JAVA</li><p className='mb-5 text-lg'>Grado : Base</p>
                <li className='text-4xl font-mono mb-2'><div className="text-4xl relative top-10 right-14 text-purple-800"><SiVectorworks/></div>VECTARY</li><p className='mb-5 text-lg'>Grado : Base</p>
                <li className='text-4xl font-mono mb-2'><div className="text-4xl relative top-10 right-14 text-black"><SiThreedotjs/></div>THREE.JS</li><p className='mb-5 text-lg'>Grado : Base</p>
            </ul>

            <h1 className='flex flex-col items-center text-center my-5 font-bold text-5xl  border-b-2 border-zinc-800'>Altre Conoscenze :</h1>
            <ul className='flex flex-col items-center text-center font-semibold '>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-red-800'><RiEnglishInput /></div> LINGUA INGLESE</li><p className='mb-5 text-lg'>Grado : Certificato B1 </p>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-green-500'><SiAutodesk /></div> AUTOCAD</li><p className='mb-5 text-lg'>Grado : Certificato CAD 3D </p>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-blue-800'><DiPhotoshop /></div> ADOBE PHOTOSHOP</li><p className='mb-5 text-lg'>Grado : Intermedio</p>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-purple-800'><SiAdobelightroom /></div> ADOBE LIGHTROOM</li><p className='mb-5 text-lg'>Grado : Intermedio</p>
                <li className='text-4xl font-mono mb-2'><div className='text-4xl relative top-10 right-14 text-red-500'><FaFigma /></div> FIGMA</li><p className='mb-5 text-lg'>Grado : Basso</p>
                <li className='text-4xl font-mono mb-2'><div className="text-4xl relative top-10 right-14 text-orange-700"><SiMicrosoftoffice /></div> PACCHETTO OFFICE</li><p className='mb-5 text-lg'>Grado : Intermedio</p>
            </ul>



          </div>

          <span onClick={() => router.push('/Contact')} className='flex items-center text-center justify-center h-4/5 w-72  absolute left-3/4 cursor-pointer transition-all ease-in-out duration-100 hover:bg-slate-700'>
            <svg onClick={() => router.push('/Contact')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 absolute left-28 text-orange-300 transition-all ease-in-out duration-100 hover:scale-125 hover:text-slate-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>

        </div>

      </div>


    </div>
  )
}

export default Knowledge
