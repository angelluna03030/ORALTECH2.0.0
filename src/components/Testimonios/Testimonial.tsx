"use client"
import {testimonios} from "./index"
import {  Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export const TestimoniosSection = ()=> {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Calcular slides máximos según el dispositivo
  const getMaxSlides = () => {
    return isMobile ? testimonios.length - 1 : testimonios.length - 2
  }

  // Calcular el porcentaje de movimiento
  const getTranslatePercentage = () => {
    return isMobile ? currentSlide * 100 : currentSlide * 50
  }

  const slideToNext = () => {
    const maxSlide = getMaxSlides()
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const slideToPrev = () => {
    const maxSlide = getMaxSlides()
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
       <>
       
    <section className="py-10 md:py-10 bg-gradient-to-b from-gray-50 to-white">
         <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#28295F]/5 text-[#28295F] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <div className="w-2 h-2 bg-[#28295F] rounded-full"></div>
            Testimonios Reales
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#28295F] mb-4 md:mb-6 tracking-tight leading-none">
            Historias que
            <br />
            <span className="text-[#28295F]">Inspiran</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 font-normal  w-full items-center justify-center text-center mx-auto leading-relaxed px-6 ">
            Experiencias auténticas de pacientes que confiaron en nosotros para transformar sus sonrisas.
          </p>
        </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
       

        {/* Slider Container */}
        <div className="relative mb-12 md:mb-20 pt-10 ">
          {/* Navigation Buttons - Solo en desktop */}
          <button
            onClick={slideToPrev}
            className="hidden md:flex absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-[#28295F]" />
          </button>

          <button
            onClick={slideToNext}
            className="hidden md:flex absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-[#28295F]" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden mx-0 md:mx-14">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${getTranslatePercentage()}%)`,
              }}
            >
              {testimonios.map((testimonio, index) => (
                <div key={index} className={`${isMobile ? "w-full" : "w-1/2"} my-5 flex-shrink-0 px-2 md:px-4`}>
                  <div className="group">
                    <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500 border border-gray-100/50 hover:border-[#28295F]/10">
                      {/* Decorative Element */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#28295F] to-[#28295F]/60"></div>

                      {/* Video Container */}
                      <div className="relative aspect-video">
                     
                                                   <iframe
                              src={`https://www.youtube.com/embed/${testimonio.id}?si=gllLtQiP7zkadoIM`}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />

                     
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-8">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <Quote className="w-5 md:w-6 h-5 md:h-6 text-[#28295F]/30" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 italic">
                              {testimonio.descripcion}
                            </p>
                            <div className="flex items-center justify-between my-8">
                              <div>
                                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                                  {testimonio.nombre}
                                </h3>
                                <p className="text-[#28295F] font-medium text-xs md:text-sm">
                                  {testimonio.tratamiento}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#28295F]"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-4 md:left-8 right-4 md:right-8 h-px bg-gradient-to-r from-transparent via-[#28295F]/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: getMaxSlides() + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? "bg-[#28295F] w-6 md:w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={slideToPrev}
              className="w-10 h-10 bg-white cursor-pointer rounded-full shadow-lg flex items-center justify-center border border-gray-100"
            >
              <ChevronLeft className="w-4 h-4 text-[#28295F]" />
            </button>
            <button
              onClick={slideToNext}
              className="w-10 h-10 bg-white cursor-pointer rounded-full shadow-lg flex items-center justify-center border border-gray-100"
            >
              <ChevronRight className="w-4 h-4 text-[#28295F]" />
            </button>
          </div>
        </div>

    

      
      
      </div>
    </section>
    </>
  )
}
