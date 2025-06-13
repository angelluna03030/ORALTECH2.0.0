"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import imagenbanner from "@/assets/webp/bannervideo.webp";
import { formatTime } from "@/utils/format/timeformat";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [buffered, setBuffered] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);

  // Formatear tiempo en mm:ss

  // Actualizar progreso del video
  const handleTimeUpdate = () => {
    if (!videoRef.current || isDragging) return;

    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;

    if (total > 0) {
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }

    // Actualizar buffer
    if (videoRef.current.buffered.length > 0) {
      const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
      setBuffered((bufferedEnd / total) * 100);
    }
  };

  // Cuando se carga la metadata del video
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    setIsLoading(false);
  };

  // Calcular posición desde el evento
  const getProgressFromEvent = (e: { clientX?: number }) => {
    if (!progressBarRef.current || typeof e.clientX !== "number") return 0;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    return Math.max(0, Math.min(100, (clickX / width) * 100));
  };

  interface MouseEventWithClient {
    preventDefault(): void;
    clientX: number;
  }

  // Manejar click en la barra de progreso
  const handleProgressClick = (e: MouseEventWithClient) => {
    e.preventDefault();
    if (!videoRef.current || !duration) return;

    const clickProgress = getProgressFromEvent(e);
    const newTime = (clickProgress / 100) * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(clickProgress);
  };

  // Iniciar arrastre
  const handleMouseDown = (e: MouseEventWithClient) => {
    e.preventDefault();
    setIsDragging(true);
    handleProgressClick(e);
  };

  // Durante el arrastre
  const handleMouseMove = useCallback((e: MouseEventWithClient) => {
    if (!isDragging || !videoRef.current || !duration) return;
    
    e.preventDefault();
    const newProgress = getProgressFromEvent(e);
    const newTime = (newProgress / 100) * duration;
    
    setProgress(newProgress);
    setCurrentTime(newTime);
  }, [isDragging, duration]);

  // Finalizar arrastre
  const handleMouseUp = useCallback((e: MouseEventWithClient) => {
    if (!isDragging || !videoRef.current) return;
    
    e.preventDefault();
    setIsDragging(false);
    
    const finalProgress = getProgressFromEvent(e);
    const newTime = (finalProgress / 100) * duration;
    
    videoRef.current.currentTime = newTime;
  }, [isDragging, duration]);

  // Efectos para manejar eventos globales de mouse
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Estado para manejar si el video está muteado
  const [isMuted, setIsMuted] = useState(true);

  // Efecto para manejar autoplay
  useEffect(() => {
    const handleAutoplay = async () => {
      if (videoRef.current) {
        try {
          // Primero intentamos con sonido
          videoRef.current.muted = false;
          await videoRef.current.play();
          setIsPlaying(true);
          setIsMuted(false);
        } catch (error) {
          console.log('Autoplay con sonido bloqueado, intentando mudo:', error);
          try {
            // Si falla, intentamos sin sonido
            videoRef.current.muted = true;
            await videoRef.current.play();
            setIsPlaying(true);
            setIsMuted(true);
          } catch (mutedError) {
            console.log('Autoplay completamente bloqueado:', mutedError);
            setIsPlaying(false);
          }
        }
      }
    };

    // Intentar autoplay cuando el componente se monta
    const timer = setTimeout(handleAutoplay, 100);
    return () => clearTimeout(timer);
  }, []);

  // Función para activar sonido después de interacción del usuario
  const unmute = async () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      
      // Si el video no está reproduciéndose, lo iniciamos
      if (!isPlaying) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Error al reproducir con sonido:', error);
        }
      }
    }
  };

  const togglePlay = async () => {
    if (!videoRef.current) return;

    setIsLoading(true);

    try {
      if (isPlaying) {
        await videoRef.current.pause();
        setIsPlaying(false);
      } else {
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error playing video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    console.error("Error loading video");
  };

  // Manejar cuando el video empieza a reproducirse
  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Manejar cuando el video se pausa
  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="h-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full">
        {/* Video Section */}
        <div className="relative sm:mt-0 mt-16">
          <div 
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/do8uezira/video/upload/v1748234806/g9hjyahttickdexbx16n.mp4"
              poster={imagenbanner.src} 
              width={500}
              height={300}
              className="w-full object-cover"
              onEnded={handleVideoEnd}
              onError={handleVideoError}
              onLoadStart={() => setIsLoading(true)}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onPlay={handlePlay}
              onPause={handlePause}
              preload="metadata"
              playsInline
              autoPlay={true}
              muted={true} // Iniciamos mudo para permitir autoplay
              loop={false}
            />
            
            {/* Notificación de sonido desactivado */}
            {isMuted && isPlaying && (
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2 backdrop-blur-sm">
                <VolumeX className="w-4 h-4" />
                <span>Toca para activar sonido</span>
                <button 
                  onClick={unmute}
                  className="ml-2 bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition-colors"
                >
                  Activar
                </button>
              </div>
            )}
            
            {/* Video Controls (estilo Apple) */}
            <div 
              className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-8">
                {/* Barra de progreso mejorada */}
                <div className="mb-3">
                  <div
                    ref={progressBarRef}
                    className="relative h-1 bg-white/30 rounded-full cursor-pointer group hover:h-1.5 transition-all duration-200"
                    onMouseDown={handleMouseDown}
                    onClick={handleProgressClick}
                  >
                    {/* Barra de buffer */}
                    <div
                      className="absolute top-0 left-0 h-full bg-white/50 rounded-full transition-all duration-300"
                      style={{ width: `${buffered}%` }}
                    />
                    
                    {/* Barra de progreso */}
                    <div
                      className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-100 group-hover:bg-blue-400"
                      style={{ width: `${progress}%` }}
                    >
                      {/* Indicador circular (solo visible en hover o drag) */}
                      <div 
                        className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transition-all duration-200 ${
                          isDragging || showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Controles inferiores */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white fill-white cursor-pointer" />
                      ) : (
                        <Play className="w-5 h-5 text-white fill-white ml-0.5 cursor-pointer" />
                      )}
                    </button>

                    {/* Botón de sonido */}
                    <button
                      onClick={isMuted ? unmute : () => {
                        if (videoRef.current) {
                          videoRef.current.muted = true;
                          setIsMuted(true);
                        }
                      }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
                      aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white cursor-pointer" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white cursor-pointer" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm font-medium bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                      {formatTime(currentTime)}
                    </span>
                    <span className="text-white/70 text-sm">/</span>
                    <span className="text-white/70 text-sm font-medium">
                    2:44
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};