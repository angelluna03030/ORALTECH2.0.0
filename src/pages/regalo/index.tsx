import React, { useState, useEffect } from 'react';
import {  Sparkles, Star, } from 'lucide-react';
// ✅ CORRECTO
import Head from 'next/head'
import Imagenlogo from "../../assets/webp/oraltech_logo.webp";
import "../../assets/globals.css";

import Image from 'next/image';


// Tipos para canvas-confetti
interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
  colors?: string[];
  angle?: number;
}

// Extender el objeto window para incluir confetti
declare global {
  interface Window {
    confetti?: (options?: ConfettiOptions) => void;
  }
}

interface GiftCardProps {
  recipientName?: string;
  customMessage?: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ 

  customMessage 
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    // Confetti cuando se abre la página
    const timer = setTimeout(() => {
      // Efecto de confetti con canvas-confetti
      if (typeof window !== 'undefined' && window.confetti) {
        // Confetti inicial
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#14b8a6', '#06b6d4', '#0ea5e9', '#10b981']
        });
        
        // Segundo confetti después de 300ms
        setTimeout(() => {
          window.confetti!({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#14b8a6', '#06b6d4', '#0ea5e9']
          });
        }, 300);
        
        // Tercer confetti después de 600ms
        setTimeout(() => {
          window.confetti!({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#14b8a6', '#06b6d4', '#0ea5e9']
          });
        }, 600);
      }
      
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
 const whatsappNumber2: string = "+573016184618"; // Formato: código país + número sin espacios ni símbolos
  const handleCardClick = (): void => {
    // Más confetti cuando se hace clic en la carta
    if (typeof window !== 'undefined' && window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#14b8a6', '#06b6d4', '#0ea5e9', '#10b981', '#f59e0b']
      });
    }
    setShowContent(true);
  };


  return (
    <>
      <Head>
            {/* Schema.org estructurado adicional */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "OralTech",
                  "url": "https://www.oraltechodontologia.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.oraltechodontologia.com/favicon.ico",
                    "width": 512,
                    "height": 512
                  },
                  "sameAs": [
                    "https://facebook.com/oraltech",
                    "https://instagram.com/oraltech",
                    "https://twitter.com/oraltech"
                  ]
                })
              }}
            />
            
            {/* Schema adicional para WebSite */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "OralTech",
                  "url": "https://www.oraltechodontologia.com",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.oraltechodontologia.com/buscar?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                })
              }}
            />
          </Head>
   <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">

  {/* Fondo decorativo mejorado */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-20 left-10 w-24 h-24 bg-teal-200 rounded-full opacity-30 animate-ping"></div>
    <div className="absolute top-40 right-20 w-20 h-20 bg-cyan-200 rounded-full opacity-30 animate-ping delay-1000"></div>
    <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-200 rounded-full opacity-30 animate-ping delay-500"></div>
    <div className="absolute bottom-40 right-10 w-16 h-16 bg-teal-300 rounded-full opacity-30 animate-ping delay-700"></div>
  </div>

  {/* Carta principal */}
  <div 
    className={`relative z-10 max-w-md w-full transform transition-all duration-1000 cursor-pointer  ${
      isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
    }`} onClick={handleCardClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleCardClick();
    }}
    aria-label="Abrir carta de regalo"
  >
    <div 
     onClick={() =>
                          window.open(
                         `https://wa.me/${whatsappNumber2}?text=Me+gan%C3%A9+un+micro+dise%C3%B1o+dental+en+OralTech.+Mil+gracias.`,
                            "_blank"
                          )
                        }
    className="bg-green-100 backdrop-blur-sm rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-8 border border-white/20 relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition duration-300 ease-in-out">

      {/* Destello lateral */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>

      {/* Encabezado */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r rounded-full mb-4 ">

<Image
  src={Imagenlogo}
  alt="Logo de OralTech"
  width={250}
  height={250} // Puedes ajustar o eliminar height si deseas que se mantenga la proporción
  className="w-auto h-auto max-w-[250px] mx-auto"
/>
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Carta de Regalo
        </h1>
        <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-2"></div>
      </div>
<p className="text-teal-600 text-lg font-semibold mb-2 m-auto">🎉 ¡Felicidades! 🎉</p>
<br></br>
  <div className="text-center mb-8">
  
    <p className="text-gray-700 leading-relaxed">
      {customMessage || (
        <>
          Te obsequiamos un <span className="font-semibold text-teal-600">micro diseño dental</span> para que deslumbres con tu sonrisa.
        </>
      )}
    </p>
  </div>
  {/* Contenido visible */}
<div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} my-10 w-full `}>
    
    <br></br>
  {/* Información del regalo */}
  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 mb-10 border border-teal-100 shadow-sm h-40">
    <h2 className="text-xl font-semibold text-gray-800  flex items-center gap-2 mb-3">
      <Sparkles className="text-teal-500" size={20} />
      Oral Tech
    </h2>

    <p className="text-gray-600 text-sm mb-3">Micro diseño dental profesional</p>
      <br></br>
    <div className="text-sm flex justify-between items-center mb-1">
      <span className="text-gray-500">Para:</span>
      <span className="font-medium text-gray-700">Laura Restrepo </span>
    </div>
 
    <div className="text-sm flex justify-between items-center mt-2">
      <span className="text-gray-500">Fecha:</span>
<span className="block text-sm font-medium text-gray-700 text-center">
  23/7/2025 · 10:00 A.M.
</span>
    </div>
  </div>

  {/* Cita inspiradora + estrellas */}
  <div className="text-center mb-5">
 <p className="text-gray-600 text-sm italic">{`"Una sonrisa perfecta es el mejor accesorio que puedes usar"`}</p>

    <br></br>
        <br></br>
    <div className="flex justify-center space-x-1 text-yellow-400 mt-2" aria-label="Calificación 5 estrellas">
      {[...Array(5)].map((_, index) => (
        <Star key={index} size={16} fill="currentColor" />
      ))}
    </div>
  </div>

  {/* Código de regalo con estilo */}
  <div className="text-center">
    <div className="inline-block bg-white border border-dashed border-cyan-400 rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition">
      <span className="text-xs text-gray-500 block mb-1">Código de regalo</span>
      <span className="font-mono text-sm font-semibold text-teal-700 tracking-wide">ORAL-JL13SS</span>
    </div>
  </div>
 
</div>

      
    </div>

    {/* Sombra decorativa */}
    <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-3xl opacity-20 -z-10 blur-md"></div>
  </div>
  <div
  className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  } w-max max-w-xs sm:max-w-sm md:max-w-md text-center px-4`}
>
  
</div>
  {/* Texto de bienvenida con animación */}
 
</div>
    </>
  );
};

export default GiftCard;