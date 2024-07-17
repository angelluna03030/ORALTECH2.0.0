import {
  Boton,
  Video,
  BotonUbicacion,
  Iconos,
  Sonrisa,
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
            zIndex: 99999,
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
        link="https://api.whatsapp.com/send?phone=573224130747&text=Hola, quisiera saber información sobre."
      />
      <h1 className="titulo">MEDELLÍN</h1>
      <Video />
      <Boton
        icono={iconWhatsapp}
        titulo="AGENDE SU CITA"
        link="https://api.whatsapp.com/send?phone=573224130747&text=Hola, quisiera saber información sobre."
      />
      <BotonUbicacion
        icono={maps}
        titulo="UBICACION"
        link="https://api.whatsapp.com/send?phone=573224130747&text=Hola, quisiera saber información sobre."
      />
      
      <Iconos />
      <Sonrisa />
    </>
  );
};

export default App;
