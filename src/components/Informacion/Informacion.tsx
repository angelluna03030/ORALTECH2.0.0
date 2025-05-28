import Image from "next/image";
import { InformacionData } from "./index";
import Diente from "@/assets/webp/image.webp";
import CountUp from "react-countup";

export const Informacion = () => {
  return (
    <>
      <section
        className="flex flex-col md:flex-row items-center justify-around w-full "
        style={{
          background:
            "linear-gradient(90deg,rgba(21, 108, 175, 1) 0%, rgba(70, 190, 240, 1) 50%)",
        }}
      >
        {InformacionData.map((item, index) => (
          <div
            key={index}
            className="flex py-8 flex-col items-center mx-2 md:mx-4 text-center justify-center  md:my-10"
          >
            <Image
            
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              sizes="(max-width: 768px) 80px, 150px"
              className="w-14 md:w-24 lg:w-32 h-auto mb-5"
              loading="lazy"
              decoding="async"
              title={item.titulo}
            />
            <div className="relative">
            
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-1 relative z-10">
                +<CountUp end={item.cantidad} duration={5} />
              </h2>
              <p className="text-white w-full m-auto text-sm md:text-base font-bold mt-2 relative z-10 justify-center text-center ">  
                {item.descripcion}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};