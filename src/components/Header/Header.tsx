"use client";
import { useState } from "react";
import Imagenlogo from "../../assets/webp/oraltech_logo.webp";
import Image from "next/image";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              <a
                href="#"
                className="flex items-center text-primary hover:text-secondary"
              >
                <Image alt="Imagen logo" width={160} src={Imagenlogo}></Image>
              </a>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a
              href="#inicio"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Servicios
            </a>
            <a
              href="#resultados"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Resultados
            </a>
            <a
              href="#nosotros"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-3">
           <button className="hidden sm:flex items-center justify-center  bg-[#46BEF0]  text-white font-semibold rounded-lg cursor-pointer h-10 w-40 shadow-lg transition-all  text-sm md:text-base px-6">
  Agendar Cita
</button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3 pt-4">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Servicios
              </a>
              <a
                href="#resultados"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Resultados
              </a>
              <a
                href="#nosotros"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Contacto
              </a>
              <button className="sm:hidden bg-[#46BEF0] shadow-lg mt-3 text-white items-center justify-center font-semibold rounded-lg cursor-pointer h-10 w-40  transition-all  text-sm md:text-base px-6">
                Agendar Cita
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
