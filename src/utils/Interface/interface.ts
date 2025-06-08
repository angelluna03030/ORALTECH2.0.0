export interface BotonesProps {
  text: string;
  url: string;
  className?: string; // Propiedad opcional para clases personalizadas
}
export interface ComponenteImagenesProps {
    id: number;
    src: string;
    alt: string;
    titulo: string;
    descripcion: string;
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
}
