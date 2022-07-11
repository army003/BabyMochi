import React from "react";
//className="text-8xl mb-9 ml-[-13%] "
function Cards(props) {
  return (
    <div className="max-w-[150px] flex flex-col mb-[20%] xs:mx-auto items-center justify-start ">
      {props.img}
      <h2 className="md:text-1xl xs:text-1xl text-2xl font-bold mb-8 text-[#00b] tracking-[15px]">
        {props.title}
      </h2>
      <p className="md:text-12xl xs:text-1xl text-2xl tracking-[5px]">
        {props.value}
      </p>
    </div>
  );
}

export default Cards;
