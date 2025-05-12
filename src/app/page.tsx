import { Header } from "@/components/Header";
import ImagenDiente from "@/assets/webp/image.webp";
import Image from "next/image";
import { ComponenteServicios } from "@/components/ComponenteImagenes";
import { Botones } from "@/components/Botones/Botones";
export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="relative flex flex-col items-center justify-center h-[300px] my-10">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#272863] z-20">
          Nuestros servicios
        </p>
        <Image loading="lazy" title="Imagen diente" src={ImagenDiente} alt="Imagen diente" className="absolute left-13 lg:left-88 w-14 md:w-20 lg:w-30 z-10 justify-items-start items-start" />
      </div>
      <ComponenteServicios></ComponenteServicios>
      <p className="flex m-auto items-center justify-center text-[#1462A7] text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full my-3"> “Atención profesional, cómoda y segura”</p>
      <div className="flex flex-col items-center justify-center my-30">
        <Botones
          text="AGENDA TU CITA"
          url="/AGENDA TU CITA"
        ></Botones>
      </div>
      <hr className="bg-[#3CADBD] w-full h-4 border-none" />


    </div>

  );
}
