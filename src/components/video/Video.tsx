"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import imagenbanner from "@/assets/webp/bannervideo.webp";
export const Video =()=> {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

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

  // Manejar click en la barra de progreso
  const handleProgressClick = (e: { preventDefault?: any; clientX?: number; }) => {
    e.preventDefault();
    if (!videoRef.current || !duration) return;

    const clickProgress = getProgressFromEvent(e);
    const newTime = (clickProgress / 100) * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(clickProgress);
  };

  // Iniciar arrastre
  const handleMouseDown = (e: { preventDefault: any; clientX?: number | undefined; }) => {
    e.preventDefault();
    setIsDragging(true);
    handleProgressClick(e);
  };

  // Durante el arrastre
  const handleMouseMove = (e: { preventDefault?: any; clientX?: number; }) => {
    if (!isDragging || !videoRef.current || !duration) return;
    
    e.preventDefault();
    const newProgress = getProgressFromEvent(e);
    const newTime = (newProgress / 100) * duration;
    
    setProgress(newProgress);
    setCurrentTime(newTime);
  };

  // Finalizar arrastre
  const handleMouseUp = (e: { preventDefault?: any; clientX?: number; }) => {
    if (!isDragging || !videoRef.current) return;
    
    e.preventDefault();
    setIsDragging(false);
    
    const finalProgress = getProgressFromEvent(e);
    const newTime = (finalProgress / 100) * duration;
    
    videoRef.current.currentTime = newTime;
  };

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
  }, [isDragging, duration]);

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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Nuestro espacio de <span className="underline decoration-gray-300 underline-offset-4">Trabajo</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Disfruta de mayor comodidad y seguridad en nuestra clínica, ubicada en el corazón del barrio más
                exclusivo de Medellin.
              </p>
            </div>
          </div>

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
                poster={imagenbanner.src} width={500}
                height={300}
                className="w-full h-[300px] object-cover"
                onEnded={handleVideoEnd}
                onError={handleVideoError}
                onLoadStart={() => setIsLoading(true)}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                preload="metadata"
                playsInline
              />

              {/* Play/Pause Button Overlay */}
              {(!isPlaying || showControls) && (
                <div 
                  className={`absolute inset-0 flex items-center  justify-center transition-opacity duration-300 ${
                    !isPlaying ? 'bg-black/10' : 'bg-transparent'
                  }`}
                >
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      disabled={isLoading}
                      className="group relative w-16 h-16 rounded-full cursor-pointer bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 active:scale-95 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-black/5"></div>
                      <div className="relative flex items-center justify-center w-full h-full">
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Play className="w-5 h-5 cursor-pointer text-gray-800 fill-gray-800 ml-0.5 transition-colors duration-200 group-hover:text-gray-900" />
                        )}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </button>
                  )}
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
    </div>
  );
}