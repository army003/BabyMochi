import React from "react";

function Dance2() {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto md:grid grid-cols-2 py-[5%] items-center font-serif">
        <div>
          <iframe
            src="https://www.youtube.com/embed/PzSCllAxnlE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-[40vw] h-[20vw] rounded-[20px] "
          ></iframe>
        </div>
        <div className="flex justify-center">
          <p className="text-white text-center w-[70%]">
            "Я начал интересоваться танцами на втором году средней школы. <br />
            Я стал танцевать после уроков и захотел заниматься должным образом,
            так что в 2010 году я начал ходить в танцевальную школу. Это было
            действительно весело. Если у меня было свободное время, я шел туда и
            практиковался. Я даже принимал участия в соревнованиях, которые
            становились действительно нервными. <br />
            На самом деле, я нервничаю даже сейчас, когда стою на сцене."
            <br /> &#169; Чимин
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dance2;
