import { ComponenteImagenesPropsInformacion } from "@/utils/Interface/interface";
import Imagenes3 from "@/assets/webp/Recurso 3.webp";
import Imagenes2 from "@/assets/webp/Recurso 1.webp";
import Imagenes1 from "@/assets/webp/Recurso 2.webp";

export const InformacionData: ComponenteImagenesPropsInformacion[] = [
  {
    src: Imagenes3.src,
    alt: "Información sobre tratamientos dentales",
    titulo: "Información",
    descripcion: "Años de Experiencia",
    cantidad: 10,
  },
  {
    src: Imagenes2.src,
    alt: "Información sobre tratamientos dentales",
    titulo: "Información",
    descripcion: " Servicios Realizados",
    cantidad: 13068,
  },
  {
    src: Imagenes1.src,
    alt: "Información sobre tratamientos dentales",
    titulo: "Información",
    descripcion: " Seguidores en Redes Sociales",
    cantidad: 10,
  },
];
