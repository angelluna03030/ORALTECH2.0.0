export interface BotonesProps {
  text: string;
  url: string;
  className?: string; // Propiedad opcional para clases personalizadas
}
export interface ComponenteImagenesProps {
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