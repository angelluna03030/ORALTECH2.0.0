"use client";
import { ComponenteImagenesPropsTransicion } from "@/utils/Interface/interface";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
// Componente para comparación de imágenes Antes/Después
export const BeforeAfterSliderImage = ({
  alt,
  descripcion,
  srcImagenBefore,
  srcImagenafter,
  titulo,
}: ComponenteImagenesPropsTransicion) => {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto my-12 rounded-4xl overflow-hidden shadow-2xl border border-gray-200/10 hover:shadow-blue-500/20 transition-all duration-300">
        <ReactCompareSlider
          className="aspect-video"
          itemOne={
            <ReactCompareSliderImage
              src={srcImagenBefore}
              srcSet={srcImagenafter}
              alt={alt}
              loading="lazy"
              title={titulo}
              className="object-cover w-full h-full brightness-105"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={srcImagenafter}
              srcSet={srcImagenBefore}
              alt={alt}
              loading="lazy"
              title={titulo}
              className="object-cover w-full h-full"
            />
          }
          position={45}
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: "blur(3px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "none",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
              linesStyle={{
                width: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            />
          }
        />
      </div>
    </>
  );
};
