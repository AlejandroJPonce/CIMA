import "../../../../public/styles/MainServices.css";
import Card2 from "../cards/Card2";

export default function Grid4() {
  return (
    <>
      <div className="flex items-center justify-center py-10 md:p-10">
        <div className="rounded-[20px] flex flex-col gap-7 items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center align-middle">
            <strong className="text-[40px]"> Servicios </strong>
            <p className="max-w-[400px] text-gray-400 text-[20px]">
              {" "}
              Estos son los servicios de mayor relevancia a los que tendras
              acceso en nuestra App{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <Card2
              title="Diseño Grafico"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.,"
            />
            <Card2
              title="Desarrollo Web"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.,"
            />
            <Card2
              title="Animación"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
            />
            <Card2
              title="Diseño de espacios"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
            />
          </div>
        </div>
      </div>
    </>
  );
}
