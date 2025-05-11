import { Header } from "@/components/Header";
import ImagenDiente from "@/assets/webp/image.webp";
import Image from "next/image";
import { ComponenteServicios } from "@/components/ComponenteImagenes";
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
    </div>
  );
}
