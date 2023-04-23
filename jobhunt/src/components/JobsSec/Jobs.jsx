import { BsClock } from "react-icons/bs";

import logo from "../../assets/keras-logo.png";

const Jobs = () => {
  return (
    <section className=" jobs__sec">
      <div className="jobs__container grid grid-cols-1 mt-10 gap-5 md:grid-cols-4">
        <article className=" p-2 bg-white rounded-md shadow-md cursor-pointer">
          <div className="top flex  justify-between p-2 text-l  items-center ">
            <h2 className=" flex flex-col font-semibold ">
              Frontend Developer
              <span className="job__location text-gray-400"> Accra</span>
            </h2>
            <p className=" flex items-center gap-2 time__posted text-gray-400">
              <span>
                <BsClock />
              </span>
              Now
            </p>
          </div>

          <div className="content border-t-slate-200 border-t-2 p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem molestias repellat error assumenda non beatae modi
              dolorem iure sequi quibusdam?
            </p>
            <div className="company flex items-center gap-2 mt-3">
              <img
                src={logo}
                alt=""
                className=" company__logo w-8 h-8 rounded-full"
              />
              <span className=" company__name"> WewoliTech </span>
            </div>
          </div>

          <a href="#" className=" btn inline-block mt-3 w-[100%] text-center">
            Apply Now
          </a>
        </article>
        <article className=" p-2 bg-white rounded-md shadow-md">
          <div className="top flex  justify-between p-2 text-l  items-center">
            <h2 className=" flex flex-col font-semibold ">
              Frontend Developer
              <span className="job__location text-gray-400"> Accra</span>
            </h2>
            <p className=" flex items-center gap-2 time__posted text-gray-400">
              <span>
                <BsClock />
              </span>
              Now
            </p>
          </div>

          <div className="content border-t-slate-200 border-t-2 p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem molestias repellat error assumenda non beatae modi
              dolorem iure sequi quibusdam?
            </p>
            <div className="company flex items-center gap-2 mt-3">
              <img
                src={logo}
                alt=""
                className=" company__logo w-8 h-8 rounded-full"
              />
              <span className=" company__name"> WewoliTech </span>
            </div>
          </div>

          <a href="#" className=" btn inline-block mt-3 w-[100%] text-center">
            Apply Now
          </a>
        </article>
      </div>
    </section>
  );
};

export default Jobs;
