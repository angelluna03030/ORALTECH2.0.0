export interface BotonesProps {
  text: string;
  url: string;
  className?: string; // Propiedad opcional para clases personalizadas
}
export interface ComponenteImagenesProps {
    id?: number; // Propiedad opcional para identificar el componente
    src: string;
    alt: string;
    titulo: string;
    descripcion: string;
    direccion_google_maps?: string;
    imagenes?: string[]; // Lista de imágenes opcional para galerías
}

export interface ComponenteImagenesPropsTransicion {
    srcImagenafter: string;
    srcImagenBefore: string;
    alt: string;
    titulo: string;
    descripcion: string;
}

export interface ComponenteImagenesPropsInformacion {
    src: string;
    alt: string;
    titulo: string;
    descripcion: string;
    cantidad: number;
}

export interface StatItem {
  src: string
  cantidad: number
  suffix: string
  titulo: string
  alt: string
    descripcion?: string
  width?: string
  height?: string
  
}
export interface GaleriaImagenesProps {
  imagenes: string[] | undefined;
}