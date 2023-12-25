"use client";
import React, { useRef, useEffect} from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import Swal from "sweetalert2";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const form = useRef(null);

  const sendEmail = () => {
    emailjs.sendForm(
      'service_s3paadw',
      'template_5r7b7rg',
      form.current,
      'tptWp-gmiBzkz-D5I'
    )
      .then((result) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu Correo fue enviado.',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar el correo. Por favor, intenta de nuevo más tarde.',
        });
      });
  };


  const handleClick = () => {
    if (
      form.current.user_name.value &&
      form.current.user_email.value &&
      form.current.message.value
    ) {
      sendEmail();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos del formulario.',
      });
    }
  };

  return (
    <section className="w-full h-screen 2xl:mb-10" data-aos="flip-left">
    <article className="text-gray-400 body-font max-w-screen-lg mx-auto h-screen px-10 md:px-0 tlmc:pt-[45rem] tlc:pt-[30rem] md:pt-[5rem] 2xl:pt-[10rem]">
      <header className="flex flex-col text-center w-full mb-8">
        <h1 id="Contacto" className="text-transparent text-9xl font-normal text-center">
          Proyectos
        </h1>
        <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">
          Contactame
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-violet-600 text-base">
          Puedes contactarme mediante este formulario o más abajo están mis redes / Email.
        </p>
      </header>
  
      <form className="lg:w-1/2 md:w-2/3 mx-auto" ref={form} onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <label className="block leading-7 text-sm text-white mb-2">
              Nombre
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full bg-gray-800 bg-opacity-40 border-white focus:bg-gray-800 focus:border-violet-600 focus:ring-violet-900 rounded border text-gray-800 transition-colors duration-200 ease-in-out  focus:ring-2 text-base outline-none py-1 px-3 leading-8"
              />
            </label>
          </div>
          <div className="p-2 w-1/2">
            <label className="block leading-7 text-sm text-white mb-2">
              Email
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-white focus:border-violet-600 focus:ring-violet-900 focus:bg-gray-800 focus:ring-2 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </label>
          </div>
          <div className="p-2 w-full">
            <label className="block leading-7 text-sm text-white mb-2">
              Mensaje
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-white focus:border-violet-600 focus:ring-violet-900 focus:bg-gray-800 focus:ring-2 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </label>
          </div>
        </div>
  
        <button
          onClick={handleClick}
          type="submit"
          value="Enviar"
          className="flex mx-auto text-white bg-transparent border-2 border-white transition-all py-2 px-8 focus:outline-none hover:bg-violet-700 rounded text-lg"
        >
          Enviar
        </button>
  
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-violet-600">benjaminlopezmia@gmail.com</p>
          <p className="leading-normal text-white my-5">
            San Miguel de Tucumán, Argentina
          </p>
          <span className="inline-flex">
            <Link
              href="https://github.com/sakitz"
              className="hover:scale-125  transition-all mr-6"
              target="_blank"
            >
              <p className="text-center text-white mb-2">GitHub</p>
              <FaGithub size={50} className="text-white rounded-full" />
            </Link>
  
            <Link
              href="https://www.linkedin.com/in/m%C3%A1ximo-benjamin-lopez-2476152a2/"
              className="hover:scale-125 hover:text-white transition-all "
              target="_blank"
            >
              <p className="text-center text-white mb-2">LinkedIn</p>
              <FaLinkedin size={50} className="text-white " />
            </Link>
          </span>
        </div>
      </form>
    </article>
  </section>
  

  );
};

export default Footer;
