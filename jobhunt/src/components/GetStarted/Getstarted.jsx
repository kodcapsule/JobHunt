import React from "react";

const Getstarted = () => {
  return (
    <section className=" mt-[3rem] ">
      {/* <div className="sec__heading flex flex-col text-center mt-14 uppercase font-semibold ">
        <span className=" text-xs text-blueColor">land your dream job</span>
        <h1 className=" text-3xl text-gray-400">Get Started </h1>
      </div> */}
      <div className="get__started rounded-md p-20">
        <div className="get__started__container flex flex-col  gap-[3rem] p-4 rounded-md lg:flex-row md:justify-between">
          <div className="">
            <h4 className=" text-blueColor font-semibold text-lg md:text-3xl">
              Ready to Switch career?
            </h4>
            <p className=" text-textColor font-semibold text-sm gitmd:text-xl">
              Get Started now!!
            </p>
          </div>

          <a href="#" className=" btn__get__started">
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
