import Image from "next/image";
import { Ubicaciones } from "./index";
import Link from "next/link";
import { Star } from "lucide-react";
import ImagenesUbicacion from "@/assets/webp/Recurso 3@4x-8.webp";

export const Ubicacion = () => {
  return (
    <>
      <div className="text-center mb-44">
        <div className="inline-flex items-center space-x-2 my-5 bg-blue-50 text-[#28295F] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
          <Star className="w-4 h-4 fill-current text-[#28295F] " />
          Ubicaciones Premium
        </div>
        <div className="flex justify-center w-full my-10">
          <Image
            src={ImagenesUbicacion}
            alt="Imagen de Ubicación"
            className="object-contain w-64 sm:w-72 md:w-80 lg:w-96 max-w-xs sm:max-w-sm md:max-w-md "
            priority
          />
        </div>
        <p className="text-slate-600 w-full mx-auto text-lg leading-tight pb-10">
          Dos espacios diseñados con la más alta tecnología y confort para
          brindarte una experiencia odontológica excepcional en cada visita.
        </p>
      </div>
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4 max-w-7xl mx-auto"
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Ubicaciones.map((servicio, index) => (
          <figure
            key={index}
            className="relative w-full max-w-sm overflow-hidden group cursor-pointer m-auto flex flex-col items-center justify-center"
          >
            <div className="aspect-square relative rounded-4xl overflow-hidden w-full h-full">
              <Link href={servicio.direccion_google_maps ?? ""}>
                <Image
                  src={servicio.src}
                  alt={servicio.alt}
                  loading="lazy"
                  decoding="async"
                  title={servicio.alt}
                  width={500}
                  height={500}
                  className="w-full h-full mr- object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              {/* Gradiente superpuesto para mejorar la legibilidad del texto */}
            </div>
          </figure>
        ))}
      </section>
    </>
  );
};