import Image from "next/image";
import { Instagram } from "@/components/media/instagram";
import { Linkedin } from "@/components/media/linkedin";
import { Twitter } from "@/components/media/twitter";

export function Footer1() {
  return (
    <footer className="w-full h-auto flex flex-col justify-around items-center relative">
      <img className="relative" src="/footerImage.png" alt="" />
      <div className="absolute w-full flex flex-row justify-between items-center mt-100 px-17">
        <div>
          <Image
            className="dark w-50 h-20 object-contain scale-300 pt-2"
            src={"/logo2.png"}
            width={100}
            height={100}
            quality={100}
            alt="Next.js logo"
            priority
          />

          <span className="text-white font-bold text-2xl ml-4"> Síguenos </span>

          <div className="flex flex-row justify-start items-center hover:cursor-pointer p-0 mx-1 gap-2">
            <div>
              <Instagram />
            </div>
            <div>
              <Linkedin />
            </div>
            <div>
              <Twitter />
            </div>
          </div>
        </div>

        <div className="max-w-[305px] px-12 text-white text-1xl text-left">
          <p>sales@cima.com</p>
          <p>+57 (322) 532-4904</p>
          <p> Carrera 30 # 1b - 215, Barranquilla, Atlantico</p>
        </div>
      </div>
    </footer>
  );
}
