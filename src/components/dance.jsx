import React, { useState } from "react";
import Banner from "../img/f6914d53267ff1bf9b9f0c399cf8f105.jpg";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
function Dance() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="relative">
      <div className="max-w-[100vw] bg-inu-bg  md:h-[100vh] h-[80vh]"></div>
      <div className="w-[100vw] md:h-[100vh] h-[80vh] absolute top-0 bg-[rgba(7,7,7,0.46)] flex items-center ">
        <div className="md:w-[90vw] w-[80vw] grid md:grid-cols-2 items-center justify-center ">
          <div className="text-white font-serif text-4xl font-bold  mx-auto flex flex-col justify-center items-center md:ml-0 pl-[18vw]">
            <h2 className="text-center mb-5 ">
              I need you
              <br />
              -
              <br />
              MMA <span className="text-[#02F660]">2019</span>
            </h2>
            <div className="hover:cursor-pointer">
              <BsPlayCircle
                className="text-6xl"
                onClick={() => setModalActive(!modalActive)}
              />
            </div>
          </div>

          <div
            className="max-w-[60vw] mx-auto"
            style={{
              transform: modalActive ? "scale(1)" : "scale(0)",

              transition: "0.8s ease",
            }}
          >
            <AiFillCloseSquare
              className="text-white text-4xl absolute md:right-0 right-[-20vw] hover:cursor-pointer "
              onClick={() => setModalActive(false)}
            />
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/pyQ8CHGScRo"
              title="BTS Jimin Solo Performance - I NEED U (@2019 MMA)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-[50px] md:w-[45vw] md:h-[50vh] w-[80vw] h-[30vh] md:mt-0 mt-[5%] "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dance;
