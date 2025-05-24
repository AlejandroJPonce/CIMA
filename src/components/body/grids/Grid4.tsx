import "../../../../public/styles/MainServices.css";
import Card2 from "../cards/Card2";
import { services } from "@/constants/services";

export default function Grid4() {
  return (
    <>
      <div className="flex items-center justify-center py-10 md:p-10">
        <div className="rounded-[20px] flex flex-col gap-7 items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center align-middle">
            <strong className="text-[40px] text-gray-800"> Servicios </strong>
            <p className="max-w-[400px] text-gray-500 text-[20px]">
              {" "}
              Estos son los servicios de mayor relevancia a los que tendras
              acceso en nuestra App{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            {services.map((el, index) => (
              <Card2
                key={index}
                title={el.title}
                description={el.description} 
                options={el.options}   
                leader_experience={el.leader_experience}           
                leader_name={el.leader_name}      
                leader_occupations={el.leader_occupations}     
                profile_photo={el.profile_photo}     
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
