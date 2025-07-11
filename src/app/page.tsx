"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import { ComponenteServicios } from "@/components/ComponenteImagenes";
import { Botones } from "@/components/Botones/Botones";
import "@/styles/globals.css";
import "../assets/globals.css";
import Banner from "@/assets/webp/Banner Sobre Nosotros.webp";
import { Informacion } from "@/components/Informacion";
import { Ubicacion } from "@/components/Ubicacion";
import { Footer } from "@/components/Footer";
import { Transformacionsetion } from "@/components/Transformacion";
import { Video } from "@/components/video/Video";
import { WhatsAppWidget } from "@/components/WhatsApp";
import { TestimoniosSection } from "@/components/Testimonios";
import { DentalServices } from "@/components/ComponenteImagenes/ComponenIcon";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Video />
      <br />

      <ComponenteServicios></ComponenteServicios>
      <p className="flex m-auto items-center justify-center  text-[#28295F] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center w-full my-3">
        {" "}
        “Atención profesional, cómoda y segura”
      </p>

      <div className="flex flex-col items-center justify-center py-20">
        <DentalServices></DentalServices>
      </div>

      <hr className="bg-[#3CADBD] w-full absolute h-4 border-none z-10" />
      <Transformacionsetion />

      {/* Layout responsivo usando Grid */}
      <div className="grid grid-cols-1 sm:pl-10 pr-1 lg:grid-cols-2 gap-8 w-full lg:gap-12 items-center justify-center text-center ">
        {/* Sección del texto */}
        <div className="text-center w-full lg:w-auto ">
          <h1 className="text-[#28295F] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            &quot;Atención profesional, cómoda y segura&quot;
          </h1>
        </div>
        {/* Sección del botón */}
        <div className=" justify-center">
          <Botones
            text="RESERVA TU CONSULTA"
            url="https://wa.me/573224130747?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita."
            className="w-full sm:w-auto text-sm sm:text-base max-w-xs"
          />
        </div>
      </div>

      <section className="flex flex-col items-center justify-center ">
        <Image
          src={Banner}
          alt="Banner de OralTech"
          loading="lazy"
          decoding="async"
          title="Banner Sobre Nosotros"
          className="w-full h-auto object-cover mt-20 cursor-pointer"
        />
      </section>

      <Informacion />
      
      <Ubicacion />
      
      <div className="flex flex-col items-center justify-center my-16">
        <Botones text=" AGENDA TU CITA" url="https://wa.me/573016184618?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita." />
      </div>
      
      <hr className="bg-[#3CADBD] w-full absolute h-4 border-none z-10" />

      <TestimoniosSection />
      
      <div className="flex flex-col items-center justify-center mb-10">
        <Botones text="TU SONRISA EMPIEZA AQUI"   url="https://wa.me/573224130747?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita." />
      </div>
      
      <WhatsAppWidget />
      
      <Footer />
    </div>
  );
}
