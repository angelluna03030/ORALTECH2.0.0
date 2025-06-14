
// Componente GaleriaImagenes mejorado
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

interface GaleriaImagenesProps {
  imagenes: string[] | undefined;
}

export const GaleriaImagenes: React.FC<GaleriaImagenesProps> = ({
  imagenes = [],
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={imagenes.length > 1}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
        slideShadows: false, // Esto quita las sombras de las slides laterales
        }}
        breakpoints={{
          640: { 
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: { 
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          1024: { 
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="w-full h-full mySwiper"
      >
        {imagenes.map((imagen, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-full"
          >
            <div className="relative w-full h-full max-w-md max-h-80 lg:max-h-96 rounded-xl overflow-hidden ">
              <Image
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 "
                src={`${imagen}`}
                alt={`Imagen ${index + 1} de la galería`}
                title={`Imagen ${index + 1} de la galería`}
               
              />
              {/* Overlay sutil */}
            </div>
          </SwiperSlide>
        ))}
        
        {/* Botones de navegación personalizados */}
        <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
      
      {/* Estilos CSS adicionales para la paginación */}
      <style jsx>{`
        .mySwiper .swiper-pagination {
          bottom: 10px !important;
        }
        .mySwiper .swiper-pagination-bullet {
       
          opacity: 1 !important;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: #46BEF0 !important;
        }
      `}</style>
    </div>
  );
};