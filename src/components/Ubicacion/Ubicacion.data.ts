
import Cucuta from "@/assets/webp/Cúcuta ubicación.webp";
import Medellin from "@/assets/webp/Medellín Ubicación.webp";
 export  const locations = [
    {
      id: 1,
      name: "Consultorio Cucuta",
      subtitle: "Clínica Principal",
      address: "Av. Principal 123, Centro Histórico",
      phone: "+1 (555) 123-4567",
      hours: "Lun - Sáb: 8:00 - 18:00",
      rating: 4.9,
      reviews: 127,
      image: Cucuta.src,
      features: ["Diseño de Sonrisa", "Cirugía", "Ortodoncia"],
    },
    {
      id: 2,
      name: "Consultorio Medellin",
      subtitle: "Sucursal Moderna",
      address: "Calle Secundaria 456, Zona Norte Premium",
      phone: "+1 (555) 987-6543",
      hours: "Lun - Sáb: 8:00 - 18:00",
      rating: 4.8,
      reviews: 89,
      image: Medellin.src,
      features: ["Implantes", "Diseño de Sonrisa", "Micro Diseño"],
    },
  ]
