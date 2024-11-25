import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { feat } from "../assets/index";

const Features = () => {
  return (
    <section id='feature' className="  sm:py-20   px-10 pb-10  lg:px-52 sm:px-40 ">
      <h2 className=" text-center my-5  py-3 text-4xl capitalize font-semibold">
        our <span className="text-[#E4B40D]">Features</span>
      </h2>
      <div className="py-6 font-FiraCode flex flex-col flex-wrap gap-y-10 sm:gap-x-32 lg:gap-2 sm:gap-y-20 sm:flex-row items-center justify-between">
        {feat.map((item, i) => (
          <div
            key={i}
            className="hover:bg-[#E4B40D] hover:text-black transition-all duration-500 ease-in  hover:text-blue text-white w-[200px] h-[200px] bg-transparent backdrop:blur  rounded-lg p-6 py-9 shadow-shadows"
          >
            <div className=" p-2 rounded-full  border-2 w-1/6 mb-4">
              <img src={item.image} alt="" className=" mx-auto" />
            </div>
            <h4 className=" font-medium text-xl mb-4  "> {item.h2} </h4>
            <p className="font-light text-sm leading-relaxed ">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
