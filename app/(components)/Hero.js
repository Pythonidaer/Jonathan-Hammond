"use client";
import Image from "next/image";
import model from "../../public/michael-angelo-david-crop.png";

/* Hero Image should be redesigned, because it doesn't touch bottom of section container*/
const Hero = () => {
  return (
    <section
      className="flex justify-center items-center relative overflow-hidden h-screen bg-gradient-to-b from-white from-25% via-accent via-75% to-black min-h-[100vh] md:max-h-full h-svhcalc"
      id="page1"
    >
      <div className="fixed top-[1.2rem] md:top-[1rem] left-0 w-full mt-11">
        <h1 className="text-center uppercase py-5 font-mono    tracking-widest">
          <span className="text-6xl md:text-9xl text-accent">Jon</span>
          <span className="text-md inline-block text-1xl md:text-4xl transform rotate-90 relative top-[-12px] md:top-[-25px] text-accent">
            The
          </span>
          <span className="text-6xl md:text-9xl text-accent">Dev</span>
        </h1>
      </div>
      <Image
        src={model}
        alt="3D Render of Michaelangelos David"
        className="absolute bottom-0 transform translate-y-10  min-[400px]:max-[640px]:top-[7rem] md:top-[15rem] lg:top-[8rem] w-full sm:w-7/12 sm:top-[7.2rem] z-20"
      />
    </section>
  );
};

export default Hero;
