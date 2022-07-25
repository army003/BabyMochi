import React from "react";
import BabyJimin from "../img/babyjim3.jpg";
import Chimmy from "../img/chimmy.png";
import Chimmy2 from "../img/chimmy2.png";
import { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import School from "../img/schooljim3.jpg";
import Jim2012 from "../img/2012Ошь.jpg";
import Debut from "../img/debut.jpg";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Bigraphy() {
  const [offset, setOffset] = useState(0);
  const leftClick = () => {
    console.log("left");
    setOffset((current) => {
      const newOffset = current + 100;

      return Math.min(newOffset, 0);
    });
  };
  const rightClick = () => {
    console.log("right");
    const max = -(100 * 3);
    setOffset((current) => {
      const newOffset = current - 100;

      return Math.max(newOffset, max);
    });
  };
  return (
    <div className="bg-white pt-[5%] font-serif">
      <h1 className="text-4xl font-bold text-center text-[#00b]">Bio</h1>
      <div className=" mx-auto py-[5%] md:w-[70vw] w-[90vw] relative flex items-center">
        <BsFillArrowLeftSquareFill
          className="  left-[5vw] text-[#00b]   text-3xl "
          onClick={leftClick}
        />
        <div className="max-w-[800px] mx-auto relative">
          <div className="overflow-hidden md:w-[100%] w-[70vw] rounded-[30px]">
            <div
              className=" flex gap:20px  "
              style={{
                transform: `translateX(${offset}%)`,
                transition: "1s ease",
              }}
            >
              <div className="grid md:grid-cols-2 md:items-center max-w-[100%] min-w-[100%] border-solid border-2 border-black  ">
                <img
                  src={BabyJimin}
                  alt=""
                  className="md:w-[80%] h-[100%] w-[100%]"
                />
                <div className="pt-[10%] text-[#2c2b2b] rounded-[30px] md:w-[100%] w-[100%] md:text-left text-center">
                  <h2 className="md:text-4xl text-2xl text-[#00b] font-bold">
                    13 Oct. 1995
                  </h2>
                  <p className="w-[80%] text-justify md:text-[1.3rem] text-[0.8rem] md:leading-0 leading-4 md:ml-0 ml-[8%]">
                    Чимин появился на свет 13 октября 1995 года в Пусане –
                    морской столице Южной Кореи.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:items-center max-w-[100%] min-w-[100%] border-solid border-2 border-black  ">
                <img
                  src={School}
                  alt=""
                  className="md:w-[80%] h-[100%] w-[100%]"
                />
                <div className="pt-[10%] text-[#2c2b2b] rounded-[30px] md:w-[100%] w-[100%] md:text-left text-center">
                  <h2 className="md:text-4xl text-2xl text-[#00b] font-bold">
                    Весна 2002
                  </h2>
                  <p className="w-[80%] text-justify md:text-[1.3rem] text-[0.8rem] md:leading-0 leading-4 md:ml-0 ml-[8%]">
                    Обучался в Пусане в младшей школе Ходонга, позже учился в
                    средней школе Ёнсана.Чимин окончил старшую школу искусств в
                    Пусане. В данном учебном заведении 3 отделения: классы
                    искусств, танцевальные классы, классы классической музыки.
                    «Бэнтан» учился во втором отделении.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:items-center max-w-[100%] min-w-[100%] border-solid border-2 border-black  ">
                <img
                  src={Jim2012}
                  alt=""
                  className="md:w-[80%] h-[100%] w-[100%]"
                />
                <div className="pt-[10%] text-[#2c2b2b] rounded-[30px] md:w-[100%] w-[100%] md:text-left text-center">
                  <h2 className="md:text-4xl text-2xl text-[#00b] font-bold">
                    Весной 2012
                  </h2>
                  <p className="w-[80%] text-justify md:text-[1.3rem] text-[0.8rem] md:leading-0 leading-4 md:ml-0 ml-[8%]">
                    "Cо мной связался мой учитель танцев со средней школы, и я
                    принял участие в прослушивании компании. Я прошел и в мае
                    переехал в Сеул. Первым мембером, которого я встретил, был
                    Хосок-хен."-говорит Чимин
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:items-center max-w-[100%] min-w-[100%] border-solid border-2 border-black  ">
                <img
                  src={Debut}
                  alt=""
                  className="md:w-[80%] h-[100%] w-[100%]"
                />
                <div className="pt-[10%] text-[#2c2b2b] rounded-[30px] md:w-[100%] w-[100%] md:text-left text-center">
                  <h2 className="md:text-4xl text-2xl text-[#00b] font-bold">
                    13 Jun. 2013
                  </h2>
                  <p className="w-[80%] text-justify md:text-[1.3rem] text-[0.8rem] md:leading-0 leading-4 md:ml-0 ml-[8%]">
                    Чимин дебютировал в составе BTS как вокалист и танцор, и по
                    сей день является частью группы, радуя фанатов своим
                    творением
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Popup
            trigger={
              <img
                src={Chimmy}
                alt=""
                className="absolute md:w-[7vw] w-[13vw] right-[-3vw] md:top-[-7vh] top-[-2vh]"
              />
            }
          >
            <div>
              Знакомьтесь, это Чимми, персонаж Чимина из вселенной BTS21
            </div>
          </Popup>
          <Popup
            trigger={
              <img
                src={Chimmy2}
                alt=""
                className="absolute md:w-[7vw] w-[13vw]  right-[-3vw] md:bottom-[-7vh] bottom-[-2vh]"
              />
            }
          >
            <div>
              Знакомьтесь, это Чимми, персонаж Чимина из вселенной BTS21
            </div>
          </Popup>
        </div>

        <BsFillArrowRightSquareFill
          className=" right-[5vw] text-[#00b] text-3xl "
          onClick={rightClick}
        />
      </div>
    </div>
  );
}

export default Bigraphy;
