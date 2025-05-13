import { ComponenteImagenesProps } from "@/utils/Interface/interface";
import Cucuta from "@/assets/webp/Cúcuta ubicación.webp";
import Medellin from "@/assets/webp/Medellín Ubicación.webp";

 export  const Ubicaciones:ComponenteImagenesProps[] = [
    {
      src: Cucuta.src,
      alt: "Ubicación en Cúcuta",
      titulo: "Cúcuta",
      descripcion: "Ubicación en Cúcuta",
    },
    {
      src: Medellin.src,
      alt: "Ubicación en Medellín",
      titulo: "Medellín",
      descripcion: "Ubicación en Medellín",
    },

   
  ];
