import { Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "./Transformacion";
import imagen1 from "../../assets/webp/1-1.webp";
import imagen2 from "../../assets/webp/1-2.webp";
import imagen3 from "../../assets/webp/4-1.webp";
import imagen4 from "../../assets/webp/4-2.webp";
import Image from "next/image";
import ImaganesTransformacion from "@/assets/webp/Recurso 2@4x-8.webp";
export const Transformacionsetion = () => {
  return (
    <>
      <section id="resultados" className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center space-x-2 bg-blue-50 text-[#28295F] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span>Resultados comprobados</span>
            </div>

            <div className="flex justify-center w-full my-5">
              <Image
                src={ImaganesTransformacion}
                alt="Imagen de Tranformacion"
                className="rounded-lg w-full h-auto object-cover max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                priority
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl px-4">
                Mira los increíbles resultados que hemos logrado con nuestros
                pacientes.
              </p>
            </div>
          </div>

          {/* Grid responsivo para los sliders */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              <div className="flex justify-center">
                <BeforeAfterSlider after={imagen2.src} before={imagen1.src} />
              </div>
              <div className="flex justify-center">
                <BeforeAfterSlider after={imagen4.src} before={imagen3.src} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
