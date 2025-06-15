import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppWidget } from "@/components/WhatsApp";
import "../../assets/globals.css";

import { Award,  Clock, Heart, Users } from "lucide-react";

import { TestimoniosSection } from "@/components/Testimonios";

import { Metadata } from "next";
import { Video } from "@/components/video/Video";

export const metadata: Metadata = {
  // Basic Metadata
  title: "OralTech",
  description:
    "Somos un consultorio odontológico en el que nos dedicamos a crear sonrisas radiantes que irradian confianza y belleza, buscamos hacer felices a nuestros pacientes ayudándolos a conseguir su sonrisa soñada. Contamos con los profesionales ideales para ayudar a nuestros pacientes a mantener su salud y estética bucal.",
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  // App Information
  applicationName: "OralTech",
  appleWebApp: {
    capable: true,
    title: "OralTech",
    statusBarStyle: "default",
  },
  // Open Graph Protocol (for social media sharing)
  openGraph: {
    title: "OralTech",
    description:
      "Somos un consultorio odontológico en el que nos dedicamos a crear sonrisas radiantes que irradian confianza y belleza, buscamos hacer felices a nuestros pacientes ayudándolos a conseguir su sonrisa soñada. Contamos con los profesionales ideales para ayudar a nuestros pacientes a mantener su salud y estética bucal.",
    url: "https://www.oraltechodontologia.com/",
    siteName: "OralTech",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "../assets/webp/oraltech_logo_white.webp",
        width: 1200,
        height: 630,
        alt: "OralTech",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "OralTech",
    description:
      "Somos un consultorio odontológico en el que nos dedicamos a crear sonrisas radiantes que irradian confianza y belleza, buscamos hacer felices a nuestros pacientes ayudándolos a conseguir su sonrisa soñada. Contamos con los profesionales ideales para ayudar a nuestros pacientes a mantener su salud y estética bucal.",
    images: ["../assets/webp/oraltech_logo_white.webp"],
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
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "facebook-domain-verification": "facebook-domain-verification-code",
      "norton-safeweb-site-verification": "norton-verification-code",
      "baidu-site-verification": "baidu-verification-code",
      "pinterest-site-verification": "pinterest-verification-code",
    },
  },
  // Additional Metadata
  category: "Dental",
  creator: "Angel Luna",
  publisher: "OralTech",
  keywords: [
    "tecnología dental",
    "equipos dentales",
    "servicio técnico dental",
    "OralTech",
    "clínica dental",
    "odontología",
    "Cúcuta",
    "Medellín",
    "Colombia",
    "equipos odontológicos",
    "mantenimiento dental",
    "innovación dental",
    "software dental",
    "radiología dental digital",
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
  // Content Type
  other: {
    "Content-Type": "text/html; charset=utf-8",
  },
};
export const Data = [
  {
    id: 1,
    icon: () => <Heart className="w-6 h-6 text-[#ffffff]" />,
    iconBg: "bg-[#28295F]",
    title: "Atención Personalizada",
    description:
      "Cada tratamiento es diseñado específicamente para las necesidades de cada paciente",
  },
  {
    id: 2,
    icon: () => <Award className="w-6 h-6 text-[#ffffff]" />,
    iconBg: "bg-[#46BEF0]",
    title: "Tecnología Avanzada",
    description:
      "Equipos de última generación para diagnósticos precisos y tratamientos efectivos",
  },
  {
    id: 3,
    icon: () => <Users className="w-6 h-6 text-[#ffffff]" />,
    iconBg: "bg-[#28295F]",
    title: "Equipo Especializado",
    description:
      "Profesionales altamente capacitados con años de experiencia en odontología",
  },
  {
    id: 4,
    icon: () => <Clock className="w-6 h-6 text-[#ffffff]" />,
    iconBg: "bg-[#46BEF0]",
    title: "Horarios Flexibles",
    description:
      "Adaptamos nuestros horarios para que puedas cuidar tu salud dental sin complicaciones",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <section className="w-full bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Image Section */}
        <Video></Video>
        {/* Mission Section */}
        <div className="container mx-auto py-10 sm:py-12 md:py-16">
          <div className="text-center  max-w-4xl mx-auto">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#28295F]  leading-tight">
                Sobre Nosotros
              </h2>

              <div className="relative py-8 sm:py-12 md:py-16 lg:py-20  mb-32 sm:mt-0 ">
                <p className="text-base sm:text-lg  md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light relative ">
                  Somos un consultorio odontológico en el que nos dedicamos a
                  crear sonrisas radiantes que irradian confianza y belleza,
                  buscamos hacer felices a nuestros pacientes ayudándolos a
                  conseguir su sonrisa soñada. Contamos con los profesionales
                  ideales para ayudar a nuestros pacientes a mantener su salud y
                  estética bucal.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="max-w-6xl mx-auto mb-16 sm:mb-24 md:mb-32 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {Data.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 text-center flex flex-col relative group h-auto min-h-[200px] sm:min-h-[240px] md:min-h-[260px]"
                >
                  <div className="flex flex-col items-center h-full">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${item.iconBg} rounded-full flex items-center justify-center mb-3 sm:mb-4 transform hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      {item.icon()}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base leading-tight flex-shrink-0 text-center">
                      {item.title}
                    </h3>
                    <div className="flex-grow flex items-start justify-center">
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full ">
        <TestimoniosSection></TestimoniosSection>
      </div>
      <WhatsAppWidget />
      <Footer />
    </>
  );
}
