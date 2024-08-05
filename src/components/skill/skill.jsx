import Title from "../layouts/Title";
import { BiLogoHtml5 } from "react-icons/bi";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skill = () => {
  return (
    <section
      id="skill"
      className=" w-full pt-10 pb-20 flex flex-col  py-20 border-b-[1px] border-b-black"
    >
      <div className=" justify-center items-center text-center">
        <Title title="" des="PROGRAMMING SKILLS" />
      </div>
      <div className=" grid md:grid-cols-2 xl:grid-cols-3  gap-6 xl:gap-14">
        <div className="w-full p-4 xl:px-5 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group ">
          <div className="flex flex-col gap-4 font-titleFont  items-center">
            <h2 className="text-designColor font-medium text-2xl">FrontEnd</h2>
          </div>
          <div className="ml-5">
            <ul className="list">
              <li className="flex just items-center gap-2">
                <BiLogoHtml5 /> HTML5
              </li>
              <li className="flex just items-center gap-2">
                <FaCss3Alt />
                CSS3
              </li>
              <li className="flex just items-center gap-2">
                <IoLogoJavascript />
                JavaScript
              </li>
              <li className="flex just items-center gap-2">
                <FaReact />
                React
              </li>
              <li className="flex just items-center gap-2">
                <RiNextjsFill />
                NextJS
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-4 xl:px-5 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group ">
          <div className="flex flex-col gap-4 font-titleFont  items-center">
            <h2 className="text-designColor font-medium text-2xl">BackEnd</h2>
          </div>
          <div className="ml-5">
            <ul>
              <li className="flex just items-center gap-2">
                <FaNodeJs />
                NODEJS
              </li>
              <li className="flex just items-center gap-2">
                <SiExpress />
                EXPRESSJS
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-4 xl:px-5 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group ">
          <div className="flex flex-col gap-4 font-titleFont  items-center">
            <h2 className="text-designColor font-medium text-2xl">DataBase</h2>
          </div>
          <div className="ml-5">
            <ul>
              <li className="flex just items-center gap-2">
                <GrMysql /> MYSQL
              </li>
              <li className="flex just items-center gap-2">
                <SiMongodb /> MongoDB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default skill;
