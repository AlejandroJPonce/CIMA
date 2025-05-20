import Image from "next/image";

export function ContactUs() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-25 gap-7">
      <div className="w-full text-center p-2">
        <span className="font-light text-3xl md:text-4xl">
          Contáctanos a nuestra línea directa de{" "}
          <span className="text-green-600 font-black text-5xl">WhatsApp</span>
        </span>
      </div>
      <button className="flex flex-row items-center justify-center gap-3 text-white text-2xl font-bold bg-green-600 hover:bg-(--primary-orange) hover:text-white hover:cursor-pointer py-4 px-6 rounded-full transition duration-400 ease-in-out hover:scale-105">
        Contactar
        <Image
          className="w-[30px] h-[30px] rounded-full object-center object-cover"
          src='/icons/whatsapp.svg'
          alt="contact_logo"
          width={100}
          height={100}
          quality={100}
          priority
        />
      </button>
    </div>
  );
}
