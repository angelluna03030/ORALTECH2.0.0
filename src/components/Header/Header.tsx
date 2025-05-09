"use client"
import { useState } from 'react';
import Imagenlogo from '../../assets/webp/Recurso 6.webp';
import Image from 'next/image';
export const Header = () => {
    // Estados para controlar los menús
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    // Manejadores de eventos
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    return (
        <header className="bg-[#47C1F0] shadow-lg py-4 sticky top-0 z-50 text-xl">
            <div className="container mx-auto flex items-center justify-between px-4">
                <a href="#" className="flex items-center text-primary hover:text-secondary">
                   <Image alt='Imagen logo' width={160} src={Imagenlogo}></Image>
                </a>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}
                        className="text-white hover:text-primary focus:outline-none transition-colors duration-300">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex space-x-8 mx-10">
                        <li><a href="#" className="text-white transition-colors duration-300    relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Inicio</a></li>
                        <li><a href="#" className="text-white transition-colors duration-300    relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Servicios</a></li>
                        <li><a href="#" className="text-white transition-colors duration-300     relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Resultados</a></li>
                        <li><a href="#" className="text-white transition-colors duration-300    relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Sobre nosotros </a></li>
                        <li><a href="#" className="text-white transition-colors duration-300    relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Ubicación</a></li>
                       
                    </ul>
                </nav>
            </div>

            <nav 
                className={`md:hidden bg-[#47C1F0]  transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <ul className="px-4 py-2">
                    <li><a href="#" className="text-white transition-colors duration-300 sm:mx-8  mx-2  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Inicio</a></li>
                        <li><a href="#" className="text-white transition-colors duration-300 sm:mx-8  mx-2  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Servicios</a></li>
                        <li><a href="#" className="text-white transition-colors duration-300 sm:mx-8  mx-2  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Resultados</a></li>
                        <li><a href="#" className="text-white transition-colors duration-300 sm:mx-8  mx-2  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Sobre nosotros </a></li>
                        <li><a href="#" className="text-white transition-colors duration-300 sm:mx-8  mx-2  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Ubicación</a></li>
                       
                </ul>
            </nav>
        </header>
    );
}