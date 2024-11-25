import { assets } from "../assets";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const About = () => {
  return (
    <section className="font-FiraCode sm:py-40 px-10 pb-10   lg:px-52 sm:px-28 ">
      <h2 className="text-white text-2xl font-bold  pb-4 px-4">
        Why <span className="text-[#E4B40D]">MoonEX</span> ?
      </h2>
      <div className="px-6 py-7 md:backdrop:blur   md:shadow-shadow rounded-lg mt-5">
        <table>
          <tr className="">
            <th>Comparison</th>
            <th>
              <img src={assets.Table1} alt="" />
            </th>
            <th>
              <img src={assets.Table2} alt="" />
            </th>
          </tr>
          <tr>
            <td>1 . Point no one</td>
            <td>
              <FaCheck fill="#B2FFAC" className="sm:ml-20 ml-9" />
            </td>
            <td>
              <IoIosClose fill="#FF5050" className="sm:ml-20 ml-9" />
            </td>
          </tr>
          <tr>
            <td>2 . Point no one</td>
            <td>
              <FaCheck fill="#B2FFAC" className="sm:ml-20 ml-9" />
            </td>
            <td>
              <IoIosClose fill="#FF5050" className="sm:ml-20 ml-9" />
            </td>
          </tr>
          <tr>
            <td>3 . Point no one</td>
            <td>
              <FaCheck className="sm:ml-20 ml-9" fill="#B2FFAC" />
            </td>
            <td>
              <IoIosClose fill="#FF5050" className="sm:ml-20 ml-9" />
            </td>
          </tr>
          <tr>
            <td>4 . Point no one</td>
            <td>
              <FaCheck className="sm:ml-20 ml-9" fill="#B2FFAC" />
            </td>
            <td>
              <IoIosClose fill="#FF5050" className="sm:ml-20 ml-9" />
            </td>
          </tr>
          <tr>
            <td>5 . Point no one</td>
            <td>
              <FaCheck className="sm:ml-20 ml-9" fill="#B2FFAC" />
            </td>
            <td>
              <IoIosClose fill="#FF5050" className="sm:ml-20 ml-9" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default About;
