import React from "react";
import { assets,faq } from "../assets";

const Faq = () => {
  return (
    <section className="font-FiraCode sm:py-10 px-0 pb-32 sm:rouned sm:shadow-shadows sm:backdrop:blur-md sm:backdrop-blur-md  lg:mx-52 sm:px-5 ">
      <h2 className=" text-center mb-5  py-3 text-4xl capitalize font-semibold">
        <span className="text-[#E4B40D]">FAQ</span>
      </h2>
      <ul className=" w-full px-10 py-3 text-left flex flex-col gap-6 items-start">
        {
            faq.map((item,i)=>(
                <li key={i} className="faq w-full px-10 hover:text-black hover:rounded-md hover:bg-[#E4B40D] border-y py-7 justify-between flex items-center">
                <div className="md:w-5/6 w-4/6">
                  <h5 className="mb-3 text-xl font-semibold py-3">
                    {item.h2}
                  </h5>
                  <p className=" font-light">
                    {item.p}
                  
                  </p>
                </div>
                <div className="w-16 img flex items-center justify-center h-16 backdrop-blur-sm  backdrop:blur-sm bg-none bg-transparent  rounded-full shadow-shadows">
                  <img src={item.image} className=" object-contain w-full" alt="" />
                </div>
              </li>
            ))
        }
       
      </ul>
      
    </section>
  );
};

export default Faq;
