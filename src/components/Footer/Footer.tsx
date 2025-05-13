import Image from "next/image";
import facebook from "@/assets/webp/Recurso 10.webp";
import instagram from "@/assets/webp/Recurso 9.webp";
import x from "@/assets/webp/Recurso 8.webp";
import tiktok from "@/assets/webp/Recurso 7.webp";
import logo from "@/assets/webp/oraltech_logo_white.webp";
import telefono from "@/assets/webp/Recurso 11.webp";
import email from "@/assets/webp/Recurso 13.webp";

export const Footer = () => {
    return (
        <footer className="bg-[#28295F] py-16 relative z-10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Contact Information */}
                    <div className="text-white mb-6 md:mb-0 font-bold">
                        <div className="flex items-center mb-3">
                            <Image
                                src={telefono}
                                alt="Teléfono"
                                className="w-5 h-5 mr-2"
                                width={20}
                                height={20}
                                loading="lazy"
                                decoding="async"
                                title="telefono"
                            />
                            <span>322 413 0747-Cúcuta</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <Image
                                src={telefono}
                                alt="Teléfono"
                                className="w-5 h-5 mr-2"
                                width={20}
                                height={20}
                                loading="lazy"
                                decoding="async"
                                title="telefono"
                            />
                            <span>301 618 4618-Medellín</span>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src={email}
                                alt="Email"
                                className="w-5 h-5 mr-2"
                                width={20}
                                height={20}
                                loading="lazy"
                                decoding="async"
                                title="Email"
                            />
                            <span>Oraltech@gmail.com</span>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-11 mb-6 md:mb-0">
                        <a href="#" aria-label="Facebook">
                            <Image
                                src={facebook}
                                alt="Facebook"
                                className="w-10 h-11 hover:opacity-80 transition-opacity"
                                width={500}
                                height={500}
                                loading="lazy"
                                decoding="async"
                                title="Facebook"
                            />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Image
                                src={instagram}
                                alt="Instagram"
                                className="w-10 h-10 hover:opacity-80 transition-opacity"
                                width={500}
                                height={500}
                                loading="lazy"
                                decoding="async"
                                title="Instagram"
                            />
                        </a>
                        <a href="#" aria-label="X">
                            <Image
                                src={x}
                                alt="X"
                                className="w-10 h-10 hover:opacity-80 transition-opacity"
                                width={500}
                                height={500}
                                loading="lazy"
                                decoding="async"
                                title="X"
                            />
                        </a>
                        <a href="#" aria-label="TikTok">
                            <Image
                                src={tiktok}
                                alt="TikTok"
                                className="w-10 h-10 hover:opacity-80 transition-opacity"
                                width={500}
                                height={500}
                                loading="lazy"
                                decoding="async"
                                title="TikTok"

                            />
                        </a>
                    </div>
                    {/* Logo */}
                    <div className="text-center">
                        <Image
                            src={logo}
                            alt="OralTech Logo"
                            className="w-60 h-auto"
                            width={500}
                            height={500}
                            loading="lazy"
                            decoding="async"
                            title="Logo OralTech"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};