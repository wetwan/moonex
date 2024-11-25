import { assets, footer, footerimg } from "../assets";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:items-center justify-between md:px-10 md:py-20">
      <div className=" w-40 ">
        <img
          src={assets.Footer}
          className="object-contain w-full pt-10"
          alt=""
        />
      </div>
      <ul className="flex flex-col md:flex-row items-center justify-between w-2/6">
        {footer.map((item, i) => (
          <li
            className=" ml-12 md:ml-0 w-full  capitalize hover:text-yellow-500  pt-10 text-xl font-medium transition-all duration-300 whitespace-nowrap mx-3"
            key={i}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className=" flex flex-col ml-5 md:ml-0 md:items-center md:mr-5  pt-3 ">
        <h5 className="capitalize text-2xl ">
          {" "}
          contact <span className="text-yellow-600">us</span>
        </h5>
        <ul className="flex  items-center ">
          {footerimg.map((item, i) => (
            <li className="w-10 pt-5 my-2 mx-3" key={i}>
              <img className="w-full" src={item.image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
