// import { Link } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" bg-blueColor p-5 rounded-md mt-[10rem]">
      <div className="footer__container  grid   gap-[2rem] text-white place-content-center md:grid-cols-3 lg:grid-cols-5">
        <div className=" footer___logo__container">
          <h1 className="   text-3xl hover:cursor-pointer ">
            <span className="font-bold ">Job</span>Hunt
          </h1>
          <p className=" text-xs opacity-[0.7]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            deserunt?
          </p>
        </div>
        {/*  Footer Link Item  */}
        <div className="footer__link__items flex flex-col">
          <h4 className="  text-xl "> Company</h4>
          <ul className=" text-sm flex flex-col  gap-1 mt-2">
            <li className=" opacity-[0.7] hover:opacity-[1] hover:underline  ">
              About
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              Features
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              News
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              FAQ
            </li>
          </ul>
        </div>

        {/*  Footer Link Item  */}
        <div className="footer__link__items flex flex-col">
          <h4 className="  text-xl "> Support</h4>
          <ul className=" text-sm flex flex-col  gap-1 mt-2">
            <li className=" opacity-[0.7] hover:opacity-[1] hover:underline  ">
              Register
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              Login
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              News
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              FAQ
            </li>
          </ul>
        </div>
        {/*  Footer Link Item  */}
        <div className="footer__link__items flex flex-col">
          <h4 className="  text-xl "> Jobs</h4>
          <ul className=" text-sm flex flex-col  gap-1 mt-2">
            <li className=" opacity-[0.7] hover:opacity-[1] hover:underline  ">
              Companies
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              Events
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              Locations
            </li>
            <li className="  opacity-[0.7] hover:opacity-[1] hover:underline ">
              Resume Samples
            </li>
          </ul>
        </div>

        {/*  Footer Link Item  */}
        <div className="footer__link__items flex flex-col    pt-6">
          <h4 className="  text-xl "> Contact Us </h4>

          <div className="email__phone flex flex-col mt2">
            <span className=" text-xs">email:jubhunt@gmail.com </span>
            <span className="text-xs">phone:+233 547431871</span>
          </div>

          <ul className=" social__media__links flex gap-4  mt-2 ">
            <AiFillInstagram className=" w-[2rem] h-[2rem] rounded-full bg-white text-blueColor p-[0.3rem] hover:scale-110 hover:cursor-pointer transition-all delay-300" />
            <BsLinkedin className="  w-[2rem] h-[2rem] rounded-full bg-white text-blueColor p-[0.3rem]  hover:scale-110 hover:cursor-pointer transition-all delay-300 " />
            <BsFacebook className="  w-[2rem] h-[2rem] rounded-full bg-white text-blueColor p-[0.3rem]  hover:scale-110 hover:cursor-pointer transition-all delay-300" />
            <AiFillTwitterCircle className="  w-[2rem] h-[2rem] rounded-full bg-white text-blueColor p-[0.3rem]  hover:scale-110 hover:cursor-pointer transition-all delay-300" />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
