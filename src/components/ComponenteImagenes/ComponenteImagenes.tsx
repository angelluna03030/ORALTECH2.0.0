"use client";
import Image from "next/image";
import { servicios } from "./index";
import { useState } from "react";

export const ComponenteServicios = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
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
     
     
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Ofrecemos una amplia gama de tratamientos dentales con la más alta calidad y tecnología de vanguardia para
            cuidar tu sonrisa.
          </p>
        </div>

        {/* Services Grid - Centrado */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-5xl">
            {servicios.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-none transition-all duration-700 ease-out cursor-pointer"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Card Normal */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={service.src || "/placeholder.svg"}
                    alt={service.titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-4 md:p-6">
                
                </div>

                {/* Fullscreen Overlay - Layout Responsivo */}
                {hoveredService === service.id && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
                    <div className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                      {/* Imagen a la izquierda */}
                      <div className="relative w-full lg:w-1/2 h-64 md:h-80 lg:h-[70vh] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-left-8 duration-700">
                        <Image
                          src={service.src || "/placeholder.svg"}
                          alt={service.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Contenido a la derecha */}
                      <div className="w-full lg:w-1/2 text-white flex flex-col justify-center animate-in slide-in-from-right-8 duration-700 delay-200">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                          {service.titulo}
                        </h3>

                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed mb-6 md:mb-8 text-gray-200 animate-in slide-in-from-bottom-4 duration-700 delay-400">
                          {service.descripcion}
                        </p>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                          <button className="bg-white text-slate-800 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                            Agendar Cita
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-all duration-300 border border-white/30">
                            Más información
                          </button>
                        </div>
                      </div>

                      {/* Botón cerrar */}
                      <button
                        className="absolute cursor-pointer top-4 md:top-8 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 animate-in zoom-in-95 duration-700 delay-600"
                        onClick={() => setHoveredService(null)}
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Centrado */}
        <div className="flex justify-center mt-16">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Solicitar Consulta Gratuita
          </button>
        </div>
      </div>

    
    </section>
  );
};
