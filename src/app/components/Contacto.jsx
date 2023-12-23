"use client";
import React, { useRef, useEffect, useState } from "react";
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

  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = () => {
    // Validar el formulario con Email.js
    emailjs.sendForm(
      'service_s3paadw',
      'template_5r7b7rg',
      form.current,
      'tptWp-gmiBzkz-D5I'
    )
      .then((result) => {
        console.log(result.text);
        // Aquí puedes realizar acciones adicionales después de enviar el correo si es necesario
        // Mostrar el mensaje de éxito
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu Correo fue enviado.',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.text);
        // Mostrar un mensaje de error si hay algún problema con el envío del correo
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar el correo. Por favor, intenta de nuevo más tarde.',
        });
      });
  };


  const handleClick = () => {
    // Validar que todos los campos estén completos
    if (
      form.current.user_name.value &&
      form.current.user_email.value &&
      form.current.message.value
    ) {
      // Enviar el correo
      sendEmail();
    } else {
      // Mostrar un mensaje de error si algún campo está vacío
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos del formulario.',
      });
    }
  };

  return (
    <div
      className="w-full h-screen"
      data-aos="flip-left"
    >
      <section className="text-gray-400 body-font">
        <div
          className="max-w-screen-lg mx-auto h-screen 
                    px-10 md:px-0 tlmc:pt-[50rem] tlc:pt-[35rem] md:pt-[20rem] 2xl:pt-[10rem]"
        >
          <div className="flex flex-col text-center w-full mb-8">
          <h2
      id="Contacto"
        className="text-transparent text-9xl  font-normal text-center"
      >
        Proyectos
      </h2>
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">
              Contactame
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Puedes contactarme mediante este formulario o mas abajo esta mis redes / Email.
              
            </p>
          </div>
          <form
            className="lg:w-1/2 md:w-2/3 mx-auto"
            ref={form}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                
                    required
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
          
                    required
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleClick}
                  type="submit"
                  value="Enviar"
                  className="flex mx-auto text-white bg-transparent border-2 border-white transition-all py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Enviar
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a className="text-blue-500">benjaminlopezmia@gmail.com</a>
                <p className="leading-normal my-5">
                  San miguel de Tucuman, Argentina
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
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
