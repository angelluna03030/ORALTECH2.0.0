import { Award, Heart, Shield, Smile, Sparkles, Users } from "lucide-react";
import imagen from "../../assets/webp/Recurso 1.webp";
import Image from "next/image";
import diente from "../../assets/webp/sonrisa.webp";
export const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="py-12 md:py-20 lg:py-32 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white"></div>
        <div className="absolute top-10 md:top-20 right-10 md:right-20 w-32 h-32 md:w-72 md:h-72 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                  <Award className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Clínica #1 en satisfacción del paciente</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className=" text-[#46BEF0]">Tu sonrisa es nuestra</span>
                  <br />
                  <span className="  text-[#28295F] ">prioridad</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 ">
                  Luce una nueva sonrisa de ensueño con nuestros servicios.
                </p>
              </div>
              <div className="flex flex-col mt-28 text-white rounded-lg sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button className=" text-white rounded-lg cursor-pointer bg-[#46BEF0] text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-lg">
                  Agendar Consulta
                </button>
                <button className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 cursor-pointer hover:bg-gray-50 text-[#28295F] rounded-lg">
                  Conocer Más
                </button>
              </div>
            </div>

            {/* Beautiful geometric illustration */}
            <div className="relative order-first lg:order-last">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
                {/* Main circle */}
                <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full shadow-2xl"></div>

                {/* Floating elements */}
                <div className="absolute top-6 md:top-10 left-6 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-[#28295F] rounded-2xl shadow-lg rotate-12 flex items-center justify-center">
                  <Smile className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                <div className="absolute top-12 md:top-20 right-8 md:right-16 w-10 h-10 md:w-12 md:h-12 bg-[#46BEF0] rounded-xl shadow-lg -rotate-12 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                <div className="absolute bottom-12 md:bottom-16 left-8 md:left-16 w-11 h-11 md:w-14 md:h-14 bg-[#46BEF0] rounded-2xl shadow-lg rotate-45 flex items-center justify-center">
                      <Image
                      src={diente}
                      alt="Imagen de cuidado dental"
                      className="p-1"
                      loading="lazy"
                      decoding="async"
                      title="Imagen de cuidado dental"
                    ></Image>
                </div>

                <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-14 h-14 md:w-18 md:h-18 bg-[#28295F] rounded-full shadow-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Center content */}
                <div className="relative z-10 text-center space-y-3 md:space-y-4">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-[#46BEF0] rounded-2xl md:rounded-3xl shadow-2xl mx-auto flex items-center justify-center mb-4 md:mb-6">
                    <Image
                      src={imagen}
                      alt="Imagen de cuidado dental"
                      className="p-1"
                      loading="lazy"
                      decoding="async"
                      title="Imagen de cuidado dental"
                    ></Image>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800">
                    Cuidado Integral
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 max-w-xs px-4">
                    Tecnología avanzada para tu mejor sonrisa
                  </p>
                </div>

                {/* Decorative rings */}
                <div className="absolute w-72 h-72 md:w-96 md:h-96 border border-blue-200 rounded-full opacity-30"></div>
                <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] border border-blue-100 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
