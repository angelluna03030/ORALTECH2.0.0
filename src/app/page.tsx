"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import { ComponenteServicios } from "@/components/ComponenteImagenes";
import { Botones } from "@/components/Botones/Botones";
import "@/styles/globals.css";
import Banner from "@/assets/webp/Banner Sobre Nosotros.webp";
import { Informacion } from "@/components/Informacion";
import { DentalLocations } from "@/components/Ubicacion";
import { Footer } from "@/components/Footer";
import { Transformacionsetion } from "@/components/Transformacion";
import { Hero } from "@/components/Hero/Hero";
import { Video } from "@/components/video/Video";
import { WhatsAppWidget } from "@/components/WhatsApp";
import { TestimoniosSection } from "@/components/Testimonios";
export default function Home() {
  return (
    <div className="">
      <Header />
      <section className="flex flex-col items-center justify-center ">
        <Hero></Hero>
      </section>
      <Video></Video>

      <ComponenteServicios></ComponenteServicios>
      <p className="flex m-auto items-center justify-center mb-10 text-[#28295F] text-4xl md:text-5xl font-bold text-center w-full my-3">
        {" "}
        “Atención profesional, cómoda y segura”
      </p>
      <div className="flex flex-col items-center justify-center py-40">
        <Botones text="AGENDA TU CITA" url="/AGENDA TU CITA"></Botones>
      </div>

      <hr className="bg-[#3CADBD] w-full absolute h-4 border-none z-10" />
      <Transformacionsetion />
      <div className="w-full  px-4  lg:py-16">
        <div className="container mx-auto max-w-7xl">
          {/* Layout responsivo usando Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Sección del texto */}
            <div className="text-center">
              <h1 className="text-[#28295F] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                &quot;Atención profesional, cómoda y segura&quot;
              </h1>
            </div>

            {/* Sección del botón */}
            <div className="flex justify-center">
              <Botones
                text="RESERVA TU CONSULTA"
                url="/AGENDA TU CITA"
                className="w-full sm:w-auto text-sm sm:text-base"
              />
            </div>
          </div>
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
        ></Image>
      </section>
      <Informacion></Informacion>
      <DentalLocations></DentalLocations>
      <div className="flex flex-col items-center justify-center my-16">
        <Botones text=" AGENDA TU CITA" url=" AGENDA TU CITA"></Botones>
      </div>
      <hr className="bg-[#28295F] w-full absolute h-4 border-none z-10" />

      <TestimoniosSection></TestimoniosSection>
      <div className="flex flex-col items-center justify-center mb-10">
        <Botones text="TU SONRISA EMPIEZA AQUI" url=" AGENDA TU CITA"></Botones>
      </div>
      <WhatsAppWidget></WhatsAppWidget>
      <Footer></Footer>
    </div>
  );
}
