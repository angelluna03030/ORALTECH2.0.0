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
            href="https://www.facebook.com/Oraltechpage/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0https://www.facebook.com/tu_pagina_de_facebook"
            aria-label="Facebook"
            data-social="Facebook"
          >
            <img src={diente} style={{ width: "120px",cursor: 'pointer' }} alt="Diente" />
            <img src={facebook} alt="Facebook"  style={{ width: "45px",       position : "relative", top : "-110px"}}/>
          </a>
        </li>
        <li className="">
          <a
           style={{
        
          backgroundColor : "white",
            position : "relative",
            zIndex: 9
          }}
            href="https://www.instagram.com/oraltech_clinicadental/?igshid=MWI4MTIyMDE%3D"
            aria-label="Instragram"
            data-social="Instragram"
          >
            <img src={diente} style={{ width: "120px", cursor: 'pointer', }} alt="Diente" />
            <img src={instragram} alt="Instragram"  style={{ width: "45px",       position : "relative", top : "-109px",left : "2px"}}/>
           
          </a>
        </li>
        <li className="">
          <a
      style={{
        position : "relative",
        zIndex: 90
      }}
            href="https://www.tiktok.com/@oraltechclinicadental"
            aria-label="tik-tok"
            data-social="tik-tok"
          >
            <img src={diente} style={{ width: "120px" ,cursor: 'pointer',}} alt="Diente" />
            <img src={tiktok} alt="tik-tok"  style={{ width: "45px",       position : "relative", top : "-110px" }}/>
          </a>
        </li>
      </ul>
    </div>
  );
};
