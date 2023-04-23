import { BiSearch } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
// import { IoMdCloseCircleOutline } from "react-icons/io";

const SearchArea = () => {
  return (
    <section className="search grid gap-10 bg-grayIsh rounded-md p-[3rem] mt-4">
      <form>
        <div className="first__item flex flex-col justify-between items-center rounded-lg gap-4 p-2 bg-white shadow-lg shadow-grayIsh-700 md:flex-row">
          <div className="search__input flex items-center gap-1  w-[100%] ">
            <BiSearch className=" icon" />
            <input
              className=" focus:outline-none p-2 w-[100%] bg-slate-100 rounded-lg 
              "
              type="search"
              placeholder="Search Job Here..."
            />
            {/* <IoMdCloseCircleOutline className=" icon" /> */}
          </div>
          <div className="search__input flex items-center gap-1 w-[100%]   ">
            <BiHome className=" icon" />
            <input
              className=" focus:outline-none p-2 w-[100%] bg-slate-100 rounded-lg 
              "
              type="search"
              placeholder="Search By Company..."
            />
            {/* <IoMdCloseCircleOutline className=" icon" /> */}
          </div>
          <div className="search__input flex items-center gap-1  w-[100%]  ">
            <SlLocationPin className=" icon text-gray-400" />
            <input
              className=" focus:outline-none p-2 w-[100%] bg-slate-100 rounded-lg 
              "
              type="search"
              placeholder="Search By Location ..."
            />
            {/* <IoMdCloseCircleOutline className=" icon" /> */}
          </div>
          <button className="search__input btn btn__primary  ">Search</button>
        </div>
      </form>

      <div className="second_search flex flex-col items-center justify-between gap-12 md:justify-center  md:flex-row">
        <div className="search__option">
          <label htmlFor="relevance" className=" text-textColor ">
            Type:
          </label>
          <select
            name=""
            id="relevance"
            className=" bg-white rounded-lg px-2 py-1 text-gray-600 "
          >
            <option value="" selected disabled hidden>
              Select job type
            </option>
            <option value="Relevance">Full Time</option>
            <option value="Inclusive">Part Time</option>
            <option value="Starts With">Remote </option>
            <option value="Contains">Contract</option>
          </select>
        </div>
        <div className="search__option">
          <label htmlFor="relevance" className=" text-textColor ">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className=" bg-white rounded-lg px-2 py-1 text-gray-600 "
          >
            <option value="" selected disabled hidden>
              Select an option
            </option>
            <option value="Relevance">Relevance</option>
            <option value="Inclusive">Inclusive</option>
            <option value="Starts With">Starts With</option>
            <option value="Contains">Contains</option>
          </select>
        </div>
        <div className="search__option">
          <label htmlFor="relevance" className=" text-textColor ">
            Level:
          </label>
          <select
            name=""
            id="relevance"
            className=" bg-white rounded-lg px-2 py-1 text-gray-600 "
          >
            <option value="" selected disabled hidden>
              Select Level
            </option>
            <option value="Relevance">Entry </option>
            <option value="Inclusive">Intermediate</option>
            <option value="Starts With">Advance</option>
            <option value="Contains">Advocate</option>
          </select>
        </div>

        <span className=" text-gray-400 hover:cursor-pointer hover:text-textColor transition-all delay-200">
          {" "}
          Clear All
        </span>
      </div>
    </section>
  );
};

export default SearchArea;
