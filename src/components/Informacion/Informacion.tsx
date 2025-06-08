"use client";
import Image from "next/image";
import { InformacionData } from "./index";

import { useEffect, useState } from "react";
function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      +{count.toLocaleString()}
      {suffix}
    </span>
  );
}
export const Informacion = () => {
  return (
    <section
      className="w-full py-16 px-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(21, 108, 175, 1) 0%, rgba(70, 190, 240, 1) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {InformacionData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image Container - Fixed size for consistency */}

              <div className="mb-6 flex justify-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
                  <Image
                    src={stat.src || "/placeholder.svg"}
                    alt={stat.alt}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px"
                    className="object-contain filter drop-shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Counter */}
              <div className="mb-2">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
                  <CountUp
                    end={stat.cantidad}
                    duration={1000}
                    suffix={stat.suffix}
                  />
                  <br />
                  <p className="text-white text-sm flex sm:text-base md:text-lg mr-12 font-semibold">
                    {stat.descripcion}
                  </p>
                </h2>
              </div>
              <div className="sm:mr-44  justify-start items-start text-start ">
                <p className=" text-start "></p>
              </div>

              {/* Label */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
