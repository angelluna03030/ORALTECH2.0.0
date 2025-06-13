import Image from "next/image";
import { InformacionData } from "./index";
import Imagenes1 from "@/assets/webp/Recurso 4@4x-8.webp";
export const Informacion = () => {
  return (
    <section
      className="w-full py-16 px-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(21, 108, 175, 1) 0%, rgba(70, 190, 240, 1) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {InformacionData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image Container - Tamaño fijo para todas las imágenes */}
              <div className="flex justify-center">
                              <div className={`relative ${stat.width || "w-64"} ${stat.height || "h-64"}`}>
                      <Image
                    src={stat.src || "/placeholder.svg"}
                    alt={stat.alt}
                    fill
                    className="object-contain filter drop-shadow-2xl "
                    loading="lazy"
                    decoding="async"
                  />
                
                </div>
                  
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};