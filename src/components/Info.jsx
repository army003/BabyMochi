import React from "react";
import Jimmin from "../img/jimm.jpg";
const Info = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <img
            src={Jimmin}
            alt="/"
            className="w-[350px] mx-auto my-4 rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#00d] font-bold">Vocal</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Park Jimin
          </h1>
          <p className="">
            Park Ji-min (Korean: 박지민; born October 13, 1995), known
            mononymously as Jimin, is a South Korean singer and dancer. In 2013,
            he made his debut as a member of the South Korean boy group BTS,
            under the record label Big Hit Entertainment.
          </p>
          <button className="bg-black text-[#00d] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Learn more.
          </button>
          <iframe
            src="https://open.spotify.com/embed/track/2gzhQaCTeNgxpeB2TPllyY?utm_source=generator&theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-md max-w-xs"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Info;
