"use client";

import Image from "next/image";
import { Instagram } from "@/components/media/instagram";
import { Linkedin } from "@/components/media/linkedin";
import { Twitter } from "@/components/media/twitter";

export function Footer1() {
  return (
    <footer
      className="w-full min-h-[600px] md:min-h-[690px] 2xl:min-h-[890px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/footerImage.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "Top",
        backgroundClip: "content-box",
      }}
    >
      <div className="flex flex-row items-start mt-70 md:mt-115 2xl:mt-150 border-blue justify-between w-screen h-auto md:px-15">
        <div className="w-full md:w-[70%] h-[100%] flex flex-col items-start pl-4 2xl:pl-10 justify-center min-w-[200px]">
          <Image
            className="w-20 h-20 scale-200 md:scale-350 object-contain ml-4 md:ml-12 "
            src={"/logo2.PNG"}
            width={100}
            height={100}
            quality={100}
            alt="foot_logo"
            priority
          />

          <span className="text-white font-bold text-2xl ml-2"> Síguenos </span>

          <div className="flex flex-row justify-start items-center">
            <div
              onClick={() => window.open("https://twitter.com/CimaColombia")}
            >
              <Image
                className="w-10 h-10 object-contain hover:cursor-pointer"
                src={"/icons/instagram.svg"}
                width={100}
                height={100}
                quality={100}
                alt="Next.js logo"
                priority
              />
            </div>
            <div
              onClick={() => window.open("https://twitter.com/CimaColombia")}
            >
              <Image
                className="w-10 h-10 object-contain hover:cursor-pointer"
                src={"/icons/linkedin.svg"}
                width={100}
                height={100}
                quality={100}
                alt="Next.js logo"
                priority
              />
            </div>
            <div
              onClick={() => window.open("https://twitter.com/CimaColombia")}
            >
              <Image
                className="w-10 h-10 object-contain hover:cursor-pointer"
                src={"/icons/twitter.svg"}
                width={100}
                height={100}
                quality={100}
                alt="Next.js logo"
                priority
              />
            </div>
          </div>
        </div>
        <div className="text-white text-1xl text-left mt-5 md:w-[30%] md:px-20">
          <p>sales@cima.com</p>
          <p>+57 (322) 532-4904</p>
          <p> Carrera 30 # 1b - 215, Barranquilla, Atlantico</p>
        </div>
      </div>
    </footer>
  );
}
