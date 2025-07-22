import React, { useState, useEffect, JSX } from 'react';
import { Gift, Sparkles, Heart, Star, } from 'lucide-react';
import Head from "next/head";
import Imagenlogo from "../../assets/webp/oraltech_logo.webp";
import "../../assets/globals.css";
import { Metadata } from "next";
import Image from 'next/image';
export const metadata: Metadata = {
  // Basic Metadata
  title: "OralTech - Consultorio Odontológico | Sonrisas Radiantes",
  description:
    "Somos un consultorio odontológico en el que nos dedicamos a crear sonrisas radiantes que irradian confianza y belleza, buscamos hacer felices a nuestros pacientes ayudándolos a conseguir su sonrisa soñada. Contamos con los profesionales ideales para ayudar a nuestros pacientes a mantener su salud y estética bucal.",
  
  // Icons (CORREGIDO: URLs absolutas)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Cambiado para mejor compatibilidad
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png", 
        sizes: "16x16",
        url: "/favicon-16x16.png",
      }
    ],
  },
  
  // App Information
  applicationName: "OralTech",
  appleWebApp: {
    capable: true,
    title: "OralTech",
    statusBarStyle: "default",
  },
  
  // Open Graph Protocol (CORREGIDO: URLs absolutas)
  openGraph: {
    title: "OralTech - Consultorio Odontológico",
    description:
      "Somos un consultorio odontológico especializado en crear sonrisas radiantes. Profesionales ideales para mantener tu salud y estética bucal en Medellín y Cúcuta.",
    url: "https://www.oraltechodontologia.com",
    siteName: "OralTech",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.oraltechodontologia.com/favicon.ico", // CAMBIO CRÍTICO: URL absoluta
        width: 1200,
        height: 630,
        alt: "OralTech - Consultorio Odontológico",
        type: "image/png",
      },
      {
        url: "https://www.oraltechodontologia.com/favicon.ico", // Logo cuadrado adicional
        width: 512,
        height: 512,
        alt: "OralTech Logo",
        type: "image/png",
      }
    ],
  },
  
  // Twitter Card (CORREGIDO)
  twitter: {
    card: "summary_large_image",
    title: "OralTech - Consultorio Odontológico",
    description:
      "Consultorio odontológico especializado en crear sonrisas radiantes. Profesionales en salud y estética bucal.",
    images: ["https://www.oraltechodontologia.com/favicon.ico"], // URL absoluta
    site: "@OralTech",
    creator: "@AngelLuna",
  },
  
  // Robots and Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Alternate Languages
  alternates: {
    canonical: "https://www.oraltechodontologia.com",
    languages: {
      "es-CO": "https://www.oraltechodontologia.com",
      "en-US": "https://www.oraltechodontologia.com/en",
    },
  },
  
  // Verification for Search Console and Other Services
  verification: {
    google: "google-site-verification-code", // Reemplaza con tu código real
    yandex: "yandex-verification-code",
    other: {
      "facebook-domain-verification": "facebook-domain-verification-code",
      "norton-safeweb-site-verification": "norton-verification-code",
      "baidu-site-verification": "baidu-verification-code",
      "pinterest-site-verification": "pinterest-verification-code",
    },
  },
  
  // Additional Metadata
  category: "Healthcare",
  creator: "Angel Luna",
  publisher: "OralTech",
  keywords: [
    "OralTech",
    "consultorio odontológico",
    "clínica dental Medellín",
    "odontología Cúcuta",
    "dentista Colombia",
    "sonrisa radiante",
    "estética dental",
    "salud bucal",
    "tratamientos dentales",
    "odontología estética",
    "blanqueamiento dental",
    "ortodoncia",
    "implantes dentales",
    "periodoncia",
    "endodoncia"
  ],
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Viewport Settings
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Mobile App Install Banners
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  
  // Referrer Policy
  referrer: "origin-when-cross-origin",
  
  // Theme Color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#28295F" },
    { media: "(prefers-color-scheme: dark)", color: "#28295F" },
  ],
  
  // Content Type y otros metadatos
  other: {
    "Content-Type": "text/html; charset=utf-8",
    // Agregamos el schema.org aquí también
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DentalClinic",
      "name": "OralTech",
      "alternateName": "OralTech Consultorio Odontológico",
      "url": "https://www.oraltechodontologia.com",
      "logo": "https://www.oraltechodontologia.com/favicon.ico",
      "image": "https://www.oraltechodontologia.com/favicon.ico",
      "description": "Consultorio odontológico especializado en crear sonrisas radiantes que irradian confianza y belleza.",
     "telephone": "+573224130747", // Reemplaza con tu número real
      "email": "Ooraltech@gmail.com", // Reemplaza con tu email real
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Dirección en Medellín", // Reemplaza con dirección real
          "addressLocality": "Medellín",
          "addressRegion": "Antioquia",
          "postalCode": "050001",
          "addressCountry": "CO"
        },
        {
          "@type": "PostalAddress", 
          "streetAddress": "Dirección en Cúcuta", // Reemplaza con dirección real
          "addressLocality": "Cúcuta",
          "addressRegion": "Norte de Santander",
          "postalCode": "540001",
          "addressCountry": "CO"
        }
      ],
      "sameAs": [
        "https://facebook.com/oraltech", // Agrega tus redes sociales reales
        "https://instagram.com/oraltech",
        "https://twitter.com/oraltech"
      ],
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-12:00"
      ],
      "medicalSpecialty": "Dentistry",
      "priceRange": "$$"
    })
  },
};

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
  recipientName = "[Nombre de la persona]", 
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

  const generateGiftCode = (): string => {
    return `ORAL-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
  };

  const formatDate = (): string => {
    return new Date().toLocaleDateString('es-ES');
  };

  const decorativeElements: JSX.Element[] = [...Array(6)].map((_, i: number) => (
    <div
      key={i}
      className={`absolute animate-bounce opacity-60 ${
        i % 2 === 0 ? 'text-teal-400' : 'text-cyan-400'
      }`}
      style={{
        left: `${20 + i * 15}%`,
        top: `${10 + i * 12}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${2 + i * 0.3}s`
      }}
    >
      {i % 3 === 0 ? (
        <Sparkles size={16} />
      ) : i % 3 === 1 ? (
        <Star size={14} />
      ) : (
        <Heart size={12} />
      )}
    </div>
  ));

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
  22/7/2025 · 4:30 P.M.
</span>
    </div>
  </div>

  {/* Cita inspiradora + estrellas */}
  <div className="text-center mb-5">
    <p className="text-gray-600 text-sm italic ">"Una sonrisa perfecta es el mejor accesorio que puedes usar"</p>
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