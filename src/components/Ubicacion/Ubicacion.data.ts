import { ComponenteImagenesProps } from "@/utils/Interface/interface";
import Cucuta from "@/assets/webp/Cúcuta ubicación.webp";
import Medellin from "@/assets/webp/Medellín Ubicación.webp";

 export  const Ubicaciones:ComponenteImagenesProps[] = [
    {
      src: Cucuta.src,
      alt: "Ubicación en Cúcuta",
      titulo: "Cúcuta",
      descripcion: "Ubicación en Cúcuta",
      direccion_google_maps: "https://www.google.com/maps/@7.8977619,-72.4908025,3a,86.1y,10.29h,84.52t/data=!3m7!1e1!3m5!1s6XSXqplLG0EMQyrDVbYHQQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D5.479259266623615%26panoid%3D6XSXqplLG0EMQyrDVbYHQQ%26yaw%3D10.287720010514676!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"

    },
    {
      src: Medellin.src,
      alt: "Ubicación en Medellín",
      titulo: "Medellín",
      descripcion: "Ubicación en Medellín",
       direccion_google_maps: "https://www.google.com/maps/place/TORRE+DANN+FINANCIERA/@6.2040115,-75.6165893,13.54z/data=!4m6!3m5!1s0x8e468280328c51df:0x75285d476c4e2fb1!8m2!3d6.2072801!4d-75.5709686!16s%2Fg%2F1pt_ym8y2?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"

    },

   
  ];