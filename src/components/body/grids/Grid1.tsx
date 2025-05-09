import Image from "next/image";

export function Grid1({ name, description, image }: any) {
  return (
    <div className="w-full h-auto flex flex-col justify-around items-center">
      <div className="grid grid-cols-2 w-full h-full">
        <div className=" h-120 w-[100%] flex flex-col items-start justify-center px-12">
          {/* Section Title */}
          <div className="text-[32px] mb-5">{name}</div>
          {/* Section Descriptions */}
          <div className="text-[20px]">{description}</div>
          
        </div>
        <div className=" h-120 w-[100%] items-center justify-center flex align-middle">
          <Image
            className="dark w-[80%] h-[80%] object-contain"
            src={image}
            width={100}
            height={100}
            quality={100}
            alt="Next.js logo"
            priority
          />
        </div>
      </div>
    </div>
  );
}
