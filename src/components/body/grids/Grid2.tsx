import Image from "next/image";

export function Grid2({ name, description, image }: any) {
  return (
    <div className="flex flex-col justify-around items-center w-full h-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[420px] md:h-full">
        <div className="order-2 py-4 md:order-2 h-auto md:h-120 w-[100%] flex flex-col items-start justify-center px-12">
          {/* Section Title */}
          <div className="text-[22px] md:text-[32px] 2xl:text-[45px] mb-5">{name}</div>
          {/* Section Descriptions */}
          <div className="invisible md:visible text-[17px] md:text-[20px] 2xl:text-[28px]">{description}</div>
          
        </div>
        <div className="order-1 md:order-1 h-80 md:h-120 w-[100%] items-center justify-center flex align-middle">
          <Image
            className="dark w-[100%] h-[100%] object-contain"
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
