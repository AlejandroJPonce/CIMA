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
        className="w-full h-170 flex items-center md:justify-start justify-center px-10 md:px-40"
        style={{
          backgroundImage: "url('/bg-3.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundClip: "border-box",
        }}
      >
        <div className="flex flex-col md:max-w-[850px] gap-7">
          {/* title */}
          <div>
            <span className="font-bold text-white text-3xl md:text-6xl">
              CIMA: Diseño, Tecnología y Espacios con proposito
            </span>
          </div>

          {/* description */}
          <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-15 w-[100%] h-auto">
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
