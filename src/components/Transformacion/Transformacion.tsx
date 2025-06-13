"use client";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface TransitionImagesProps {
  before: string;
  after: string;
}

export const BeforeAfterSlider: React.FC<TransitionImagesProps> = ({ 
  before,
  after 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden">
        {/* Imagen "Después" (fondo) */}
        <div className="absolute inset-0">
          <Image
            about="Después del tratamiento"
            loading="lazy"
            width={500}
            height={500}
            title="Después del tratamiento"
            src={after || "/placeholder-after.jpg"}
            alt="Después del tratamiento"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r"></div>
        </div>

        {/* Imagen "Antes" (se recorta según el slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            loading="lazy"
            width={500}
            height={500}
            title="Antes del tratamiento"
            src={before || "/placeholder-before.jpg"}
            alt="Antes del tratamiento"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r"></div>
        </div>

        {/* Línea divisoria */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          Antes
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          Después
        </div>

        {/* Slider control */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute bottom-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>

      {/* Instrucciones */}
      <div className="p-4 sm:p-6 text-center bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-center">
          <p className="text-center text-sm sm:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-sm lg:max-w-md px-2 sm:px-4">
            Desliza para ver la transformación
          </p>
        </div>
      </div>
    </div>
  );
};