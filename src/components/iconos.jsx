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
          style={{
        
          
            position : "relative",
            zIndex: 900
          }}
            href="https://www.bing.com/search?pglt=43&q=quizzes&cvid=687afced86464b9387e3e76ddb7d96f7&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARAAGEAyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEEUYPdIBCDQ3MDRqMGoxqAIAsAIA&FORM=ANNTA1&PC=HCTS&ntref=1"
            aria-label="Discord"
            data-social="discord"
          >
            <img src={diente} style={{ width: "120px",cursor: 'pointer' }} alt="Diente" />
            <img src={facebook} alt="Facebook"  style={{ width: "45px",       position : "relative", top : "-110px"}}/>
          </a>
        </li>
        <li className="">
          <a
           style={{
        
          
            position : "relative",
            zIndex: 900
          }}
            href="https://store.steampowered.com/"
            aria-label="Steam"
            data-social="steam"
          >
            <img src={diente} style={{ width: "120px", cursor: 'pointer', }} alt="Diente" />
            <img src={instragram} alt="Instragram"  style={{ width: "45px",       position : "relative", top : "-109px",left : "2px"}}/>
           
          </a>
        </li>
        <li className="">
          <a
      style={{
        position : "relative",
        zIndex: 900
      }}
            href="https://www.instagram.com/"
            aria-label="Instagram"
            data-social="instagram"
          >
            <img src={diente} style={{ width: "120px" ,cursor: 'pointer',}} alt="Diente" />
            <img src={tiktok} alt="tik-tok"  style={{ width: "45px",       position : "relative", top : "-110px" }}/>
          </a>
        </li>
      </ul>
    </div>
  );
};
