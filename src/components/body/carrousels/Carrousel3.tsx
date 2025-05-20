import "../../../../public/styles/Carousel3.css";
import Card1 from "../cards/Card1";

export default function Carrousel3({ data }: { data: any }) {
  // Duplicamos los datos para que la animación sea infinita
  const carouselData = [...data, ...data];

  return (
    <div className="flex flex-col items-center justify-center h-60">
      <div className="carousel-container ">
        <div className="carousel-track">
          {carouselData.map((card: any, i: number) => (
            <Card1 key={i} img_ref={card.photo} />
          ))}
        </div>
      </div>
    </div>

    
  );
}
