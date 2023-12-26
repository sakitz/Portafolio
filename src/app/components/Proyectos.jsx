"use client"
import { useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'

import tetris from "../../../public/Proyectos/giphytetris.webp";
import CRUD from "../../../public/Proyectos/CRUD.webp";
import ecomerce from "../../../public/Proyectos/ecomerce.webp";
import reactexpense from "../../../public/Proyectos/react-expense.webp";
import tictactoe from "../../../public/giphy tictactoe.webp";
import user from "../../../public/Proyectos/users.webp";

import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

const Proyectos = () => {

  useEffect(() => {
    Aos.init()
  } ,[])
  
  return (
      <section className="w-full h-screen tlmc:pt-[85rem] tlc:pt-[75rem] md:pt-[15rem] lg:pt-[40rem] xl:pt-[20rem]"> 
               <h2 className="text-transparent text-6xl font-bold mb-10 text-center" id="Proyectos">Proyectos</h2>
      <section className="flex flex-col justify-center max-w-screen-lg mx-auto px-10" >
      <h2 className="text-white text-5xl font-bold mb-10 text-center">Proyectos</h2>
        <article className="grid place-content-center gap-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid place-content-center justify-between rounded-lg" data-aos = 'flip-down'>
            <div className="relative flex max-w-lg p-2  bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={250}
                  height={200}
                  src={tetris}
                  alt="imagen de un tetris"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">Tetris</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-orange-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaHtml5 size={30} className="hover:animate-pulse" />
                  </li>
                  <li className="hover:text-blue-600 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaCss3Alt size={30} />
                  </li>
                  <li className="hover:text-yellow-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <IoLogoJavascript size={30} />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-0 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/Tetris"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir al repositorio del proyecto"
                >
                   <FaGithub className="text-white mr-4" size={25} /> <span>Code</span>
                </Link>
                <Link
                  href="https://tetris-one-peach.vercel.app/"
                  target="_blank"
                  className="hover:scale-105 transition-all right-6"
                  alt="link para ir a la web del proyecto"
                >
                   <MdOutlineComputer className="text-white " size={25} /> <span>Web</span>
                </Link>
              </article>
            </div>
          </div>
          <div className="grid place-content-center justify-between rounded-lg"  data-aos = 'flip-down'>
            <div className="relative flex max-w-lg p-2 bg-blue-950 border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={230}
                  height={190}
                  src={ecomerce}
                  alt="imagen de un ecommerce"
                  className="w-[230px] h-[190px] mx-auto my-auto rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto text-center">E-COMMERCE</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white mx-auto">
                  <li className="hover:text-orange-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaHtml5 size={30} />
                  </li>
                  <li className="hover:text-blue-600 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaCss3Alt size={30} />
                  </li>
                  <li className="hover:text-yellow-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <IoLogoJavascript size={30} className="hover:animate-pulse" />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-0 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/E-Commerce-Js"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir al repositorio del proyecto"
                >
                  <FaGithub className="text-white mr-4" size={25} /><span>Code</span>
                </Link>
                <Link
                  href="https://e-commerce-js-opal.vercel.app/"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir a la web del proyecto"
                >
                  <MdOutlineComputer className="text-white " size={25} /> <span>Web</span>
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg"  data-aos = 'flip-right'>
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={230}
                  height={190}
                  src={tictactoe}
                  alt="imagen de un tic-tac-toe"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">TicTacToe</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={25} />{" "}
                  </li>
                  <li className="hover:text-blue-600 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiTypescript size={30} className="hover:animate-pulse" />
                  </li>
                  <li className="hover:text-violet-400 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiVite size={30} />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-0 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/TicTacToe"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir al repositorio del proyecto"
                >
                  <FaGithub className="text-white mr-4" size={25} /> <span>Code</span>
                </Link>
                <Link
                  href="https://tic-tac-toe-wheat-nine.vercel.app/"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir a la web del proyecto"
                >
                  <MdOutlineComputer className="text-white " size={25} /> <span>Web</span>
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg" data-aos = 'flip-left'>
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={500}
                  height={500}
                  src={reactexpense}
                  alt="imagen de una expensa con grafico de pie"
                  className="tlmc:w-[180px] tlmc:h-[170px] md:w-[230px] mx-auto my-auto md:h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">React-Expense</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={25} />
                  </li>
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiTypescript size={30} />
                  </li>
                  <li className="hover:text-violet-400 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiVite size={30} className="hover:animate-pulse" />
                  </li>
                  <li className="hover:text-sky-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiTailwindcss size={30} />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-0 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/React-Expense"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir al repositorio del proyecto"
                >
                  <FaGithub className="text-white mr-4" size={25} /> <span>Code</span>
                </Link>
                <Link
                  href="https://react-expense-tau.vercel.app/"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir a la web del proyecto"
                >
                  <MdOutlineComputer className="text-white " size={25} /> <span>Web</span>
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg" data-aos = 'flip-up'>
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={500}
                  height={500}
                  src={user}
                  alt="imagen de usuarios"
                  className="tlmc:w-[180px] tlmc:h-[170px] md:w-[230px] mx-auto my-auto md:h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">User-API</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={25} />
                  </li>
                  <li className=" hover:text-stone-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <TbBrandNextjs size={30} className="hover:animate-pulse" />
                  </li>
                  <li className="hover:text-sky-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiTailwindcss size={30} className="hover:animate-pulse" />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-0 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/Nextjs-API-Users"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir al repositorio del proyecto"
                >
                  <FaGithub className="text-white mr-4" size={25} /> <span>Code</span>
                </Link>
                <Link
                  href="https://nextjs-api-users.vercel.app/"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir a la web del proyecto"
                >
                  <MdOutlineComputer className="text-white " size={25} /> <span>Web</span>
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg" data-aos = 'flip-down'>
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={500}
                  height={500}
                  src={CRUD}
                  alt="notas CRUD"
                  className="tlmc:w-[180px] tlmc:h-[170px] md:w-[230px] mx-auto my-auto md:h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">Notes-Crud</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={25} />
                  </li>
                  <li className="hover:text-stone-600 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <TbBrandNextjs size={30} />
                  </li>
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiPrisma size={30} className="hover:animate-pulse" />
                  </li>
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiSqlite size={30} className="hover:animate-pulse" />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-0 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/nextjs-prisma-crud"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir al repositorio del proyecto"
                >
                  <FaGithub className="text-white mr-4" size={25} /> <span>Code</span>
                </Link>
                <Link
                  href="https://nextjs-prisma-crud-six-gules.vercel.app/"
                  target="_blank"
                  className="hover:scale-105 transition-all"
                  alt="link para ir a la web del proyecto"
                >
                  <MdOutlineComputer className="text-white " size={25} /> <span>Web</span>
                </Link>
              </article>
            </div>
          </div>
        </article>
      </section>
    </section>
    
  );
};
export default Proyectos;
