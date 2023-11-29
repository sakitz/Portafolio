"use client";
import { React} from "react";
import Image from "next/image";

const Aboutme = () => {

  return (
    <div
    style={{ scrollBehavior: "smooth"}}
      id="Sobre mi"
      className="xl:pt-20 mx-10"
    
    >
      <section
        className="max-w-screen-lg sm:mx-auto 
                   grid grid-cols-1 md:grid-cols-2 gap-4
                   place-content-center items-center px-4 justify-center"
      >
        <h1 className="font-bold text-white capitalize text-3xl md:text-5xl col-span-1 md:col-span-2 m-auto mb-4">
          Sobre mi <span className="animate-pulse">👾👾👾</span>
        </h1>
        <article>
          <p className="text-white row-span-4">
            <span className="font-semibold text-xl text-[#8e44ad] ">
              Prem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            </span>
            dolores ad ut recusandae omnis velit ipsa consectetur unde, officia,
            asperiores suscipit perspiciatis distinctio quam quo facilis? Ad
            dolor vero deserunt. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Pariatur dolores ad ut recusandae omnis velit ipsa
            consectetur unde, officia, asperiores suscipit perspiciatis
            distinctio quam quo facilis? Ad dolor vero deserunt. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Pariatur
            <p className="mt-2 text-[#8e44ad] font-semibold">
              Ahora que me conces tanto laboral como personalmente me puede
              contactar por los siguentes medios
            </p>
          </p>
          <div className="flex pt-2 justify-center items-center flex-col gap-4">
          </div>
        </article>
        <article>
          <Image
            width={500}
            height={500}
            alt="imagen"
            src="/logooo.png"
            className="grid-cols-2"
          />
        </article>
      </section>
    </div>
  );
};

export default Aboutme;
