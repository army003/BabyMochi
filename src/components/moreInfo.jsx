import React from "react";
import { TbZodiacLibra } from "react-icons/tb";
import { GiBodyHeight } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import Cards from "./cards";
const MoreInfo = () => {
  const info = [
    {
      title: "zodiac sign ",
      value: "Libra",
      img: (
        <TbZodiacLibra className=" mb-9 ml-[-9%] md:text-12xl sm:text-13xl text-8xl" />
      ),
    },
    {
      title: "hometown",
      value: "Busan, South Korea",
      img: (
        <GoHome className="mb-9 ml-[-9%] md:text-12xl sm:text-13xl text-8xl" />
      ),
    },
    {
      title: "height",
      value: "1.74m",
      img: (
        <GiBodyHeight className="mb-9 ml-[-9%] md:text-12xl sm:text-13xl text-8xl" />
      ),
    },
  ];
  return (
    <div className="w-full bg-white text-center p-[10%]">
      <h1 className="text-4xl font-bold mb-[5%] text-[#00b]">More info</h1>
      <div className="grid md:grid-cols-3 md:ml-[15%] justify-center sm:ml-0 text-center text-3xl max-w-[1240px]  ">
        {info.map((item) => (
          <Cards title={item.title} img={item.img} value={item.value}></Cards>
        ))}
      </div>
    </div>
  );
};

export default MoreInfo;
