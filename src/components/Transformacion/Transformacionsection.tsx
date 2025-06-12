import { Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "./Transformacion";

export const Transformacionsetion = () => {
  return (
    <>
      <section id="resultados" className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center  space-x-2 bg-blue-50 text-[#28295F] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span>Resultados comprobados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#28295F]">
             Transformación en OralTech
            </h2>
            <div className="flex items-center justify-center ">
              <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl px-4">
                Mira los increíbles resultados que hemos logrado con nuestros
                pacientes.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>
    </>
  );
};
