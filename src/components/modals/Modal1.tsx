"use client";

import { useEffect, useState } from "react";

type op_t = {
  value: string,
}

type options_t = {
  title: string
  description: op_t[]
}

interface elements  {
  leader_name: string,
  leader_occupations: string,
  leader_experience: string,
  profile_photo: string,
  title: string,
  description:string,
  options: options_t[],

}

export default function Modal1({
  open,
  elements,
  handleClose,
}: {
  open: boolean;
  elements: elements;
  handleClose: () => void;
}) {
  // No need for useEffect here

  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (open) {
      setStatus(true); // Abre el modal solo si 'open' es verdadero
    } else {
      setStatus(false); // Cierra el modal si 'open' es falso
    }
  }, [open]);

  function handleCloseModal() {
    handleClose();
    setStatus(false);
  }

  if (!status) return null;

  return (
    <div className="fixed top-0 left-0 bg-black/50 w-full h-screen flex items-center justify-center z-200 p-5 md:p-30">
      <div className="bg-white w-full h-auto max-h-[650px] md:max-h-[700px] flex flex-col items-start justify-start rounded-2xl overflow-auto">
        {/* Heaeder */}
        <div
          id="modal-header"
          className=" border-b-1 border-gray-300 w-full flex flex-row items-center justify-between bg-white p-7"
        >
          <div className="flex gap-3">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20.3873 7.1575L11.9999 12L3.60913 7.14978"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 12V21"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M8.5 4.5L16 9"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <span className="md:text-[20px] font-medium text-gray-800">{elements.title}</span>
          </div>
          <div
            className="w-5 h-5 hover:cursor-pointer"
            onClick={handleCloseModal}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="black"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>

        {/* body */}
        <div
          id="modal-body"
          className="w-full h-full flex flex-col items-center justify-center gap-8 p-7 md:px-15 py-9"
        >
          {/* description */}
          <div className="w-full flex flex-row items-center justify-center gap-7">
            <div className="w-full text-justify text-gray-700">
              <p>{elements.description}</p>
            </div>
          </div>

          {/* Options */}

          <div className="flex flex-col md:flex-row gap-3 w-full">
            {elements.options.map((option: options_t, index: number) => (
              <div key={index} className="border-1 border-gray-300 rounded-xl p-5 hover:border-(--primary-purple) hover:cursor-pointer hover:scale-102 transition duration-400 ease-in-out w-full md:w-1/3 bg-white ">
                <div
                  className="flex items-center justify-between gap-2 w-full"
                >
                  <span className="text-gray-800">{option.title}</span>
                  <div className="w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 20H6C4.89543 20 4 19.1046 4 18V8H20V18C20 19.1046 19.1046 20 18 20H17"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M6 4H18L20 8H4L6 4Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 14L12 20M12 20L14.5 17.5M12 20L9.5 17.5"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
                <hr className="my-4 w-full" />
                <div className="flex flex-col gap-4 h-[100%]">
                  {option.description.map((item: op_t, index: number) => (
                    <div key={index} className="flex flex-row items-center justify-start align-middle w-full gap-4">
                      <div className="w-6 h-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M11 15L13.6997 12.3003V12.3003C13.8656 12.1344 13.8656 11.8656 13.6997 11.6997V11.6997L11 9"
                              stroke="#323232"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                      <span className="font-normal text-1xl text-gray-700">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* description footer */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-7 md:mt-7">
            <div className="w-full md:w-2/3 text-left">
              <p>{elements.description}</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <button
                id="contact_us_id"
                type="button"
                className="text-white bg-(--primary-orange) hover:bg-(--primary-purple) font-medium rounded-lg md:text-[18px] px-5 hover:cursor-pointer transition duration-400 ease-in-out p-2"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
