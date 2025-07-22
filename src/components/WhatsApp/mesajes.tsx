"use client";

import type React from "react";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Send } from "lucide-react";

// Importa tus assets
import IconoCarritoWhastApp from "../../assets/webp/whatsapp.webp";
import fondodemesagges from "../../assets/webp/fondodemessajes.webp";

import logo from "../../assets/webp/iconw.webp";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  companyName?: string;

  position?: "bottom-right" | "bottom-left";
  className?: string;
  showNotificationDot?: boolean;
  autoFocus?: boolean;
  theme?: "light" | "dark";
}

const CONSTANTS = {
  MAX_MESSAGE_LENGTH: 1000,
  WARNING_THRESHOLD: 800,
  CRITICAL_THRESHOLD: 950,
  ANIMATION_DURATION: 300,
} as const;

export const WhatsAppWidget = ({
  phoneNumber = "573224130747",
  companyName = "OralTech",
  position = "bottom-right",
  className = "",
  showNotificationDot = false,
  autoFocus = true,
  theme = "light",
}: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Memoized values
const currentTime = useMemo(
  () =>
    new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  [] // La hora actual no depende de isOpen
);
  const positionClasses = useMemo(
    () => ({
      button:
        position === "bottom-right" ? "bottom-4 right-4" : "bottom-4 left-4",
      chat:
        position === "bottom-right" ? "bottom-20 right-4" : "bottom-20 left-4",
    }),
    [position]
  );

  const messageStats = useMemo(
    () => ({
      length: message.length,
      isOverWarning: message.length > CONSTANTS.WARNING_THRESHOLD,
      isOverCritical: message.length > CONSTANTS.CRITICAL_THRESHOLD,
      canSend: message.trim().length > 0 && !isLoading,
    }),
    [message, isLoading]
  );

  const themeClasses = useMemo(
    () => ({
      header: theme === "dark" ? "bg-[#1f2937]" : "bg-[#075E54]",
      input:
        theme === "dark"
          ? "bg-[#374151] text-white"
          : "bg-[#d3d3d3] text-gray-900",
    }),
    [theme]
  );

  // Enhanced focus management
  useEffect(() => {
    if (isOpen && autoFocus && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, CONSTANTS.ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoFocus]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen]);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState && !hasInteracted) {
        setHasInteracted(true);
      }
      return newState;
    });
  }, [hasInteracted]);
const handleSendMessage = useCallback(async () => {
  if (!messageStats.canSend) return;

  setIsLoading(true);

  try {
    const cleanMessage = message.trim();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      cleanMessage
    )}`;

    const newWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!newWindow) {
      window.location.href = whatsappUrl;
    }

    setMessage("");
    setIsOpen(false);
    setHasInteracted(true); // Solo se llama, no se lee
  } catch (error) {
    console.error("Error opening WhatsApp:", error);
  } finally {
    setIsLoading(false);
  }
}, [message, phoneNumber, messageStats.canSend]); // Removido hasInteracted
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.length <= CONSTANTS.MAX_MESSAGE_LENGTH) {
        setMessage(value);
      }
    },
    []
  );

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        onClick={toggleChat}
        className={`
          fixed ${positionClasses.button} z-50 
          flex h-14 w-14 cursor-pointer items-center justify-center 
          rounded-full bg-[#25D366] shadow-lg 
          transition-all duration-300 ease-out
          hover:scale-110 hover:bg-[#20BA5A] hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2
          sm:h-16 sm:w-16
          ${className}
        `}
        role="button"
        tabIndex={0}
        aria-label={
          isOpen ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp"
        }
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleChat();
          }
        }}
      >
        {/* Notification dot */}
        {showNotificationDot && !hasInteracted && (
          <div className="absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full bg-red-500 border-2 border-white" />
        )}

        <div className="relative">
          <Image
            src={IconoCarritoWhastApp}
            alt="WhatsApp"
            width={32}
            height={32}
            className="h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-200"
            priority
          />
          {isOpen && (
            <div className="absolute inset-0 flex items-center justify-center"></div>
          )}
        </div>
      </div>

      {/* Chat Modal */}
      <div
        className={`
          fixed ${positionClasses.chat} z-40 
          w-80 max-w-[calc(100vw-2rem)]
          transition-all duration-300 ease-out
          ${
            isOpen
              ? "transform scale-100 opacity-100 translate-y-0"
              : "transform scale-95 opacity-0 translate-y-4 pointer-events-none"
          }
        `}
        ref={chatRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-chat-title"
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-black/5">
          {/* Header */}
          <div className={`flex items-center ${themeClasses.header} p-4`}>
            <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image
                src={logo}
                alt={`Logo de ${companyName}`}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 mb-3">
              <h3
                id="whatsapp-chat-title"
                className="text-sm  font-semibold text-white truncate"
              >
                {companyName}
              </h3>
              <p className="text-xs text-green-100 flex items-center">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                En línea
              </p>
            </div>
          </div>

          {/* Chat Body */}
          <div className="relative h-80">
            <Image
              src={fondodemesagges}
              alt=""
              fill
              className="object-cover"
              sizes="320px"
              priority={false}
            />

            <div className="relative z-10 flex h-full flex-col p-4">
              {/* Messages Area */}
              <div className="flex-1 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                <div className="flex justify-start animate-in slide-in-from-left-2 duration-500">
                  <div className="mt-16 max-w-[85%] rounded-lg bg-[#DCF8C6] p-3 shadow-sm border border-green-200">
                    <span className="mt-2 block text-lg text-gray-500 flex items-center justify-end">
                      Contáctanos. Servicio al cliente. OralTech. ¡Hola! 👋🏼 ¿En
                      qué te puedo ayudar?
                      <br></br>
                      {currentTime}
                      <svg
                        className="ml-1 h-3 w-3 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="mt-4 space-y-2">
                <div
                  className={`flex items-center space-x-2 rounded-full ${themeClasses.input} px-4 py-3 shadow-md border border-gray-200`}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 border-0 bg-transparent text-sm placeholder-gray-500 focus:outline-none"
                    disabled={isLoading}
                    aria-label="Escribir mensaje para WhatsApp"
                    aria-describedby="message-counter"
                  />

                  {/* Send Button */}
                  <button
                    onClick={handleSendMessage}
                    disabled={!messageStats.canSend}
                    className={`
                     
                      flex h-8 w-8 items-center justify-center rounded-full
                      transition-all duration-200
                      ${
                        messageStats.canSend
                          ? "bg-[#25D366]  cursor-pointer hover:bg-[#20BA5A] text-white shadow-sm hover:shadow-md"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }
                      focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-1
                    `}
                    aria-label="Enviar mensaje"
                    type="button"
                  >
                    {isLoading ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Character Counter */}
                {messageStats.isOverWarning && (
                  <div className="text-right" id="message-counter">
                    <span
                      className={`text-xs transition-colors ${
                        messageStats.isOverCritical
                          ? "text-red-500 font-medium"
                          : "text-amber-500"
                      }`}
                    >
                      {messageStats.length}/{CONSTANTS.MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleChat}
          aria-hidden="true"
        />
      )}
    </>
  );
};
