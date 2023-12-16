"use client";
import React, { useEffect, useState }  from "react";
import Aos from "aos";
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const Aboutme = () => {

  useEffect(() => {
    Aos.init()
  } ,[])

  const [currentHour, setCurrentHour] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
        const data = await response.json();
        const { datetime } = data;
        const dateObject = new Date(datetime);
        const hour = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const formattedHour = `${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
        setCurrentHour(formattedHour);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
    };
  }, []);


  return (
    <div
      id="Sobre mi"
      className="h-screen w-full md:h-[50vh] xl:h-screen tlc:mt-10"
    
    >
      <h2 className="text-transparent text-7xl font-bold mb-10 text-center" id="Proyectos">Proyectos</h2>
      <section
        className="max-w-screen-lg sm:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center items-center px-4 justify-center"
      >
        <h1 className="font-bold font-Logo text-white capitalize text-3xl md:text-5xl col-span-1 md:col-span-2 m-auto mb-4" data-aos = 'fade-top'>
          Sobre mi <span className="animate-pulse">🎮🕹️</span> 
        </h1>
        <article className="h-full" data-aos = 'fade-right'>
          <p className="text-white text-xl">
          Hola me llamo <span className="text-violet-600">Benjamin</span>, me dedico al apartado Frontend aplicando React y Next.js para un mejor rendimiento. Tengo +1 año de experiencia en proyectos personales como operaciones CRUD, E-commerce, conexión a una API para recopilar usuarios. Actualmente estoy estudiando Python para backend con FastAPI para en un futuro ser un FullStack Developer.
          </p><br />

          <section className="h-fit tlmc:h-fit md:w-full grid grid-cols-2 tlmc:grid-rows-1 md:grid-rows-2 gap-2">
            <Image src='/horario.gif' width={10000} height={1000} alt="imagen" className="hidden md:inline-block col-span-2 w-full h-36 rounded-md border-2 border-violet-700" />
            <Image src="/retro-unscreen.gif" width={1000} height={1000} alt="imagen" className="border border-violet-700 bg-blue-950 rounded-md w-full h-40 tlmc:hidden md:inline-block"/>
            <p className="tlmc:col-span-2 md:col-span-1 text-white font-bold font-Logo text-3xl rounded-md bg-gradient-to-br from-violet-700 via-violet-800 to-violet-950 w-full h-40 grid place-content-center border-2 border-violet-700 ">{currentHour ? <p>{currentHour}<span className="animate-pulse">.</span></p> : <p>Loading...</p>}</p>
            <p className="col-span-2 w-fit h-fit text-violet-600 text-xl place-content-center"> Si te a gustado mi perfil, podrias contactame en la siguiente seccion.</p>
          </section>

        </article>

        <article className="grid place-content-center" data-aos = 'fade-left'>

          <Image
            width={1000000}
            height={1000000}
            alt="imagen"
            src="/hero.jpg"
            className="grid-cols-2 place-content-center w-full h-[550px] rounded-2xl border-2 border-blue-500"
          />
        </article>
      </section>
    </div>
);
};

export default Aboutme;
