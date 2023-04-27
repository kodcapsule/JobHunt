import { SiSimplenote } from "react-icons/si";
import { FaParachuteBox } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";

const Value = () => {
  return (
    <section className="values__sec mt-[10rem]">
      <div className="sec__heading flex flex-col text-center mt-14 uppercase font-semibold ">
        <span className=" text-xs text-blueColor">what we stand for</span>
        <h1 className=" text-3xl text-gray-400">core values </h1>
      </div>
      <div className="values__container grid md:grid-cols-2 lg:grid-cols-3 gap-[5rem] items-center mt-3">
        <div className="value flex  flex-col  justify-between  hover:bg-slate-100 hover:cursor-pointer rounded-md p-3  transition-all delay-150 ">
          <div className=" flex  gap-[1.5rem] items-center">
            <div className="value__img">
              <SiSimplenote className=" text-blue-500 text-2xl w-[2.5rem] h-[2.5rem] rounded-full bg-blue-200 p-2" />
            </div>
            <span className=" text-2xl font-semibold text-textColor">
              Simplicity
            </span>
          </div>
          <p className="text-sm pt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            obcaecati a error, praesentium iure odit fugiat nemo corporis sunt
            facere?
          </p>
        </div>
        <div className="value flex  flex-col  justify-between  hover:bg-slate-100 hover:cursor-pointer rounded-md p-3  transition-all delay-150 ">
          <div className=" flex  gap-[1.5rem] items-center">
            <div className="value__img">
              <FaParachuteBox className=" text-pink-600 text-2xl w-[2.5rem] h-[2.5rem] rounded-full bg-pink-200 p-2" />
            </div>
            <span className=" text-2xl font-semibold text-textColor">
              Simplicity
            </span>
          </div>
          <p className="text-sm pt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            obcaecati a error, praesentium iure odit fugiat nemo corporis sunt
            facere?
          </p>
        </div>
        <div className="value flex  flex-col  justify-between  hover:bg-slate-100 hover:cursor-pointer rounded-md p-3  transition-all delay-150 ">
          <div className=" flex  gap-[1.5rem] items-center">
            <div className="value__img">
              <BsShieldFillCheck className=" text-amber-500 text-2xl w-[2.5rem] h-[2.5rem] rounded-full bg-amber-200 p-2" />
            </div>
            <span className=" text-2xl font-semibold text-textColor">
              Simplicity
            </span>
          </div>
          <p className="text-sm pt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            obcaecati a error, praesentium iure odit fugiat nemo corporis sunt
            facere?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Value;
