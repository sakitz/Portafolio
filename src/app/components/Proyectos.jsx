import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import calculadora from "../../../public/giphy calculator.gif";
import CRUD from "../../../public/Proyectos/CRUD.png";
import ecomerce from "../../../public/Proyectos/ecomerce.PNG";
import reactexpense from "../../../public/Proyectos/react-expense.PNG";
import tictactoe from "../../../public/giphy tictactoe.gif";
import user from "../../../public/Proyectos/users.PNG";

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

// hacer un recorrido de objetos con sus respectivos atributos

const Proyectos = () => {
  return (
    <section
      id="Proyectos"
      style={{ scrollBehavior: "smooth"}}
    className="lg:h-[60vh] xl:h-screen xl:w-full mb-20 sm:mx-10">
      <section className="flex flex-col justify-cente max-w-screen-lg mx-auto px-10 md:px-0">
      <h2 className="text-white text-4xl font-bold mb-10">Proyectos</h2>
        <article className="grid place-content-center justify-between gap-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid place-content-center justify-between rounded-lg">
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={7000}
                  height={1000}
                  src={calculadora}
                  alt="imagen"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">Calculadora</span>
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
              <article className="absolute right-4 bottom-4 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/Calculadora"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <FaGithub className="text-white mr-2" size={30} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <MdOutlineComputer className="text-white " size={30} />
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg">
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={7000}
                  height={1000}
                  src={ecomerce}
                  alt="imagen"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
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
              <article className="absolute right-4 bottom-4 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/E-Commerce-Js"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <FaGithub className="text-white mr-2" size={30} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <MdOutlineComputer className="text-white " size={30} />
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg">
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={7000}
                  height={1000}
                  src={tictactoe}
                  alt="imagen"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">TicTacToe</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={30} />{" "}
                  </li>
                  <li className="hover:text-blue-600 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiTypescript size={30} className="hover:animate-pulse" />
                  </li>
                  <li className="hover:text-violet-400 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiVite size={30} />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-4 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/TicTacToe"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <FaGithub className="text-white mr-2" size={30} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <MdOutlineComputer className="text-white " size={30} />
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg">
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={7000}
                  height={1000}
                  src={reactexpense}
                  alt="imagen"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">React-Expense</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={30} />
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
              <article className="absolute right-4 bottom-4 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/React-Expense"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <FaGithub className="text-white mr-2" size={30} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <MdOutlineComputer className="text-white " size={30} />
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg">
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={7000}
                  height={1000}
                  src={user}
                  alt="imagen"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">User-API</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={30} />
                  </li>
                  <li className=" hover:text-stone-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <TbBrandNextjs size={30} className="hover:animate-pulse" />
                  </li>
                  <li className="hover:text-sky-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <SiTailwindcss size={30} className="hover:animate-pulse" />
                  </li>
                </ul>
              </article>
              <article className="absolute right-4 bottom-4 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/Nextjs-API-Users"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <FaGithub className="text-white mr-2" size={30} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <MdOutlineComputer className="text-white " size={30} />
                </Link>
              </article>
            </div>
          </div>

          <div className="grid place-content-center justify-between   rounded-lg">
            <div className="relative flex max-w-lg p-2 bg-blue-950  border-2 border-blue-800 overflow-hidden rounded-lg flex-col">
              <article className="overflow-hidden w-[250px] h-[200px] ">
                <Image
                  width={7000}
                  height={1000}
                  src={CRUD}
                  alt="imagen"
                  className="w-[230px] mx-auto my-auto h-[190px] rounded-md hover:scale-105 transition-all"
                />
              </article>

              <article className="flex flex-col gap-2 my-auto mx-auto pb-12 text-center">
                <h1 className="text-xl font-bold lg:text-2xl text-white ">
                  <span className="mx-auto p-2 text-center">Notes-Crud</span>
                </h1>

                <ul className="flex flex-wrap gap-2 rounded-md text-white">
                  <li className="hover:text-blue-500 transition-all bg-blue-500/20 p-1.5 text-sm font-semibold">
                    <FaReact className="hover:animate-spin" size={30} />
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
              <article className="absolute right-4 bottom-4 flex flex-center text-white">
                <Link
                  href="https://github.com/sakitz/nextjs-prisma-crud"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <FaGithub className="text-white mr-2" size={30} />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:scale-125 transition-all"
                  alt="COde"
                >
                  <MdOutlineComputer className="text-white " size={30} />
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
