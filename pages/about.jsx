import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';




function About() {



  const router = useRouter();


  return (
    <div className='h-full bg-zinc-600'>

      <div className='flex items-center justify-center h-screen'>

        <span onClick={() => router.push('/')} className='flex items-center text-center justify-center h-5/6 xl:w-72 lg:w-60  absolute right-3/4 cursor-pointer transition-all ease-in-out duration-100 hover:bg-zinc-700'>
          <svg onClick={() => router.push('/')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 absolute left-28 text-orange-300 transition-all ease-in-out duration-100 hover:scale-125 hover:text-yellow-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

        </span>
        <div className='flex items-center justify-center h-5/6 w-4/5 bg-inherit shadow-2xl shadow-green-300 '>

          <div className='flex flex-col items-center text-center p-3 h-full w-2/3 overflow-auto hover:overflow-scroll scrollbar-none'>
            <h2 className='flex items-center text-center my-6 text-4xl text-green-300 font-bold font-serif relative top-20' >Come mi descrivo :</h2>
            <p className='text-center items-center text-gray-300 font-semibold text-3xl z-40 p-1 font-mono relative top-28'>
              Sono una persona disponibile, creativa e innovativa con una forte attenzione per i dettagli e l'organizzazione.
              Adoro lavorare in gruppo, ma sono anche in grado di lavorare da solo. Sono una persona empatica,
              capisco le esigenze degli altri e cerco sempre di fare del mio meglio per dare loro una mano.
              Il mio obbiettivo è diventare un front-end developer e per questo sto costantemente cercando di migliorare
              le mie competenze e di imparare nuove tecnologie, inoltre, 
              ho una mentalità aperta per apprendere sempre nuove competenze e, mi piace sempre trovare nuove soluzioni ai problemi.
              La mia passione per la programmazione è iniziata un anno fa.
              Ho iniziato a imparare i fondamenti del codice e ho scoperto che mi piaceva molto creare siti web.
              Da allora, ho continuato ad apprendere e migliorare le mie competenze.
              Seguo corsi online e ho completato un corso di sviluppo web.
              Ho sviluppato alcuni progetti personali per mettere in pratica ciò che avevo imparato.
              Sto cercando un'opportunità lavorativa per diventare un front-end developer.
              Sono disponibile a lavorare sia in un ambiente di lavoro tradizionale che in un ambiente di lavoro remoto.
              Sarei onorato di far parte di un team di sviluppatori esperti e di imparare da loro.
            </p>
          </div>

          <span onClick={() => router.push('/Knowledge')} className='flex items-center text-center justify-center h-5/6 w-72  absolute left-3/4 cursor-pointer transition-all ease-in-out duration-100 hover:bg-zinc-700'>
            <svg onClick={() => router.push('/Knowledge')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 absolute left-28 text-orange-300 transition-all ease-in-out duration-100 hover:scale-125 hover:text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
      </div>

    </div>
  )
}

export default About
