import React from "react";

const Section = () => {
  return (
    <div className=" bg-jimmi-bg bg-cover ">
      <div className="w-full py-16 text-white bg-[rgba(0,0,0,0.7)] px-12">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-start">
          <div className="lg:col-span-2 my-6">
            <h1 className="md:text-4xl sm:text-5xl text-xl font-bold text-[#00d] my-2">
              Wanna some extra boyfriend material?
            </h1>
            <p>Sign up to our newsletter</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
              <input
                className="px-4 py-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Email"
              />
              <button className="bg-black text-[#fff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
                Notify me
              </button>
            </div>
            <p>
              We care about protection, so please read our
              <br />
              <a href="#" className="text-[#00d]">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
