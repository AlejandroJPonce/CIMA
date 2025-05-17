"use client";

import { log } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("services");

  useEffect(() => {
    document.getElementById("logo_id")?.addEventListener("click", function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    document.getElementById("start_id")?.addEventListener("click", function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    document
      .getElementById("services_id")
      ?.addEventListener("click", function () {
        window.scroll({
          top: 520, // Scroll to 500 pixels from the top
          left: 0,
          behavior: "smooth", // Add smooth scrolling animation
        });
      });

    document.getElementById("team_id")?.addEventListener("click", function () {
      if (window.innerWidth < 800) {
        window.scroll({
          top: 2300, // Scroll to 500 pixels from the top
          left: 0,
          behavior: "smooth", // Add smooth scrolling animation
        });
      } else {
        window.scroll({
          top: 2680, // Scroll to 500 pixels from the top
          left: 0,
          behavior: "smooth", // Add smooth scrolling animation
        });
      }
    });

    document
      .getElementById("contact_us_id")
      ?.addEventListener("click", function () {
        if (window.innerWidth < 800) {
          window.scroll({
            top: 2900, // Scroll to 500 pixels from the top
            left: 0,
            behavior: "smooth", // Add smooth scrolling animation
          });
        } else {
          window.scroll({
            top: 3220, // Scroll to 500 pixels from the top
            left: 0,
            behavior: "smooth", // Add smooth scrolling animation
          });
        }
      });

    document
      .getElementById("socials_id")
      ?.addEventListener("click", function () {
        window.scroll({
          top: 3800,
          left: 0,
          behavior: "smooth",
        });
      });
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center sticky top-0 z-50">
      <nav className="bg-(--primary-purple) border-gray-200 max-h-[100px] w-full">
        <div className="max-w-screen flex flex-wrap items-center justify-between">
          {/* logo */}
          <a className="flex items-center space-x-3 rtl:space-x-reverse max-h-[80px] hover:cursor-pointer">
            <Image
              id="logo_id"
              src="/logo2.png"
              alt="Flowbite Logo"
              width={100}
              height={100}
              className="scale-150 pl-2 pt-1"
            />
          </a>
          {/* hamburger menu */}
          <button
            data-collapse-toggle="navbar-1"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-8"
            aria-controls="navbar-1"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden={!isOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* menu items */}
          <div
            className={`${
              !isOpen ? "hidden" : ""
            } w-full md:block md:w-auto md:mr-5 bg-(--primary-purple)`}
            id="navbar-1"
          >
            <ul className="font-medium flex flex-col items-center justify-center p-4 md:p-0 md:flex-row md:space-x-15 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  onClick={() => setActiveNav("start")}
                  id="start_id"
                  className="block py-2 px-3 md:text-[17px] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer focus:text-(--primary-orange)"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  onClick={() => setActiveNav("services")}
                  id="services_id"
                  className="block py-2 px-3 md:text-[17px] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer focus:text-(--primary-orange)"
                  aria-current="page"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  onClick={() => setActiveNav("team")}
                  id="team_id"
                  className="block py-2 px-3 md:text-[17px] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer"
                >
                  Equipo
                </a>
              </li>
              <li className="mt-2">
                <button
                  onClick={() => setActiveNav("contact")}
                  id="contact_us_id"
                  type="button"
                  className="text-white bg-(--primary-orange) hover:bg-purple-700 font-medium rounded-lg text-sm md:text-[18px] px-5 py-2.5 me-2 mb-2 hover:cursor-pointer"
                >
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
