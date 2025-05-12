"use client"
import Image from "next/image"
import DiseñoSonrisa from "@/assets/webp/Diseño de Sonrisa.webp"
import MicroDiseño from "@/assets/webp/Microdiseño de Sonrisa.webp"
import Blanquimineto from "@/assets/webp/Blanqueamiento.webp"
import LimpiezaDental from "@/assets/webp/Limpieza dental.webp"
import Ortodoncia from "@/assets/webp/Ortodoncia.webp"

export const ComponenteServicios = () => {
    const servicios = [
        {
            src: DiseñoSonrisa,
            alt: "Diseño de Sonrisa",
            titulo: "Diseño de Sonrisa",
            descripcion: "Mejora la estética de tu sonrisa"
        },
        {
            src: Ortodoncia,
            alt: "Tratamiento de ortodoncia con alineadores transparentes",
            titulo: "Ortodoncia",
            descripcion: "Alineación perfecta para tus dientes"
        },
        {
            src: MicroDiseño,
            alt: "Microdiseño de Sonrisa con técnicas avanzadas",
            titulo: "Microdiseño de Sonrisa",
            descripcion: "Detalles que transforman tu sonrisa"
        },
        {
            src: LimpiezaDental,
            alt: "Procedimiento profesional de limpieza dental",
            titulo: "Limpieza Dental",
            descripcion: "Higiene profesional para una boca sana"
        },
        {
            src: Blanquimineto,
            alt: "Procedimiento de blanqueamiento dental profesional",
            titulo: "Blanqueamiento",
            descripcion: "Dientes más blancos y brillantes"
        },
      
    ];
    
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-10 px-4 max-w-7xl mx-auto"
        
        style={{
            justifyContent:"space-evenly",
            flexDirection:"row",
            alignItems:"center",
            display:"flex",
            flexWrap:"wrap",
            
        }}
        >
            {servicios.map((servicio, index) => (
                <figure key={index} className="relative w-full max-w-sm overflow-hidden group cursor-pointer m-auto flex flex-col items-center justify-center">
                    <div className="aspect-square relative rounded-4xl overflow-hidden w-full h-full">
                        <Image
                            src={servicio.src}
                            alt={servicio.alt}
                            loading="lazy"
                            decoding="async"
                            title={servicio.alt}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradiente superpuesto para mejorar la legibilidad del texto */}
                       
                    </div>
                </figure>
            ))}
        </section>
    );
}