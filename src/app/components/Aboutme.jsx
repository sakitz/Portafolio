"use client";
import React, { useEffect, useState }  from "react";
import Aos from "aos";
import Image from 'next/image'

const Aboutme = () => {

  useEffect(() => {
    Aos.init()
  } ,[])

  const [currentHour, setCurrentHour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
        const data = await response.json();
        const { datetime } = data;
        const formattedHour = new Date(datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setCurrentHour(formattedHour);
        setLoading(false);
      } catch (error) {
        return error
      }
    };

    fetchData();
  }, []);

  return (
    <div
      id="Sobre mi"
      className="h-screen w-full tlmc:mt-[155rem] md:mt-[45rem] lg:mt-[70rem] xl:mt-[25rem]"
    
    >
      <h2 className="text-transparent text-7xl font-bold mb-12 text-center" id="Proyectos">Proyectos</h2>
      <section
        className="max-w-screen-lg sm:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center items-center px-4 justify-center"
      >
        <h1 className="font-bold font-Logo pt-[5rem] text-white capitalize text-3xl md:text-5xl col-span-1 md:col-span-2 m-auto mb-4" data-aos = 'fade-top'>
          Sobre mi <span className="animate-pulse">🎮🕹️</span> 
        </h1>
        <article className="h-full" data-aos = 'fade-right'>
          <p className="text-white text-xl">
          desarrollador FullStack
          aplicando React y Next.js para el frontend, node y express para el backend y base de datos sabiendo manejar grandes cantidades de datos. Tengo +1 año de experiencia en proyectos personales como operaciones CRUD
          , E-commerce, conexión a una API para recopilar usuarios. Actualmente estoy trabajando es proyectos backend como hashing de contraseñas, login con autentificacion de gmail y mucho mas
          </p><br />

          <section className="h-fit tlmc:h-fit md:w-full grid grid-cols-2 tlmc:grid-rows-1 md:grid-rows-2 gap-2">
            <Image src='/horario.webp' width={10000} height={1000} alt="gif de horario retro" className="hidden md:inline-block col-span-2 w-full h-36 rounded-md" />
            <Image src="/retro-unscreen.webp" width={1000} height={1000} alt="imagen de personaje retro" className="bg-blue-950 rounded-md w-full h-40 tlmc:hidden md:inline-block"/>
            <p className="tlmc:col-span-2 md:col-span-1 text-white font-bold font-Logo text-3xl rounded-md bg-gradient-to-br from-violet-700 via-violet-800 to-violet-950 w-full h-40 grid place-content-center">{loading ? ( <span>Cargando...</span> ) : ( <span> {currentHour}<span className="animate-pulse">.</span></span>)}</p>
            <p className="col-span-2 w-fit h-fit text-blue-500 text-xl place-content-center"> Si te ha gustado mi perfil, podrías contactarme en la siguiente sección.</p>
          </section>

        </article>

        <article className="grid place-content-center" data-aos = 'fade-left'>

          <Image
            width={1000000}
            height={1000000}
            alt="mi foto"
            src="/hero.webp"
            className="grid-cols-2 place-content-center w-full tlmc:h-[430px] md:h-[550px] rounded-2xl"
          />
        </article>
      </section>
    </div>
);
};

export default Aboutme;
