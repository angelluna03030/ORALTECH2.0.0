import React, { useState, useRef } from "react";
import video from "../assets/video.mp4";
import odoontolos from "../assets/49.jpg";

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
    <div className="play-button-container">
      {/* Imagen */}
      {isVisible && (
        <div
          style={{
            position: "relative",
            top: "-120px",
            borderRadius: "60px",
          }}
          className="imagen-video"
        >
          <img src={odoontolos} alt="Imagen" className="imagen-video-imagen" />
          <div
     
        className="banner-text"
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
      {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
      <video
        className="video"
        autoPlay
        controls
        loop={true}
        src={video}
        ref={videoRef}
        style={{
          width: "450px",
          borderRadius: "40px",
          // Oculta el video si no está reproduciéndose
          display: isPlaying ? "block" : "none",
        }}
      />
    </div>
  );
};
