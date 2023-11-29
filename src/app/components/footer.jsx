"use client"
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

   const form = useRef()

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs.sendForm('service_s3paadw', 'template_5r7b7rg', form.current, 'tptWp-gmiBzkz-D5I')
     .then((result) => {
         console.log(result)
     }, (error) => {
         console.log(error.text);
     });
   } 


  return (
    <div 
      id='Contacto'
    className='lg:h-[60vh] xl:h-screen xl:w-full sm:mx-10'>
       <section class="text-gray-400 bg-[#17202a] body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contactame</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Puedes contactarme mediante este formulario o mas abajo esta mi informacion</p>
    </div>
    <form class="lg:w-1/2 md:w-2/3 mx-auto" ref={form} onSubmit={sendEmail}>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="user_name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="user_email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button type='submit' value="Enviar" class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <a class="text-red-400">benjaminlopezmia@gmail.com</a>
          <p class="leading-normal my-5">San miguel de Tucuman, Argentina
          </p>
          <span class="inline-flex">
          <Link href="https://github.com/sakitz" className="hover:scale-125  transition-all mr-6" target='_blank' >
              <p className="text-center text-white mb-2">GitHub</p>
              <FaGithub
                size={50}
                className="text-white rounded-full"
              />
            </Link>

            <Link href="https://www.linkedin.com/in/m%C3%A1ximo-benjamin-lopez-2476152a2/" className="hover:scale-125 hover:text-white transition-all ">
            <p className="text-center text-white mb-2">LinkedIn</p>
              <FaLinkedin
                size={50}
                className="text-white "
              />
            </Link> 

          </span>
        </div>
      </div>
    </form>
  </div>
  </section>
    </div>
   
  )
}

export default Footer