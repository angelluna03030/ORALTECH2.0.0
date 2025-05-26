import DiseñoSonrisa from "@/assets/webp/Diseño de Sonrisa.webp";
import MicroDiseño from "@/assets/webp/Microdiseño de Sonrisa.webp";
import Blanquimineto from "@/assets/webp/Blanqueamiento.webp";
import LimpiezaDental from "@/assets/webp/Limpieza dental.webp";
import Ortodoncia from "@/assets/webp/Ortodoncia.webp";
import { ComponenteImagenesProps } from "@/utils/Interface/interface";

export const servicios: ComponenteImagenesProps[] = [
  {
    id: 1,
    src: DiseñoSonrisa.src,
    alt: "Diseño de Sonrisa",
    titulo: "Diseño de Sonrisa",
    descripcion: "Mejora la estética de tu sonrisa",
  },
  {
    id: 2,
    src: Ortodoncia.src,
    alt: "Tratamiento de ortodoncia con alineadores transparentes",
    titulo: "Ortodoncia",
    descripcion: "Alineación perfecta para tus dientes",
  },
  {
    id: 3,
    src: MicroDiseño.src,
    alt: "Microdiseño de Sonrisa con técnicas avanzadas",
    titulo: "Microdiseño de Sonrisa",
    descripcion: "Detalles que transforman tu sonrisa",
  },
  {
    id: 3,
    src: LimpiezaDental.src,
    alt: "Procedimiento profesional de limpieza dental",
    titulo: "Limpieza Dental",
    descripcion: "Higiene profesional para una boca sana",
  },
  {
    id: 4,
    src: Blanquimineto.src,
    alt: "Procedimiento de blanqueamiento dental profesional",
    titulo: "Blanqueamiento",
    descripcion: "Dientes más blancos y brillantes",
  },
];
