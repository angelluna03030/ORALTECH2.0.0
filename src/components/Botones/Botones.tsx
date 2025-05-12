import Link from "next/link";

// Definir la interfaz para las props
interface BotonesProps {
  text: string;
  url: string;
  className?: string; // Propiedad opcional para clases personalizadas
}

export const Botones = ({ text, url, className = "" }: BotonesProps) => {
  return (
    <Link href={url} passHref>
      <button 
        style={{
         
          background: "linear-gradient(90deg, rgba(62, 174, 223, 1) 0%, rgba(17, 112, 183, 1) 50%)"
        }}
        className={`cursor-pointer font-bold text-center px-6 py-3 text-white rounded-3xl hover:opacity-90 transition-all ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};