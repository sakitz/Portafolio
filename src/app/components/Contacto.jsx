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
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;
  
    // Verificar que todos los campos estén llenos antes de enviar el correo
    if (userName && userEmail && message) {
      emailjs
        .sendForm(
          'service_s3paadw',
          'template_5r7b7rg',
          form.current,
          'tptWp-gmiBzkz-D5I'
        )
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Correo fue enviado.',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo.',
          });
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos del formulario.',
      });
    }
  };

  return (
    <section className=" w-full h-screen 2xl:mb-10" data-aos="fade-left">
    <article className="body-font max-w-screen-lg mx-auto h-screen md:px-0 tlmc:pt-[55rem] tlc:pt-[30rem] md:pt-[5rem] xl:pt-[15rem] 2xl:pt-[10rem]">
      <header className="flex flex-col text-center w-full mb-8">
        <h1 id="Contacto" className="text-transparent text-9xl font-normal text-center">
          Proyectos
        </h1>
        <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">
          Contactame
        </h2>
        <p className="lg:w-[66%] mx-auto leading-relaxed text-blue-500 text-base">
          Puedes contactarme mediante este formulario o más abajo están mis redes / Email.
        </p>
      </header>
  
      <form className="lg:w-1/2 md:w-2/3 mx-auto" ref={form} onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <label className="inline-block leading-7 text-sm text-white mb-2">
              Nombre
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="inputs"
              />
            </label>
          </div>
          <div className="p-2 w-1/2">
            <label className="inline-block leading-7 text-sm text-white mb-2">
              Email
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="inputs"
              />
            </label>
          </div>
          <div className="p-2 w-full">
            <label className="inline-block leading-7 text-sm text-white mb-2">
              Mensaje
              <textarea
                id="message"
                name="message"
                required
                className="inputs"
              ></textarea>
            </label>
          </div>
        </div>
  
        <button
          onClick={sendEmail}
          type="submit"
          value="Enviar"
          className="flex mx-auto text-white bg-transparent border-2 border-white transition-all py-2 px-8 focus:outline-none hover:bg-violet-700 rounded text-lg"
        >
          Enviar
        </button>
  
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-blue-500">benjaminlopezmia@gmail.com</p>
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
