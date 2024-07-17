import { Boton, Video, BotonUbicacion, Iconos, Sonrisa } from "./components/index";
import logo from "./assets/logo.png";
import iconWhatsapp from "./assets/whatsapp.png";
import maps from "./assets/mapas-y-banderas.png";
import dinetes from "./assets/dientes.svg";
import dinete2 from "./assets/dientes2.svg";
import dinete3 from "./assets/dientes3.svg";
import dinete4 from "./assets/dientes4.svg";
import dinete5 from "./assets/dientes5.svg";
import dinete6 from "./assets/dientes6.svg";
import dientecito from "./assets/dientecito.svg"
const App = () => {
  return (
    <>
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <div style={{
        marginRight : "50px",
      }}>
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <img
        src={logo}
        style={{
          width: "700px",
        }}
      />
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          src={dinetes}
          style={{
            width: "350px",
            // ajusta la posición vertical
            margin: "auto",
            position: "absolute",
            top: "500px",
            left: "500px",
            zIndex: -1, // establece el índice Z,
            transform: "rotate(175deg)",
          }}
        />
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          src={dinete2}
          style={{
            width: "470px",
            // ajusta la posición vertical
            margin: "auto",
            position: "absolute",
            top: "440px",
            left: "450px",
            zIndex: -2, // establece el índice Z,
            transform: "rotate(175deg)",
          }}
        />
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          src={dinete3}
          style={{
            width: "570px",
            // ajusta la posición vertical
            margin: "auto",
            position: "absolute",
            top: "390px",
            left: "400px",
            zIndex: -3, // establece el índice Z,
            transform: "rotate(175deg)",
          }}
        />
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          src={dinete4}
          style={{
            width: "670px",
            // ajusta la posición vertical
            margin: "auto",
            position: "absolute",
            top: "340px",
            left: "350px",
            zIndex: -4, // establece el índice Z,
            transform: "rotate(175deg)",
          }}
        />
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          src={dinete5}
          style={{
            width: "800px",
            // ajusta la posición vertical
            margin: "auto",
            position: "absolute",
            top: "290px",
            left: "300px",
            zIndex: -5, // establece el índice Z,
            transform: "rotate(175deg)",
          }}
        />
{/* biome-ignore lint/a11y/useAltText: <explanation> */}
<img
  src={dinete6}
  style={{
    width: "1200px", // Aumenta el ancho de la imagen
    margin: "auto",
    position: "absolute",
    top: "250px",
    left: "250px",
    zIndex: -10,
    transform: "rotate(175deg)",
  }}
/>
{/* <img
  src={dientecito}
  style={{
    width: "1000px", // Aumenta el ancho de la imagen
    margin: "auto",
    position: "absolute",
    top: "250px",
    left: "200px",
    zIndex: -11,
    transform: "rotate(175deg)",
  }}
/> */}

      </div>

 
      <center>
        <br />
        <br />

        <h1 className="titulo">CUCUTÁ</h1>
      </center>

      {/* biome-ignore lint/a11y/useAltText: <explanation> */}

      <Video />
      <br />
      <br />
      <br />

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
      <center>
        <br />
        <br />

        <h1 className="titulo">MEDELLÍN</h1>
        <Video />
        <br />
        <br />
        <br />

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
      </center>
      <center>
        <Iconos />
      </center>
      <center>
        <Sonrisa />
      </center>
    </>
  );
};

export default App;
