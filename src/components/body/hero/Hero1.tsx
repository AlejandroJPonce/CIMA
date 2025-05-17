export default function Hero1() {
  // function showLearnMoreSection() {
  //   if (showLearnMore) {
  //     return (
  //       <div className="learn-more-section">
  //       </div>
  //     );
  //   }
  // }

  return (
    <>
      <div
        className="w-full h-130 flex items-center justify-start md:px-40"
        style={{
          backgroundImage: "url('/bg-3.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundClip: "border-box",
        }}
      >
        <div className=" md:max-w-[850px] flex flex-col gap-5">
          {/* title */}
          <div className="">
            <span className="font-bold text-white text-6xl">
              CIMA: Diseño, Tecnología y Espacios con proposito
            </span>
          </div>

          {/* description */}
          <div className=" w-[100%] h-auto flex items-center justify-start gap-5 py-3">
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="md:min-w-[140px] text-white bg-(--primary-orange) hover:bg-purple-700 font-medium rounded-lg text-sm p-3 md:text-[20px] hover:cursor-pointer"
              >
                Contáctanos
              </button>
            </div>

            <div className="flex items-center justify-center md:max-w-[700px]">
              <span className="text-xl text-white">
                Transformamos ideas en experiencias visuales y digitales únicas.
                Branding, desarrollo web, animación y diseño de espacios, todo
                en un solo lugar.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
