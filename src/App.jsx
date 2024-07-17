import {
  Boton,
  Video,
  BotonUbicacion,
  Iconos,
  Sonrisa,
  BotonMedellin
} from "./components/index";
import logo from "./assets/logo.png";
import iconWhatsapp from "./assets/whatsapp.png";
import maps from "./assets/mapas-y-banderas.png";
import dinetes from "./assets/dientes.svg";
import dinete2 from "./assets/dientes2.svg";
import dinete3 from "./assets/dientes3.svg";
import dinete4 from "./assets/dientes4.svg";
import dinete5 from "./assets/dientes5.svg";
import dinete6 from "./assets/dientes6.svg";
import dientecito from "./assets/dientecito.svg";
const App = () => {
  return (
    <>
      <div
        style={{
          width: "700px",
          margin: "0 auto",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          src={logo}
          style={{
            width: "500px",
            height: "180px",
            zIndex: 99,
          }}
        />
      </div>
      <div className="container">
        {/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
        <img src={dinetes} className="image image-1" alt="Image 1" />
        {/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
        <img src={dinete2} className="image image-2" alt="Image 2" />
        {/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
        <img src={dinete3} className="image image-3" alt="Image 3" />
        {/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
        <img src={dinete4} className="image image-4" alt="Image 4" />
        {/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
        <img src={dinete5} className="image image-5" alt="Image 5" />
        {/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
        <img src={dinete6} className="image image-6" alt="Image 6" />
      </div>
      <h1 className="titulo">CUCUTÁ</h1>
      <Video />
      <Boton
        icono={iconWhatsapp}
        titulo="AGENDE SU CITA"
        link="https://api.whatsapp.com/send?phone=573224130747&text=Hola, quisiera saber información sobre."
      />
      <BotonUbicacion
        icono={maps}
        titulo="UBICACION"
        link="https://www.google.com/maps/place/Cl+2+%239e80,+Quinta+Oriental,+Cúcuta,+Norte+de+Santander/@7.8977635,-72.490802,3a,75y,5.45h,68.88t/data=!3m6!1e1!3m4!1s6XSXqplLG0EMQyrDVbYHQQ!2e0!7i16384!8i8192!4m7!3m6!1s0x8e664512041c2cd9:0x1c5f10ebd8b71a2!8m2!3d7.8978775!4d-72.4913395!10e5!16s%2Fg%2F11jdmhbl3g"
      />
      <h1 className="titulo">MEDELLÍN</h1>
      <Video />
      
      <BotonMedellin
        icono={iconWhatsapp}
        titulo="AGENDE SU CITA"
        link="https://api.whatsapp.com/send?phone=573016184618&text=Hola, quisiera saber información sobre."
      />
      <BotonUbicacion
        icono={maps}
        titulo="UBICACION"
        link="https://www.google.com/maps/place/Centro+Empresarial+Dann+-+Torre+Dann/@6.2071307,-75.5715028,17.5z/data=!4m6!3m5!1s0x8e468281d507240f:0x1b5906f8523b9305!8m2!3d6.2072299!4d-75.5710209!16s%2Fg%2F1hf2lyz6l?hl=es"
      />

      <Iconos />
      <Sonrisa />
    </>
  );
};

export default App;
