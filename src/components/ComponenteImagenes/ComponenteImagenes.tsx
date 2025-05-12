"use client";
import Image from "next/image";
import { servicios } from "./index";

export const ComponenteServicios = () => {

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-10 px-4 max-w-7xl mx-auto"
      style={{
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {servicios.map((servicio, index) => (
        <figure
          key={index}
          className="relative w-full max-w-sm overflow-hidden group cursor-pointer m-auto flex flex-col items-center justify-center"
        >
          <div className="aspect-square relative rounded-4xl overflow-hidden w-full h-full">
            <Image
              src={servicio.src}
              alt={servicio.alt}
              loading="lazy"
              decoding="async"
              title={servicio.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradiente superpuesto para mejorar la legibilidad del texto */}
          </div>
        </figure>
      ))}
    </section>
  );
};
