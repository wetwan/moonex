import { assets, nav } from "../assets/index.js";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center  px-12 py-2 sm:py-4">
      <div className=" flex gap-4 items-center cursor-pointer">
        <img
          className="lg:w-[100px] w-20 object-contain"
          src={assets.Logo2}
          alt=""
        />
        <img
          className="lg:w-[150px] w-28 object-contain"
          src={assets.Logo1}
          alt=""
        />
      </div>
      <ul className="hidden md:flex justify-between items-center lg:gap-4 sm:gap-2 px-3 py-2 capitalize">
        {nav.map((nav, i) => (
          <li
            key={i}
            className=" first:text-[#E4B40D] cursor-pointer transition-all  hover:text-[#E4B40D] text-2xl font-medium mx-2"
          >
            {" "}
            {nav.label}
          </li>
        ))}
      </ul>
      <button className="hidden text-center bg-active md:block py- leading-4 py-5 hover:bg-none hover:text-[#E4B40D] hover:border border-[#E4B40D] transition-all duration-500     px-6 rounded-full capitalize ">
        {" "}
        connect wallet
      </button>
      <GiHamburgerMenu className=" md:hidden  text-2xl text-[#E4B40D]" />
    </header>
  );
};

export default Navbar;
