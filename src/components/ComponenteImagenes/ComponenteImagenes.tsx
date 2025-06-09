"use client";
import Image from "next/image";
import { servicios } from "./index";
import { useState } from "react";
import placeholder from "../../assets/webp/placeholder.webp";
export const ComponenteServicios = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
    // Función para cerrar el modal
  const closeModal = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setHoveredService(null);
  };

  // Función para prevenir que se cierre al hacer clic en el contenido del modal
  const handleModalContentClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="text-center mb-28 px-4 w-full max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#28295F] mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explora nuestra variedad de tratamientos dentales, cuidadosamente
          diseñados con tecnología de vanguardia y un enfoque en la calidad para
          brindarte la mejor atención y cuidar tu sonrisa.
        </p>
      </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-10 px-4 max-w-7xl mx-auto"
        
        style={{
            justifyContent:"space-evenly",
            flexDirection:"row",
            alignItems:"center",
            display:"flex",
            flexWrap:"wrap",
            
        }}
        >


              {servicios.map((service) => (
                <div
                  key={service.id}
                  className="group relative  rounded-2xl overflow-hidden shadow-sm hover:shadow-none transition-all duration-700 ease-out cursor-pointer"
                
                     onClick={() => setHoveredService(service.id)}
                >
                
              <figure key={service.id} className="relative w-full max-w-sm overflow-hidden group cursor-pointer m-auto flex flex-col items-center justify-center">
                    <div className="aspect-square relative rounded-4xl overflow-hidden w-full h-full">
                        <Image
                            src={service.src}
                            alt={service.alt}
                            loading="lazy"
                            decoding="async"
                            title={service.alt}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradiente superpuesto para mejorar la legibilidad del texto */}
                       
                    </div>
                </figure>

       
                  {hoveredService === service.id && (
                    <div
                      key={service.id ? service.id : ""}
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                    >
                      <div className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
                        onClick={handleModalContentClick} // Prevenir cierre al hacer clic en el contenido
                      >
                        {/* Imagen a la izquierda */}
                        <div className="relative w-full lg:w-1/2 h-64 md:h-80 lg:h-[70vh] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-left-8 duration-700 bg-white">
                          <Image
                            src={service.src}
                            alt={service.alt}
                            loading="lazy"
                            decoding="async"
                            title={service.alt}
                            width={500}
                            height={500}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Contenido a la derecha */}
                        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center animate-in slide-in-from-right-8 duration-700 delay-200">
                          <h3 className="text-3xl md:text-4xl lg:text-5xl pb-20 xl:text-6xl font-light mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                            {service.titulo}
                          </h3>

                          <p className="text-base md:text-lg  lg:text-xl xl:text-2xl font-light leading-relaxed mb-6 md:mb-8 text-gray-200 animate-in slide-in-from-bottom-4 duration-700 delay-400">
                            {service.descripcion}
                          </p>

                          {/* Botones de acción */}
                          <div className="flex font-semibold text-base md:text-lg flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                            <button 
                               key={`close-${service.id}`}

                            onClick={closeModal}
                            className="bg-[#28295F] cursor-pointer text-white hover:bg-[#28295F] px-6 md:px-8 py-3 md:py-4 rounded-lg  transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                              Agendar Cita
                            </button>
                            <button className="bg-white/20 cursor-pointer backdrop-blur-sm hover:bg-white/30 px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 border border-[#46BEF0] text-[#46BEF0] ">
                              Más información
                            </button>
                          </div>
                        </div>

                        {/* Botón cerrar */}
                        <button

  key={service.id ? service.id : ""}
                          className="absolute cursor-pointer top-4 md:top-8 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 animate-in zoom-in-95  delay-600"
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
