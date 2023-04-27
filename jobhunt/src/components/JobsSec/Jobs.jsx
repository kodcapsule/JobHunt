import { BsClock } from "react-icons/bs";

import logo from "../../assets/keras-logo.png";

const jobsData = [
  {
    id: 2344,
    title: "Django Backend Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Jobs = () => {
  return (
    <section className=" jobs__sec">
      <div className="sec__heading flex flex-col text-center mt-14 uppercase font-semibold ">
        <span className=" text-xs text-blueColor">
          Find a suitable Job here
        </span>
        <h1 className=" text-3xl text-gray-400">jobs Available </h1>
      </div>

      <div className="jobs__container grid grid-cols-1 mt-5 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <article className=" p-2 bg-white rounded-md shadow-md cursor-pointer text-sm  transition-all delay-300  hover:bg-slate-200  hover:scale-105  ">
          <div className="top flex  justify-between p-2   items-center ">
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
