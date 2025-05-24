"use client"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import imagen1 from "../../assets/webp/1-1.webp"
import imagen2 from "../../assets/webp/1-2.webp"

export const BeforeAfterSlider=()=>{

     const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="relative h-80 md:h-96 overflow-hidden">
        {/* Imagen "Después" (fondo) */}
        <div className="absolute inset-0">
          <img
            src={imagen2.src}
            alt="Después del tratamiento"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
        </div>

        {/* Imagen "Antes" (se recorta según el slider) */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img
            src={imagen1.src}
            alt="Antes del tratamiento"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
        </div>

        {/* Línea divisoria */}
        <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Antes
        </div>
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
      <div className="p-6 text-center bg-gradient-to-r from-gray-50 to-white">
           <div className="flex items-center justify-center ">
  <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl px-4">
  Desliza para ver la transformación
  </p>
</div>
       
      </div>
    </div>
  )
}