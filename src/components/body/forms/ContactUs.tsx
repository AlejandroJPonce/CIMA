export function ContactUs() {
  return (
    <div className="w-full h-120 flex flex-col justify-center items-center gap-7">
      <div>
        <span className="font-normal text-4xl">
          Contáctanos a nuestra línea directa de{" "}
          <span className="text-green-600 font-black text-5xl">WhatsApp</span>
        </span>
      </div>
      <button className="flex flex-row items-center justify-center gap-3 text-white text-3xl font-normal bg-green-600 hover:bg-(--primary-orange) hover:text-white hover:cursor-pointer py-5 px-10 rounded-full transition duration-200 ease-in-out hover:scale-105">
        Contactar
        <img className="w-8 h-8" src="/icons/whatsapp.svg" alt="whatsapp" />
      </button>
    </div>
  );
}
