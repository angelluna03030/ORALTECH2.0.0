"use client";
import { Header } from "@/components/Header";
import ImagenDiente from "@/assets/webp/image.webp";
import Image from "next/image";
import { ComponenteServicios } from "@/components/ComponenteImagenes";
import { Botones } from "@/components/Botones/Botones";
import Sonrisa from "@/assets/webp/sonrisa.webp";
import "@/styles/globals.css";
import { BeforeAfterSliderImage } from "@/components/TransicionImagenes";
import PrimeroImagen from "@/assets/webp/imagen1.webp";
import SegundaImagen from "@/assets/webp/imagen2.webp";
import Banner from "@/assets/webp/Banner Sobre Nosotros.webp";
import Bannerprincipal from "@/assets/webp/banner.webp";
import { Informacion } from "@/components/Informacion";
import { Ubicacion } from "@/components/Ubicacion";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div className="">
      <Header />
      <section className="flex flex-col items-center justify-center ">
        <Image
          src={Bannerprincipal}
          alt="Banner de OralTech"
          loading="lazy"
          decoding="async"
          title="Banner de OralTech"
          className="w-full h-auto object-cover mt-14 cursor-pointer"
        ></Image>
      </section>
      <div className="relative flex flex-col items-center justify-center h-28 sm:my-10">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#272863] z-20">
          Nuestros servicios
        </p>
        <Image
          loading="lazy"
          title="Imagen diente"
          src={ImagenDiente}
          alt="Imagen diente"
          className="absolute left-13 lg:left-88 w-14 md:w-20 lg:w-30 z-10 justify-items-start items-start"
        />
      </div>
      <ComponenteServicios></ComponenteServicios>
      <p className="flex m-auto items-center justify-center text-[#1462A7] text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full my-3">
        {" "}
        “Atención profesional, cómoda y segura”
      </p>
      <div className="flex flex-col items-center justify-center my-30">
        <Botones text="AGENDA TU CITA" url="/AGENDA TU CITA"></Botones>
      </div>
      <Image
        className="responsive-smile-image"
        alt="Sonrisa saludable de paciente satisfecho"
        loading="lazy"
        decoding="async"
        title="Sonrisa perfecta después de tratamiento dental"
        src={Sonrisa}
        placeholder="blur"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
        quality={80}
      />
      <hr className="bg-[#3CADBD] w-full absolute h-4 border-none z-10" />
      <div className="relative flex flex-col items-center justify-center h-28 mt-52  ">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#272863] z-20">
          Transformación en OralTech
        </p>
        <Image
          loading="lazy"
          title="Imagen diente"
          src={ImagenDiente}
          alt="Imagen diente"
          className="absolute right-0 lg:right-52 w-14 md:w-20 lg:w-30 z-10 justify-items-start items-start"
        />
      </div>

      <section className="flex flex-wrap justify-evenly items-center   ">
        <div className="w-full md:w-1/2 lg:w-5/12 p-3">
          <BeforeAfterSliderImage
            descripcion="Imagenes de referencia"
            titulo="Imagenes de referencia"
            alt="Imagenes de referencia"
            srcImagenBefore={SegundaImagen.src}
            srcImagenafter={PrimeroImagen.src}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-5/12 p-2">
          <BeforeAfterSliderImage
            descripcion="Imagenes de referencia"
            titulo="Imagenes de referencia"
            alt="Imagenes de referencia"
            srcImagenBefore={SegundaImagen.src}
            srcImagenafter={PrimeroImagen.src}
          />
        </div>
      </section>

      <div className="flex items-center justify-center  w-full absolute my-10 ">
        <p className="text-[#1462A7] relative  text-2xl md:text-3xl  sm:w-2/6 w-full lg:text-4xl font-bold sm:left-20 sm:ml-40">
          “Atención profesional, cómoda y segura”
        </p>

        <Botones
          text=" RESERVA TU CONSULTA"
          url="/AGENDA TU CITA"
          className="relative sm:left-60 mt-32 sm:mt-0"
        ></Botones>
      </div>
      <section className="flex flex-col items-center justify-center pt-40">
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
      <div className="relative flex flex-col items-center justify-center h-28 sm:my-10">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#272863] z-20">
          Ubicación
        </p>
        <Image
          loading="lazy"
          title="Imagen diente"
          src={ImagenDiente}
          alt="Imagen diente"
          className="absolute left-28 lg:left-4/12 w-14 md:w-20 lg:w-30 z-10 justify-items-start items-start"
        />
      </div>

      <Ubicacion></Ubicacion>

      <div className="flex flex-col items-center justify-center my-16">
        <Botones text=" AGENDA TU CITA" url=" AGENDA TU CITA"></Botones>
      </div>
      <hr className="bg-[#3CADBD] w-full absolute h-4 border-none z-10" />

      <div className="relative flex flex-col items-center justify-center h-28 py-32  w-3/5 m-auto ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-[#272863] z-20">
          Testimonios de nuestros pacientes
        </p>
        <Image
          loading="lazy"
          title="Imagen diente"
          src={ImagenDiente}
          alt="Imagen diente"
          className="absolute right-0 lg:right-0 w-14 md:w-20 lg:w-30 z-10 "
        />
      </div>

      <div className="flex flex-col items-center justify-center my-16">
        <Botones text="TU SONRISA EMPIEZA AQUI" url=" AGENDA TU CITA"></Botones>
      </div>
      <Image
        className="responsive-smile-image-2"
        alt="Sonrisa saludable de paciente satisfecho"
        loading="lazy"
        decoding="async"
        title="Sonrisa perfecta después de tratamiento dental"
        src={Sonrisa}
        placeholder="blur"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
        quality={80}
      />
      <Footer></Footer>
    </div>
  );
}
