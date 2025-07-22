"use client";
import Image from "next/image";
import { servicios } from "./index";
import { useState } from "react";
import placeholder from "../../assets/webp/placeholder.webp";
import { GaleriaImagenes } from "../GaleriaSwiper/GaleriaMovimiento";
import ImageneServicios from "@/assets/webp/Recurso 1@4x-8.webp";
export const ComponenteServicios = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  // Función para cerrar el modal
  const closeModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setHoveredService(null);
  };
  // Función para prevenir que se cierre al hacer clic en el contenido del modal
  const handleModalContentClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className="text-center  px-4 w-full max-w-3xl mx-auto">
        <div className="flex justify-center w-full my-5">
          <Image
            src={ImageneServicios}
            alt="Imagen de Servicios"
            className="rounded-lg w-full h-auto object-cover max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            priority
          />
        </div>
      </div>
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
        {servicios.map((service) => (
          <div
            key={service.id}
            className="group relative  rounded-2xl overflow-hidden ease-out cursor-pointer"
            onClick={() => setHoveredService(service.id ?? null)}
          >
            <figure
              key={service.id}
              className="relative w-full max-w-sm overflow-hidden group cursor-pointer m-auto flex flex-col items-center justify-center"
            >
              <div className="aspect-square relative rounded-4xl overflow-hidden w-full h-full">
                <Image
                  src={service.src || placeholder}
                  alt={service.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  title={service.titulo}
                  onError={(e) => {
                    e.currentTarget.src = placeholder.src;
                  }}
                  loading="lazy"
                />
              </div>
            </figure>
            {hoveredService === service.id && (
              // Modal mejorado
              <div
                key={service.id ? service.id : ""}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 overflow-y-auto"
              >
                <div
                  className="relative w-full max-w-7xl min-h-[400px] max-h-[95vh] flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8 my-auto"
                  onClick={handleModalContentClick}
                >
                  {/* Contenedor de la galería */}
                  <div className="relative w-full lg:w-1/2 h-80 md:h-96 lg:min-h-[400px] lg:max-h-[80vh] flex items-center justify-center flex-shrink-0">
                    <GaleriaImagenes imagenes={service.imagenes || []} />
                  </div>

                  {/* Contenido a la derecha con flex layout */}
                  <div className="w-full lg:w-1/2 text-white flex flex-col justify-between animate-in slide-in-from-right-8 duration-700 delay-200 px-4 lg:px-8 min-h-[400px] lg:min-h-[400px] lg:max-h-[80vh]">
                    {/* Contenido superior (título y descripción) */}
                    <div className="flex-grow flex flex-col justify-center py-4">
                      {/* Título */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300 leading-tight">
                        {service.titulo}
                      </h3>

                      {/* Descripción con scroll si es necesario */}
                      <div className="flex-grow mb-6 md:mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-400 overflow-y-auto">
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light leading-relaxed text-gray-200 break-words hyphens-auto">
                          {service.descripcion}
                        </p>
                      </div>
                    </div>

                    {/* Botones de acción - siempre en la parte inferior */}
                    <div className="flex-shrink-0 flex font-semibold text-sm md:text-base flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-500 pt-4 border-t border-gray-700/30">
                      <a
                        href="https://wa.me/573224130747?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button
                          key={`cucuta-${service.id}`}
                          onClick={closeModal}
                          className="w-full bg-[#28295F] cursor-pointer text-white hover:bg-[#1f2052] px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                        >
                          Cita en Cúcuta
                        </button>
                      </a>

                      <a
                        href="https://wa.me/573016184618?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button
                          key={`medellin-${service.id}`}
                          onClick={closeModal}
                          className="w-full bg-[#28295F] cursor-pointer text-white hover:bg-[#1f2052] px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                        >
                          Cita en Medellín
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Botón cerrar */}
                  <button
                    key={`close-${service.id}`}
                    className="absolute cursor-pointer z-10 top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-300 animate-in zoom-in-95 delay-600 hover:scale-110"
                    onClick={() => setHoveredService(null)}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};
