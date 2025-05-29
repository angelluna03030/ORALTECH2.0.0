
import Cucuta from "@/assets/webp/Cúcuta ubicación.webp";
import Medellin from "@/assets/webp/Medellín Ubicación.webp";
 export  const locations = [
    {
      id: 1,
      name: "Consultorio Cucuta",
      subtitle: "Clínica Principal",
      address: "Calle 2 #9 Este-156, Quinta Oriental",
      phone: "+57 322 4130747",
      hours: "Lun - Sáb: 9:00 - 19:00",
      rating: 4.9,
      reviews: 127,
      image: Cucuta.src,
      features: ["Diseño de Sonrisa", "Cirugía", "Ortodoncia"],
    },
    {
      id: 2,
      name: "Consultorio Medellin",
      subtitle: "Sucursal Moderna",
      address: "Torre empresarial Dann Carlton Poblado. Piso 12, Consultorio 1202.",
      phone: "+57 322 4130747",
      hours: "Lun - Sáb: 9:00 - 19:00",
      rating: 4.8,
      reviews: 89,
      image: Medellin.src,
      features: ["Implantes", "Diseño de Sonrisa", "Micro Diseño"],
    },
  ]
