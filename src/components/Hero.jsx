const Hero = () => {
  return (
    <section className=" sm:py-40 px-10 py-52 lg:px-52 sm:px-28  ">
      <h2 className="text-4xl  lg:text-[52px] md:text-[45px] sm:leading-snug leading-relaxed  text-white font-extrabold pb-3">
        {" "}
        Trusted Multi-Chain <br />
        <span className="text-[#E4B40D]">DEX</span> Platform
      </h2>
      <p className=" text-gray-300  font-light pb-7">
        {" "}
        Trade, earn, and own crypto on the all-in-one multi-chain DEX
      </p>
      <div className=" flex pt-3 gap-5 items-center ">
        <button className=" text-center bg-active leading-4 py-5 hover:bg-none hover:text-[#E4B40D] hover:border border-[#E4B40D] transition-all duration-500     px-6 rounded-full capitalize ">
          {" "}
          connect wallet
        </button>
        <button className=" text-center leading-4 py-5 bg-transparent  text-[#E4B40D] border border-[#E4B40D] hover:border-white hover:text-white transition-all duration-500     px-6 rounded-full capitalize ">
          {" "}
          Trade crypto
        </button>
      </div>
    </section>
  );
};

export default Hero;
