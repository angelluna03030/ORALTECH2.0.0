import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppWidget } from "@/components/WhatsApp";
import "../../assets/globals.css";

import { Award,  Clock, Heart, Users } from "lucide-react";

import { TestimoniosSection } from "@/components/Testimonios";


import { Video } from "@/components/video/Video";
import Head from "next/head";

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
      <Head>
                <title>Sobre Nosotros - OralTech | Consultorio Odontológico</title>
        <meta name="description" content="Somos un consultorio odontológico dedicado a crear sonrisas radiantes que irradian confianza y belleza. Profesionales especializados en salud y estética bucal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Keywords */}
        <meta name="keywords" content="OralTech, consultorio odontológico, clínica dental Medellín, odontología Cúcuta, dentista Colombia, sonrisa radiante, estética dental" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sobre Nosotros - OralTech" />
        <meta property="og:description" content="Consultorio odontológico especializado en crear sonrisas radiantes. Profesionales en salud y estética bucal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oraltechodontologia.com/about" />
        <meta property="og:image" content="https://www.oraltechodontologia.com/favicon.ico" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nosotros - OralTech" />
        <meta name="twitter:description" content="Consultorio odontológico especializado en crear sonrisas radiantes" />
        <meta name="twitter:image" content="https://www.oraltechodontologia.com/favicon.ico" />

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
                    <div className="flex-grow flex items-center text-center mx-5 px-5 justify-center ">
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
