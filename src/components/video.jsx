import React, { useState, useRef } from "react";
import video from "../assets/video.mp4";
import odoontolos from "../assets/odontologos.jpg";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
      setIsVisible(false);
    }
  };

  return (
    <div
      className="play-button-container"
      style={{ position: "relative", }}
    >
      {/* Imagen */}
      {isVisible && (
        <div
          style={{
            position: "relative",
            textAlign: "center",
            top: "-120px",
            borderRadius: "60px",
          }}
        >
          <img
            src={odoontolos}
            alt="Imagen"
            style={{
              borderRadius: "40px", // Arriba izquierda, arriba derecha, abajo derecha, abajo izquierda
              width: "900px",
              height: "350px",
            }}
          />
          <div
            style={{
              width: "585px",
              height: "100px",
              position: "relative",
              zIndex: "-10",
              bottom: "40px",
              left: "157px",

              borderRadius: "0px 0px 40px  40px",

              fontSize: "50px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              // biome-ignore lint/suspicious/noDuplicateObjectKeys: <explanation>
              background: "rgb(140,193,215)",
              background:
                "linear-gradient(90deg, rgba(140,193,215,1) 35%, rgba(100,174,199,1) 100%)",
            }}
          >
            PROMOCIÓN
          </div>
          {!isPlaying && (
            // biome-ignore lint/a11y/useButtonType: <explanation>
<button
              className="play-button"
              onClick={togglePlay}
              style={{
                position: "absolute",
                bottom: "200px",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 999, // Asegura que el botón esté encima de la imagen
              }}
            >
              {/* SVG del botón de reproducción */}
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#FFFFFF" />
                <path
                  d="M20 46V18L44 32L20 46Z"
                  fill="#007BFF"
                  stroke="#007BFF"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Video */}
      <video
        className="video"
        autoPlay
        controls
        loop={true}
        muted
        src={video}
        ref={videoRef}
        style={{
          width: "600px",
          borderRadius: "40px",
          // Oculta el video si no está reproduciéndose
          display: isPlaying ? "block" : "none",
        }}
      />
    </div>
  );
};
