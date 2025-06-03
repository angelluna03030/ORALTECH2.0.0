import Image from "next/image";
import { MapPin, Phone, Clock, ArrowRight, Star } from "lucide-react";
import { locations } from "./index";
import placeholder from "../../assets/webp/placeholder.webp";
export const DentalLocations = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white " />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto ">
        {/* Enhanced Header */}
        <div className="text-center mb-28">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#28295F] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
            <Star className="w-4 h-4 fill-current text-[#28295F] " />
            Ubicaciones Premium
          </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#28295F] my-4 ">
          Nuestros Consultorios
        </h2>
          <p className="text-slate-600 w-full mx-auto text-lg leading-relaxed mb-3 pt-6">
            Dos espacios diseñados con la más alta tecnología y confort para
            brindarte una experiencia odontológica excepcional en cada visita.
          </p>
        </div>

        {/* Premium Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pt-20 ">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className=" relative bg-white/80 backdrop-[#28295F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Premium Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-white/90 backdrop-[#28295F] px-3 py-1 rounded-full text-xs font-medium text-slate-700 shadow-sm">
                  {location.subtitle}
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-[#28295F] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 fill-current" />
                  {location.rating} ({location.reviews})
                </div>
              </div>

              {/* Enhanced Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={location.image || placeholder.src}
                  alt={`Vista del ${location.name}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 backdrop-[#28295F] text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-light text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {location.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#28295F] from-teal-500 to-cyan-500 rounded-full" />
                </div>

                <div className="space-y-4 mb-8">
                  {/* Enhanced Address */}
                  <div className="flex items-start gap-4 group/item cursor-pointer">
                    <div className="w-10 h-10  bg-[#28295F] rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#46BEF0] transition-colors">
                      <MapPin
                        className="w-5 h-5  text-[#FFFFFFFF]  "
                        color="#FFFFFFFF"
                      />
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium">Dirección</p>
                      <p className="text-slate-600 text-sm mt-5">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Phone */}
                  <div className="flex items-start gap-4 group/item cursor-pointer">
                    <div className="w-10 h-10 bg-[#28295F] rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#46BEF0] transition-colors">
                      <Phone
                        className="w-5 h-5"
                        color="#FFFFFFFF"
                      />
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium">Teléfono</p>
                      <p className="text-slate-600 mt-5 text-sm   mb-5">
                        {location.phone}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Hours */}
                  <div className="flex items-start gap-4 group/item cursor-pointer">
                    <div className="w-10 h-10  bg-[#28295F] rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#46BEF0] transition-colors">
                      <Clock
                        className="w-5 h-5 text-blue-600"
                        color="#FFFFFFFF"
                      />
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium">Horarios</p>
                      <p className="text-slate-600 text-sm mt-5">
                        {location.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium CTA Buttons */}
                <div className="flex gap-3">
                  <button className=" cursor-pointer flex-1 bg-[#28295F] from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    Ver Ubicación
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="cursor-pointer px-6 py-3 border-2 border-slate-200 hover:border-[#46BEF0] text-slate-700 hover:text-[#46BEF0] rounded-xl font-medium transition-all duration-300 hover:bg-teal-50">
                    Llamar
                  </button>
                </div>
              </div>

              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
