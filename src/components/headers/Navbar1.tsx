"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const router = useRouter()

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
          top: 675, // Scroll to 500 pixels from the top
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
          top: 1400, // Scroll to 500 pixels from the top
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
            top: 2200, // Scroll to 500 pixels from the top
            left: 0,
            behavior: "smooth", // Add smooth scrolling animation
          });
        }
      });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
        return window.removeEventListener("scroll", () => setScrolling(false));
      }
    });
  }, []);

  return (
    <div className="w-full h-auto flex justify-center items-center fixed z-50">
      <nav
        id="nav_box_id"
        className={`${
          scrolling ? "bg-(--primary-purple)" : "bg-transparent"
        } border-gray-200 max-h-[100px] w-[100%] transition-all duration-400 ease-in-out`}
      >
        <div className="max-w-screen flex flex-wrap items-center justify-between">
          {/* logo */}
          <a className="flex items-center hover:cursor-pointer px-5" onClick={() => router.push('/')}>
            <Image
              id="logo_id"
              src={`${scrolling ? "/logo2.PNG" : "/logo1.PNG"}`}
              alt="nav_Logo"
              width={100}
              height={100}
              className={`cale-150 pt-1`}
            />
          </a>
          {/* hamburger menu */}
          <button
            data-collapse-toggle="navbar-1"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-(--primary-purple) rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-white dark:text-(--primary-purple) dark:hover:bg-gray-700 dark:focus:ring-(--primary-purple) mr-4 z-100"
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
                stroke={`${scrolling && !isOpen ? "white" : "purple"}`}
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
              !isOpen
                ? "hidden"
                : "bg-white fixed top-0 flex flex-col items-center justify-between gap-20 pt-1 pb-12"
            } w-full h-[100%] md:block md:w-auto md:px-5`}
            id="navbar-1"
          >
            {isOpen && (
              <div className="">
                <Image
                  id="logo_id"
                  src="/logo1.PNG"
                  alt="Cima Logo"
                  width={100}
                  height={100}
                  className="scale-200"
                />
              </div>
            )}

            <ul
              className={`font-medium flex flex-col gap-6 items-center justify-center p-4 md:p-0 md:flex-row md:space-x-15 rtl:space-x-reverse md:mt-0 md:border-0 `}
            >
              <li>
                <a
                  id="start_id"
                  className={`${
                    !scrolling || isOpen ? "text-white" : ""
                  } block py-2 px-3 md:text-[17px] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer focus:text-(--primary-orange) `}
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  id="services_id"
                  className={`${
                    !scrolling || isOpen ? "text-white" : ""
                  } block py-2 px-3 md:text-[17px] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer focus:text-(--primary-orange) `}
                  aria-current="page"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  id="team_id"
                  className={`${
                    !scrolling || isOpen ? "text-white" : ""
                  } block py-2 px-3 md:text-[17px] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer focus:text-(--primary-orange) `}
                >
                  Equipo
                </a>
              </li>
              <li className="mt-2 md:mt-0">
                <button
                  id="contact_us_id"
                  type="button"
                  className="text-white bg-(--primary-orange) hover:bg-white hover:text-(--primary-purple) font-medium rounded-lg md:text-[18px] px-5 hover:cursor-pointer transition duration-400 ease-in-out p-2"
                >
                  Contáctanos
                </button>
              </li>
            </ul>

            {isOpen && (
              <div className="flex items-center justify-center w-full">
                <div>
                  <Image
                    className="w-10 h-10 object-contain hover:cursor-pointer invert"
                    src={"/icons/instagram.svg"}
                    width={100}
                    height={100}
                    quality={100}
                    alt="Next.js logo"
                    priority
                  />
                </div>
                <div>
                  <Image
                    className="w-10 h-10 object-contain hover:cursor-pointer invert"
                    src={"/icons/twitter.svg"}
                    width={100}
                    height={100}
                    quality={100}
                    alt="Next.js logo"
                    priority
                  />
                </div>
                <div>
                  <Image
                    className="w-10 h-10 object-contain hover:cursor-pointer invert"
                    src={"/icons/linkedin.svg"}
                    width={100}
                    height={100}
                    quality={100}
                    alt="Next.js logo"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
