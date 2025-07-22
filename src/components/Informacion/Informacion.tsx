import Image from "next/image";
import { InformacionData } from "./index";

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
        {/* Cambio principal: grid-cols-3 en todas las pantallas */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
          {InformacionData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image Container - Responsive size */}
              <div className="flex justify-center">
                <div className={`relative ${stat.width || "w-32 sm:w-48 md:w-64"} ${stat.height || "h-32 sm:h-48 md:h-64"}`}>
                  <Image
                    src={stat.src || "/placeholder.svg"}
                    alt={stat.alt}
                    fill
                    className="object-contain filter drop-shadow-2xl w-24"
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