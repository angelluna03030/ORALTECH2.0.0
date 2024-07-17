import diente from "../assets/diente.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tik-tok.png";
import instragram from "../assets/instagram.png";
export const Iconos = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        marginRight: "50px",
      }}
      className="icons-lineal"
    >
      <ul className="example-2">
        <li className="">
          <a
            href="https://discord.com/"
            aria-label="Discord"
            data-social="discord"
          >
            <img src={diente} style={{ width: "120px" }} alt="Diente" />
            <img src={facebook} alt="Facebook"  style={{ width: "45px",       position : "relative", top : "-110px"}}/>
          </a>
        </li>
        <li className="">
          <a
            href="https://store.steampowered.com/"
            aria-label="Steam"
            data-social="steam"
          >
            <img src={diente} style={{ width: "120px" }} alt="Diente" />
            <img src={instragram} alt="Instragram"  style={{ width: "45px",       position : "relative", top : "-109px",left : "2px"}}/>
           
          </a>
        </li>
        <li className="">
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            data-social="instagram"
          >
            <img src={diente} style={{ width: "120px" }} alt="Diente" />
            <img src={tiktok} alt="tik-tok"  style={{ width: "45px",       position : "relative", top : "-110px" }}/>
          </a>
        </li>
      </ul>
    </div>
  );
};
