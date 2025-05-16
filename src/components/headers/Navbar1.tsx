"use client";

import { log } from "console";
import Image from "next/image";
import { useState } from "react";

export function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-20 flex flex-col justify-center items-center sticky top-0 z-50">
      <nav className="bg-(--primary-purple) border-gray-200 max-h-[80px] w-full">
        <div className="max-w-screen flex flex-wrap items-center justify-between">
          {/* logo */}
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse max-h-[80px]"
          >
            <Image
              src="/squareLogo.png"
              alt="Flowbite Logo"
              width={100}
              height={100}
              className="scale-170"
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
            <ul className="font-medium flex flex-col items-center justify-center p-4 md:p-0 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-(--primary-orange) md:p-0 dark:text-white md:dark:text-(--primary-orange)"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-(--primary-orange) md:p-0 dark:text-white md:dark:hover:text-(--primary-orange) dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li className="mt-2">
                <button
                  type="button"
                  className="text-white bg-(--primary-orange) hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-purple-800 hover:cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
