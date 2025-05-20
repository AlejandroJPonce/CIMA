"use client";

import { useState } from "react";
import "../../../../public/styles/ServiceCard.css";
import Modal1 from "@/components/modals/Modal1";
import {type serviceCardProps } from "@/types/ServiceCards";



export default function Card2(props: serviceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal1 open={isOpen} elements={props} handleClose={() => setIsOpen(false)} />

      <div className="p-5 max-w-[350px] rounded-3xl bg-white border-[1px] border-gray-100">
        <div className="mb-5 max-w-[40px] max-h-[40px]">
          <div className="flex items-center justify-center rounded-[7px] bg-[#343434] text-white p-[7px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
        </div>
        <div>
          <strong className="text-[20px]">{props.title}</strong>
        </div>
        <div>
          <span className="text-[14px] text-gray-500 line-clamp-5">{props.description}</span>
        </div>
        <div className="w-full flex items-center justify-end mt-5">
          <a
            className="text-(--primary-orange) underline hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {" "}
            Ver más{" "}
          </a>
        </div>
      </div>
    </>
  );
}
