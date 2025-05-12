import Image from "next/image";
import { InformacionData } from "./index";
export const Informacion = () => {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center w-full h-48"
        style={{
          background:
            "linear-gradient(90deg,rgba(21, 108, 175, 1) 0%, rgba(70, 190, 240, 1) 50%)",
        }}
      >
        <div className="item">
          <p>
            <Image></Image>
          </p>
        </div>
      </section>
    </>
  );
};
