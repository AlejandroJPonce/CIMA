import Image from "next/image";

export function Navbar1() {
  return (
    <div className="flex flex-row justify-between items-center w-full h-auto min-h-[80px] bg-(--primary-purple) top-0 z-10 sticky px-12">
      {/* navbar logo */}
      <Image
        className="scale-200"
        src="/logo3.png"
        alt="Next.js logo"
        width={100}
        height={100} 
        quality={100}
        priority
      />

      {/* navbar menu */}
      <div className="flex flex-row gap-15 text-white items-center">
        <a href="#" className="text-lg font-normal">
          About Us
        </a>
        <a href="#" className="text-lg font-normal">
          Services
        </a>
        <a href="#" className="text-lg font-normal">
          Carriers
        </a>
        <a href="#" className="text-lg font-normal">
          Technology
        </a>
        <button className="text-white text-lg bg-(--primary-orange) hover:bg-white hover:text-(--primary-orange) hover:cursor-pointer font-bold py-3 px-6 rounded transition duration-200 ease-in-out hover:scale-105">
          Contact Us
        </button>
      </div>
    </div>
  );
}
