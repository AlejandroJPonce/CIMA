"use client";

import { useEffect } from "react";
import { Carousel } from "flowbite";
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
  InstanceOptions,
} from "flowbite";
import Image from "next/image";
import { carousel_1 } from "@/constants/carousels";

type carousel1_t = {
  id: string;
  title: string;
  description: string;
  action: string;
  img_ref: string;
};

export function Carrousel1() {
  useEffect(() => {
    const carouselElement = document.getElementById("carousel-example");

    if (!carouselElement) return;

    const items: CarouselItem[] = [
      { position: 0, el: document.getElementById("0")! },
      { position: 1, el: document.getElementById("1")! },
      { position: 2, el: document.getElementById("2")! },
      { position: 3, el: document.getElementById("3")! },
      { position: 4, el: document.getElementById("4")! },
    ];

    const options: CarouselOptions = {
      defaultPosition: 0,
      interval: 7000,
      indicators: {
        activeClasses: "bg-white dark:bg-white-800",
        inactiveClasses:
          "bg-white/50 dark:bg-white-800/50 hover:bg-white dark:hover:bg-white-800",
        items: [
          { position: 0, el: document.getElementById("carousel-indicator-0")! },
          { position: 1, el: document.getElementById("carousel-indicator-1")! },
          { position: 2, el: document.getElementById("carousel-indicator-2")! },
          { position: 3, el: document.getElementById("carousel-indicator-3")! },
          { position: 4, el: document.getElementById("carousel-indicator-4")! },
        ],
      },
    };

    const instanceOptions: InstanceOptions = {
      id: "carousel-example",
      override: true,
    };

    const carousel: CarouselInterface = new Carousel(
      carouselElement,
      items,
      options,
      instanceOptions
    );

    carousel.cycle();

    document
      .getElementById("data-carousel-prev")
      ?.addEventListener("click", () => carousel.prev());

    document
      .getElementById("data-carousel-next")
      ?.addEventListener("click", () => carousel.next());
  }, []);

  return (
    <div id="carousel-example" className="relative w-full bg-black">
      {/* Carousel wrapper */}
      <div className="relative h-120 md:h-130 2xl:h-150">
        {carousel_1.map((n: carousel1_t, i: number) => (
          <div
            key={i}
            id={n.id}
            className="w-full h-full flex items-center justify-center "
          >
            <Image
              src={n.img_ref}
              className="object-cover w-full h-full absolute brightness-60"
              alt={`Slide ${n.id}`}
              width={1000}
              height={500}
              priority
            />

            <div className=" md:w-[75%] 2xl:w-[1550px] md:max-w-[80%] h-full flex flex-col items-center md:items-start justify-center relative text-6xl">
              <div className="w-[70%] text-left md:text-left text-white">
                <h1 className="text-[20px] md:text-[40px] 2xl:text-[44px] 2xl:pr-10 font-bold mb-4 leading-8 md:leading-14">
                  {n.title}
                </h1>
              </div>
              <div className="w-[70%] md:w-[59%]">
                <p className="text-[17px] md:text-[20px] 2xl:text-[26px] text-white leading-6 md:leading-10">
                  {n.description}
                </p>
              </div>
              <div className="w-[70%] md:w-[60%] p-0">
                <button
                  type="button"
                  className="text-white bg-(--primary-purple) hover:bg-white focus:ring-4 focus:ring-purple-950 font-medium rounded-lg text-sm md:text-[17px] 2xl:text-[20px] px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-purple-800 hover:cursor-pointer hover:text-(--primary-purple)"
                >
                  {n.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {[0, 1, 2, 3, 4].map((n) => (
          <button
            key={n}
            type="button"
            id={`carousel-indicator-${n}`}
            className="w-3 h-3 rounded-full"
            aria-label={`Slide ${n}`}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        id="data-carousel-prev"
        className="absolute w-auto top-0 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none md:px-10"
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
        className="absolute w-auto top-0 end-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none md:px-10"
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
  );
}
