import Image from "next/image";
import facebook from "@/assets/webp/Recurso 10.webp";
import instagram from "@/assets/webp/Recurso 9.webp";
import x from "@/assets/webp/Recurso 8.webp";
import tiktok from "@/assets/webp/Recurso 7.webp";
import logo from "@/assets/webp/oraltech_logo_white.webp";
import telefono from "@/assets/webp/Recurso 11.webp";
import email from "@/assets/webp/Recurso 13.webp";
import { Mail, MapPin, Phone, Smile } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#28295F] via-[#28295F] to-[#28295F] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6 text-center md:text-left">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <a
                  href="#"
                  className="flex items-center text-primary hover:text-secondary"
                >
                  <Image alt="Imagen logo" width={160} src={logo}></Image>
                </a>
              </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
                Cuidando tu sonrisa con profesionalismo y tecnología de
                vanguardia desde hace más de 10 años. Tu salud dental es nuestra
                prioridad.
              </p>

              {/* Contact Info */}
            </div>

            {/* Quick Links */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Enlaces Rápidos
              </h3>
              <div className="space-y-3">
                <a
                  href="#inicio"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Inicio
                </a>
                <a
                  href="#servicios"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Servicios
                </a>
                <a
                  href="#resultados"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Resultados
                </a>
                <a
                  href="#nosotros"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Nosotros
                </a>
                <a
                  href="#contacto"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Contacto
                </a>
              </div>
            </div>

            {/* Services & Social */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Servicios
              </h3>
              <div className="space-y-3">
                <a
                  href="#inicio"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Diseño de Sonrisa
                </a>
                <a
                  href="#servicios"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Ortodoncia
                </a>
                <a
                  href="#resultados"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Microdiseño de Sonrisa
                </a>
                <a
                  href="#nosotros"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Limpieza Dental
                </a>
                <a
                  href="#contacto"
                  className="block text-gray-300 hover:text-[#46BEF0] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Blanqueamiento
                </a>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Síguenos
                </h4>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <a
                      href={
                        "https://www.facebook.com/people/Oral-Tech-Clinica-Dental/61559206031650/"
                      }
                    >
                      <span className="text-white font-bold text-sm">f</span>
                    </a>
                  </div>
                  <div className="w-10 h-10 bg-[#000] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <a href={"https://www.tiktok.com/@oraltechclinicadental"}>
                      <span className="text-white font-bold text-sm">t</span>
                    </a>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <a
                      href={"https://www.instagram.com/oraltech_clinicadental"}
                    >
                      <span className="text-white font-bold text-sm">i</span>
                    </a>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <a href={"https://www.youtube.com/@oraltechodontologia"}>
                      <span className="text-white font-bold text-sm">y</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm md:text-base text-gray-400 text-center md:text-left">
                <p>&copy; 2025 Oral Tech. Todos los derechos reservados.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#46BEF0] transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-[#46BEF0] transition-colors">
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
