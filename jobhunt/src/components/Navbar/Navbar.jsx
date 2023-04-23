import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <header>
      <nav className=" flex justify-between items-center  p-2">
        <div className="logo">
          <h1 className=" text-blueColor  text-3xl">
            <span className="font-bold ">Job</span>Hunt
          </h1>
        </div>

        <div className=" flex items-center menu">
          <div className="menu-icon text-4xl md:hidden">
            <BiMenu />
          </div>

          <ul className=" nav__links ">
            <li className=" nav__link">Jobs</li>
            <li className=" nav__link">Companies</li>
            <li className=" nav__link">About</li>
            <li className=" nav__link">Contact</li>
            <li className=" nav__link">Blogs</li>
            <li className=" nav__link">Login</li>
            <li className=" nav__link">Register</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
