import Image from "next/image";
import IconoCarritoWhastApp from "../../assets/webp/whatsapp.webp"

export const IconWhastApp = () => {
  return (
    <>
      <div className='z-40 fixed bottom-4 right-4 bg-[#26C281] rounded-full sm:w-16 sm:h-16 flex items-center justify-center shadow-md  cursor-pointer transition duration-300 w-14 h-14 border-x-slate-100 shadow-[#ffffff]'>
        <Image
          loading='lazy'
          decoding='async'
          title='Carrito de Compras'
          src={IconoCarritoWhastApp.src}
          alt='Carrito de Compras'
          className='sm:w-8 sm:h-8 w-6 h-6'
        />
      </div>
    </>
  );
};
