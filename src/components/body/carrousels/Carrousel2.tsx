"use client";

import { Profile1 } from "@/components/users/Profile1";
import { useEffect } from "react";

type profile_t = {
  name: string;
  role: string;
  photo: string;
  profile_desc: string;
};

export function Carrousel2({ data }: { data: profile_t[] }) {
  useEffect(() => {
    const slider = document.getElementById("slider-section");
    let scrollAm = 0;

    document
      .getElementById("data-carousel-next")
      ?.addEventListener("click", function () {
        if (slider) {
          slider.scrollTo({
            top: 0,
            left: Math.max((scrollAm += 0), 2900),
            behavior: "smooth",
          });
          // Adjust the value as needed
        }
      });

    document
      .getElementById("data-carousel-prev")
      ?.addEventListener("click", function () {
        if (slider) {
          slider.scrollTo({
            top: 0,
            left: Math.min((scrollAm -= 0), 2900),
            behavior: "smooth",
          }); // Adjust the value as needed
        }
      });
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full bg-(--primary-purple) py-10">
        <div className="w-full text-center py-8">
          <span className="font-bold text-white md:text-5xl">
            Conoce a Nuestro Equipo
          </span>
        </div>

        <div
          id="slider-section"
          className="w-full h-auto pl-20 pr-20 py-10 md:pl-42 md:pr-42 gap-43.5 flex flex-row justify-start items-center overflow-x-auto overflow-y-hidden"
        >
          {data.map((profile: profile_t, index: number) => (
            <Profile1
              key={index}
              name={profile.name}
              role={profile.role}
              photo={profile.photo}
              description={profile.profile_desc}
            />
          ))}
        </div>
        <div className="w-full h-auto text-center py-8">
          <span className=" text-white md:text-xl">
            <span className="text-white hover:cursor-pointer">
              ¡Haz click en el perfil de nuestros colaboradores y accede a su
              información!
            </span>
          </span>
        </div>

        {/* Controls */}
        <button
          type="button"
          id="data-carousel-prev"
          className="absolute bg-(--primary-purple) w-auto top-0 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none md:px-10"
        >
          <svg
            className="w-9 h-9 text-white dark:text-white rtl:rotate-180 hover:scale-110 transition duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
        <button
          type="button"
          id="data-carousel-next"
          className="absolute bg-(--primary-purple) w-auto top-0 end-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none md:px-10"
        >
          <svg
            className="w-9 h-9 text-white dark:text-white rtl:rotate-180 hover:scale-110 transition duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
