import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
        <p className="text-[#00d] font-bold p-2">WORLD DOMINATION PARK JIMIN</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          BABY MOCHI
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Sexy, cutie, lovely
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          'Jimin, you got no jams' @rkive
        </p>
        <button className="bg-[#00d] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Learn more.
        </button>
      </div>
    </div>
  );
};
export default Hero;
