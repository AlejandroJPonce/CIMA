import Image from "next/image";
import { useEffect, useState } from "react";

export function Profile1({
  name,
  role,
  description,
  photo,
}: {
  name: string;
  role: string;
  description: string;
  photo: string;
}) {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const card = document.getElementById(`${name}`);
    card?.addEventListener("mouseleave", () => {
      setShowInfo(false);
    });
  }, []);

  return (
    <div
      id={`${name}`}
      className="relative main-p-card min-w-[250px] h-auto max-h-[400px] flex flex-col justify-center items-center gap-6 hover:scale-105 transition duration-400 ease-in-out hover:cursor-pointer p-6"
      onClick={() => setShowInfo(!showInfo)}
    >
      <div>
        <div className=" p-card-image w-full items-center flex justify-center">
          <Image
            className="w-[200px] h-[200px] rounded-full object-center object-cover"
            src={photo}
            alt="Next.js logo"
            width={100}
            height={100}
            quality={100}
            priority
          />
        </div>
        <div className="text-center">
          <p className="font-bold text-2xl text-white">{name}</p>
          <p className="font-normal text-1xl text-white">{role}</p>
        </div>
      </div>
      <div
        className={`${
          !showInfo ? "hidden" : ""
        } absolute w-[300px] h-[350px] bg-white rounded-3xl flex flex-col items-start justify-between`}
      >
        <div className="relative w-full">
          <div className="absolute flex flex-col gap-1 p-6.5">
            <span className="text-1xl font-bold text-gray-700">{name}
              <br /> 
              <span className="text-sm text-(--primary-purple) font-normal">{role}</span>
            </span>
            <p className="text-gray-500">
              {description}
            </p>
          </div>
          <div className="absolute w-full max-h-[100px] mt-67">
            <Image
              src="/footerImage.png"
              alt="card_f logo"
              width={100}
              height={100}
              quality={100}
              priority
              className="w-100 object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
