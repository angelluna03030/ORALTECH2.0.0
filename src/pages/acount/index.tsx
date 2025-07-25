"use client";

import type React from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { WhatsAppWidget } from "@/components/WhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "../../assets/globals.css";
import placeholder from "../../assets/webp/placeholder.webp";

import Image from "next/image";
import imagnes from "@/assets/webp/iconw.webp";
import { Metadata } from "next";
import { Video } from "@/components/video/Video";
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

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Número de WhatsApp del consultorio (cambiar por el número real)
  const whatsappNumber: string = "+573224130747"; // Formato: código país + número sin espacios ni símbolos
  const whatsappNumber2: string = "+573016184618"; // Formato: código país + número sin espacios ni símbolos
  const handleinputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatWhatsAppMessage = () => {
    const { firstName, lastName, email, phone, service, message } = formData;

    let whatsappMessage = `*NUEVA CONSULTA - CONSULTORIO DENTAL*\n\n`;
    whatsappMessage += `*Nombre:* ${firstName} ${lastName}\n`;
    whatsappMessage += `*Email:* ${email}\n`;
    whatsappMessage += `*Teléfono:* ${phone}\n`;

    if (service) {
      whatsappMessage += `*Servicio de interés:* ${service}\n`;
    }

    if (message) {
      whatsappMessage += `\n *Mensaje:*\n${message}\n`;
    }

    whatsappMessage += `\nEnviado desde la página web de OralTech.`;

    return encodeURIComponent(whatsappMessage);
  };
  const whatsappNumbers = {
    cucuta: "+573224130747",
    medellin: "+573016184618",
  };
  const handleSubmit = (e: React.FormEvent, city: "cucuta" | "medellin") => {
    e.preventDefault();

    // Validación básica
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      alert("Por favor completa al menos tu nombre y teléfono");
      return;
    }

    const message = formatWhatsAppMessage();
    const whatsappNumber = whatsappNumbers[city];
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, "_blank");

    // Opcional: Limpiar el formulario después del envío
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
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
                "url": "https://www.oraltechodontologia.com/logo-512x512.png",
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
      <Header />
      <section className="w-full">
        <Video></Video>
        {/* Hero Image Section */}

        <div className="bg-gray-50 py-4 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl  md:text-4xl font-light text-gray-900 ">
                    Información de Contacto
                  </h2>
                </div>
               <div className="group relative my-5 overflow-hidden rounded-2xl   bg-gradient-to-br from-blue-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Elemento decorativo de fondo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-5">
                        {/* Ícono mejorado con animación */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-50 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-blue-50 to-blue-50 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Phone className="h-7 w-7 text-[#28295F]" />
                          </div>
                        </div>

                        <div className="space-y-1 mb-3">
                          <h3 className="font-bold text-xl text-gray-900  transition-colors duration-300">
                            Teléfono
                          </h3>
                          <p className="text-gray-600 font-medium my-1">
                            (301) 6184618
                          </p>{" "}
                          <br></br>
                          <p className="text-gray-600 font-medium my-1">
                            (322) 4130747
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Elementos decorativos adicionales */}
                    <div className="absolute bottom-4 left-8 flex space-x-1 opacity-20">
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className=" group relative my-5 overflow-hidden rounded-2xl   bg-gradient-to-br from-blue-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Elemento decorativo de fondo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-5">
                        {/* Ícono mejorado con animación */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-50 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-blue-50 to-blue-50 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Mail className="h-7 w-7 text-[#28295F]" />
                          </div>
                        </div>

                        <div className="space-y-1 mb-3">
                          <h3 className="font-bold text-xl text-gray-900  transition-colors duration-300">
                            Email
                          </h3>
                          <p className="text-gray-600 font-medium my-1">
                            Ooraltech@gmail.com
                          </p>
                          <br />
                          <p className="text-gray-600 font-medium my-1">
                            oraltechmedellin@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Elementos decorativos adicionales */}
                    <div className="absolute bottom-4 left-8 flex space-x-1 opacity-20">
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className=" group relative my-5 overflow-hidden rounded-2xl   bg-gradient-to-br from-blue-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Elemento decorativo de fondo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-5">
                        {/* Ícono mejorado con animación */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-50 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-blue-50 to-blue-50 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Clock className="h-7 w-7 text-[#28295F]" />
                          </div>
                        </div>

                        <div className="space-y-1 mb-12">
                          <h3 className="font-bold text-xl text-gray-900  transition-colors duration-300">
                            Horarios
                          </h3>
                          <p className="text-gray-600 font-medium my-1">
                            Lunes - Viernes: 9:00 AM - 7:00 PM <br></br>
                            Sábados: 9:00 AM - 3:00 PM <br></br>
                            Domingos: Cerrado
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Elementos decorativos adicionales */}
                    <div className="absolute bottom-4 left-8 flex space-x-1 opacity-20">
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="group relative my-5 overflow-hidden rounded-2xl   bg-gradient-to-br from-blue-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Elemento decorativo de fondo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-5">
                        {/* Ícono mejorado con animación */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-50 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-blue-50 to-blue-50 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-7 w-7 text-[#28295F]" />
                          </div>
                        </div>

                        <div className="space-y-1 mb-3">
                          <h3 className="font-bold text-xl text-gray-900  transition-colors duration-300">
                            Dirección
                          </h3>
                          <p className="text-gray-600 font-medium my-1">
                            Consultorio 1202. Carrera 43a #7-50a
                          </p>
                          <br></br>
                          <p className="text-gray-600 font-medium my-1">
                            Calle 2 #9 Este-156, Quinta Oriental.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Elementos decorativos adicionales */}
                    <div className="absolute bottom-4 left-8 flex space-x-1 opacity-20">
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="group relative my-5 overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Elemento decorativo de fondo */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-green-100 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-16 sm:translate-x-16 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative p-4 sm:p-8">
                    {/* Layout responsivo: vertical en móvil, horizontal en desktop */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-3 sm:space-x-5">
                        {/* Ícono mejorado con animación */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-green-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-green-500 to-green-600 p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-1 min-w-0 flex-1">
                          <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                            WhatsApp
                          </h3>
                          <p className="text-gray-600 font-medium text-sm sm:text-base">
                            Contacto directo e inmediato
                          </p>
                          <br></br>
                          <div className="flex items-center space-x-1 text-xs sm:text-sm text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>En línea ahora</span>
                          </div>
                        </div>
                      </div>

                      {/* Botón mejorado - full width en móvil */}
                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/${whatsappNumber}?text=Hola%2C+vengo+de+la+página+web+y+me+gustaría+agendar+una+cita.`,
                            "_blank"
                          )
                        }
                        className="group/btn cursor-pointer relative w-full sm:w-auto px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-sm sm:text-base">Cúcuta</span>
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </div>

                        {/* Efecto de brillo */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </div>

                    {/* Elementos decorativos adicionales - ocultos en móvil */}
                    <div className="hidden sm:flex absolute bottom-4 left-8 space-x-1 opacity-20">
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="group relative my-5 overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Elemento decorativo de fondo */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-green-100 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-16 sm:translate-x-16 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative p-4 sm:p-8">
                    {/* Layout responsivo: vertical en móvil, horizontal en desktop */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-3 sm:space-x-5">
                        {/* Ícono mejorado con animación */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-green-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-green-500 to-green-600 p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-1 min-w-0 flex-1">
                          <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                            WhatsApp
                          </h3>
                          <p className="text-gray-600 font-medium text-sm sm:text-base">
                            Contacto directo e inmediato
                          </p>
                          <br></br>
                          <div className="flex items-center space-x-1 text-xs sm:text-sm text-green-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>En línea ahora</span>
                          </div>
                        </div>
                      </div>

                      {/* Botón mejorado - full width en móvil */}
                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/${whatsappNumber2}?text=Hola%2C+vengo+de+la+página+web+y+me+gustaría+agendar+una+cita.`,
                            "_blank"
                          )
                        }
                        className="group/btn cursor-pointer relative w-full sm:w-auto px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-sm sm:text-base">Medellín</span>
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </div>

                        {/* Efecto de brillo */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </div>

                    {/* Elementos decorativos adicionales - ocultos en móvil */}
                    <div className="hidden sm:flex absolute bottom-4 left-8 space-x-1 opacity-20">
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-2xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#46BEF0] to-[#28295F] px-8 py-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={imagnes || placeholder.src}
                        alt="WhatsApp Icon"
                        width={50}
                        height={50}
                        className="object-cover rounded-full   "
                      ></Image>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Envíanos un Mensaje
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Se abrirá WhatsApp con tu mensaje pre-formateado
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <form className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#28295F] transition-colors">
                            Nombre *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleinputChange}
                              placeholder="Tu nombre"
                              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#28295F] focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                              required
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#28295F] transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#28295F] transition-colors">
                            Apellido *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleinputChange}
                              placeholder="Tu apellido"
                              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#28295F] focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                              required
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#28295F] transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#28295F] transition-colors">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleinputChange}
                            placeholder="tu@email.com"
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#28295F] focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#28295F] transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#28295F] transition-colors">
                          Teléfono *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleinputChange}
                            placeholder="+57 (301) 1234-5678"
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#28295F] focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#28295F] transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#28295F] transition-colors">
                          Servicio de Interés
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleinputChange}
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#28295F] focus:bg-white transition-all duration-300 appearance-none cursor-pointer text-sm sm:text-base"
                          >
                            <option value="">Selecciona un servicio</option>
                            <option value="Limpieza Dental">
                              🦷 Limpieza Dental
                            </option>
                            <option value="Blanqueamiento">
                              ✨ Blanqueamiento
                            </option>
                            <option value="Ortodoncia">🔧 Ortodoncia</option>
                            <option value="Implantes Dentales">
                              🔩 Implantes Dentales
                            </option>
                            <option value="Endodoncia">🩺 Endodoncia</option>
                            <option value="Cirugía Oral">
                              ⚕️ Cirugía Oral
                            </option>
                            <option value="Diseño de Sonrisa">
                              😁 Diseño de Sonrisa
                            </option>
                            <option value="Consulta General">
                              👨‍⚕️ Consulta General
                            </option>
                            <option value="Otro">💬 Otro</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#28295F] transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#28295F] transition-colors">
                          Mensaje
                        </label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleinputChange}
                            rows={4}
                            placeholder="Cuéntanos cómo podemos ayudarte..."
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#28295F] focus:bg-white transition-all duration-300 placeholder-gray-400 resize-none text-sm sm:text-base"
                          ></textarea>
                          <div className="absolute top-3 right-3">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#28295F] transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 sm:pt-4">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                          {/* Botón para Cúcuta */}
                          <button
                            onClick={(e) => handleSubmit(e, "cucuta")}
                            className="flex-1 cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 min-h-[48px]"
                          >
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                            <span className="truncate">Cúcuta</span>
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              ></path>
                            </svg>
                          </button>

                          {/* Botón para Medellín */}
                          <button
                            onClick={(e) => handleSubmit(e, "medellin")}
                            className="flex-1 cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 min-h-[48px]"
                          >
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                            <span className="truncate">Medellín</span>
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="text-center pt-2 sm:pt-4">
                        <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2 flex-wrap">
                          <svg
                            className="w-4 h-4 text-green-500 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Respuesta garantizada en menos de 10 horas
                          </span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppWidget />
      <Footer />
    </>
  );
}
