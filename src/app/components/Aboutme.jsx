"use client";
import React, { useEffect }  from "react";
import Image from "next/image";
import Aos from "aos";

const Aboutme = () => {

  useEffect(() => {
    Aos.init()
  } ,[])


  return (
    <div
      id="Sobre mi"
      className="h-screen w-full md:h-[50vh] xl:h-screen "
    
    >
      <section
        className="max-w-screen-lg sm:mx-auto  grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center items-center px-4 justify-center"
      >
        <h1 className="font-bold text-white capitalize text-3xl md:text-5xl col-span-1 md:col-span-2 m-auto mb-4" data-aos = 'fade-top'>
          Sobre mi <span className="animate-pulse">👾👾👾</span> 
        </h1>
        <article className="h-full" data-aos = 'fade-right'>
          <p className="text-white text-xl">
          Hola, me llamo <span className="text-violet-700">Benjamín</span> y tengo 17 años, naci el 08/03/2006 y soy un estudiante autodidacta, Tengo +2 años de experiencia en proyectos personales, soy una persona sociable y amable pero tambien soy una persona que se compromete y se apasiona con el trabajo y el seguir aprendiendo para ser el mejor posible en lo que hago. <br />
          me gusta mucho el apartado del diseño de la web asique siempre soy un poco exigente con el estilo de la web tratando de que sea una web interactiva con animaciones que mejoren la experiencia del usuario
          </p><br />
          <br />
          <p className="text-red-700 text-xl"> Si te a gustado mi perfil, podrias contactame en la siguiente seccion.</p>
          <div className="flex pt-2 justify-center items-center flex-col gap-4">
          </div>
        </article>
        <article data-aos = 'fade-left'>
          <Image
            width={400}
            height={400}
            alt="imagen"
            src="/heroo.jpg"
            className="grid-cols-2 w-[380px] h-[450px] rounded-md border border-black"
          />
        </article>
      </section>
    </div>
);
};

export default Aboutme;
