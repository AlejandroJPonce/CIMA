"use client";

import { Profile1 } from "@/components/users/Profile1";
import { useEffect } from "react";

export function Carrousel2({ data }: { data: any }) {
  useEffect(() => {
    const slider = document.getElementById("slider-section");
    let scrollAm = 0

    document
      .getElementById("data-carousel-next")
      ?.addEventListener("click", function () {
        if (slider) {
          slider.scrollTo({
            top: 0,
            left: Math.max((scrollAm += 0), 1600),
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
            left: Math.min((scrollAm -= 0), 1600),
            behavior: "smooth",
          });// Adjust the value as needed
        }
      });
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-10 w-full bg-(--primary-purple) py-15">
        <div className="w-full h-100 text-center">
          <span className="font-bold text-white md:text-5xl">
            Conoce a Nuestro Equipo
          </span>
        </div>

        <div
          id="slider-section"
          className="absolute w-full h-auto flex flex-row justify-start items-center overflow-x-auto overflow-y-hidden gap-50 pl-42 pr-42"
        >
          {data.map((profile: any, index: number) => (
            <Profile1
              key={index}
              name={profile.name}
              role={profile.role}
              photo={profile.photo}
            />
          ))}
        </div>
        <div className="w-full h-auto text-center">
          <span className=" text-white md:text-xl">
            <span className="text-(--primary-orange) underline">
              Conoce más
            </span>{" "}
            sobre nuestros roles
          </span>
        </div>

        {/* Controls */}
        <button
          type="button"
          id="data-carousel-prev"
          className="absolute bg-(--primary-purple) w-auto top-0 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none md:px-10"
        >
          <svg
            className="w-9 h-9 text-white dark:text-white rtl:rotate-180"
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
            className="w-9 h-9 text-white dark:text-white rtl:rotate-180"
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
