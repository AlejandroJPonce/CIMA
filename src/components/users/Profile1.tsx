import Image from "next/image"

export function Profile1 ({name, role, photo}: {name: string, role: string, photo: string}) {
  return (
    <div className="min-w-[236px] h-auto max-h-[300px] flex flex-col justify-start items-center  p-4 gap-6 hover:scale-110 transition duration-400 ease-in-out">
      <div className="w-full items-center flex justify-center">
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
        <p className="font-bold text-2xl text-white">
          {name}
        </p>
        <p className="font-normal text-1xl text-white">
          {role}
        </p>
      </div>
    </div>
  )
}