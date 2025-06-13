import { StatItem } from "@/utils/Interface/interface";
import Imagenes3 from "@/assets/webp/Recurso-6_4x-8.webp";
import Imagenes2 from "@/assets/webp/Recurso 5@4x-8.webp";
import Imagenes1 from "@/assets/webp/Recurso 4@4x-8.webp";

export const InformacionData: StatItem[] = [
  {
    src: Imagenes3.src,
    alt: "Información sobre tratamientos dentales",
    titulo: "Información",
    descripcion: "Años de Experiencia",
    cantidad: 10,
     suffix: "",
     width : "w-52",
     height : "h-52"
  },
  {
    src: Imagenes2.src,
    alt: "Información sobre tratamientos dentales",
    titulo: "Información",
    descripcion: " Servicios Realizados",
    cantidad: 13,
         suffix: "K",
        
  },
  {
    src: Imagenes1.src,
    alt: "Información sobre tratamientos dentales",
    titulo: "Información",
    descripcion: " Seguidores en Redes Sociales",
         suffix: "K",
    cantidad: 13 ,
  },
];
