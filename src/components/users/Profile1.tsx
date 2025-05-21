import Image from "next/image";
import { useState } from "react";

export function Profile1({
  name,
  role,
  photo,
}: {
  name: string;
  role: string;
  photo: string;
}) {

  const [ showInfo, setShowInfo ] = useState(false)

  return (
    <div className="relative main-p-card min-w-[236px] h-auto max-h-[300px] flex flex-col justify-start items-center gap-6 hover:scale-105 transition duration-400 ease-in-out hover:cursor-pointer" onClick={() => setShowInfo(!showInfo)}>
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

      <div className={`${!showInfo ? 'hidden' : ''} absolute w-[300px] h-[400px] bg-white/80 rounded-3xl flex flex-col items-start justify-center p-3`}>
        <div>
          <span className="text-1xl font-bold">Nicolas ponce</span>
        </div>
        <div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            atque deleniti sed dolorem. Esse voluptatibus corporis expedita vel
            odit architecto accusamus delectus porro, enim provident minus
            dolores, suscipit, debitis quidem!
          </p>
        </div>
      </div>
    </div>
  );
}
