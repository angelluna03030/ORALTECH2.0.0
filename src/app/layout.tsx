import type { Metadata } from "next";
import "../assets/globals.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from "next/head";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> 
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
      <body>{children}</body>
    </html>
  );
}