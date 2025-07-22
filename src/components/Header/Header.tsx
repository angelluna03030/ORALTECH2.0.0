"use client";
import { useState } from "react";
import Imagenlogo from "../../assets/webp/oraltech_logo.webp";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#46BEF0]/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
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
            <Link
              href="/"
              className="text-white hover:text-[#28295F] transition-colors font-medium"
            >
              Inicio
            </Link>
            <a
              href="#servicios"
              className="text-white hover:text-[#28295F] transition-colors font-medium"
            >
              Servicios
            </a>
            <Link
              href="#resultados"
              className="text-white hover:text-[#28295F] transition-colors font-medium"
            >
              Resultados
            </Link>
            <Link
              href="/about"
              id="nosotros"
              className="text-white hover:text-[#28295F] transition-colors font-medium"
            >
              Nosotros
            </Link>
            <Link
              href="/acount"
              className="text-white hover:text-[#28295F] transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="hidden sm:flex items-center justify-center  bg-[#28295F]  text-white font-semibold rounded-lg cursor-pointer h-10 w-40 shadow-lg transition-all  text-sm md:text-base px-6">
              <a
                href="https://wa.me/573224130747?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Cita
              </a>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden cursor-pointer p-2 text-white hover:text-[#28295F] transition-colors"
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
              <Link
                href="/"
                className="text-white hover:text-[#28295F] transition-colors font-medium py-2"
              >
                Inicio
              </Link>
              <a
                href="#servicios"
                className="text-white hover:text-[#28295F] transition-colors font-medium py-2"
              >
                Servicios
              </a>
              <a
                href="#resultados"
                className="text-white hover:text-[#28295F] transition-colors font-medium py-2"
              >
                Resultados
              </a>
              <Link
                href="/about"
                className="text-white hover:text-[#28295F] transition-colors font-medium py-2"
              >
                Nosotros
              </Link>
              <Link
                href="/acount"
                className="text-white hover:text-[#28295F] transition-colors font-medium py-2"
              >
                Contacto
              </Link>
              <a        
              
              href="https://wa.me/573224130747?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="sm:hidden bg-[#28295F] shadow-lg mt-3 text-white items-center justify-center font-semibold rounded-lg cursor-pointer h-10 w-40 transition-all text-sm md:text-base px-6">
                  Agendar Cita
                </button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
