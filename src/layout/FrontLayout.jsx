import { Link, Outlet, useNavigate } from "react-router-dom";
import humburger from "../assets/humburger.svg";
import close from "../assets/close.svg";
import { useState } from "react";

const FrontLayout = () => {
  const [humburgerMenu, setHumburgerMenu] = useState(false);
  const navigate = useNavigate();

  const gotoMenu = (url) => {
    setHumburgerMenu(false);
    navigate(url);
  };

  return (
    <>
      <div className="sticky top-0 left-0 sm:relative bg-secondary sm:bg-white w-full z-10 pt-5">
        <div className="grid grid-cols-12">
          <h1 className="text-center text-gray-700 text-3xl md:text-5xl capitalize col-span-10 sm:col-span-full font-main-header">
            Spice of Myanmar
          </h1>
          {humburgerMenu ? (
            <div
              className="col-span-2 flex justify-center items-center sm:hidden"
              onClick={() => setHumburgerMenu(false)}
            >
              <img src={close} alt="close" />
            </div>
          ) : (
            <div
              className="col-span-2 flex justify-center items-center sm:hidden mb-4"
              onClick={() => setHumburgerMenu(true)}
            >
              <img src={humburger} alt="humburger" />
            </div>
          )}
        </div>
      </div>
      <div className="py-2 lg:py-1.5 bg-secondary hidden sm:block sm:sticky top-0 z-50 mt-8">
        <div className="flex justify-center items-center gap-x-0 md:gap-x-3 w-full m-auto uppercase text-[13px] md:text-sm font-medium py-2.5">
          <Link to="/" className="cursor-pointer px-4">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer px-4">
            About Myanmar Spices
          </Link>
          <Link to="/popular-dishes" className="cursor-pointer px-4">
            Popular Dishes
          </Link>
          <Link to="/recipes" className="cursor-pointer px-4">
            Recipes
          </Link>
          <Link to="/contact-us" className="cursor-pointer px-4">
            Contact Us
          </Link>
          {/* <div className="hidden lg:block">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-full py-2.5 pl-2 placeholder:italic placeholder:text-gray-800 placeholder:text-xs outline-none border-2 border-slate-100 bg-white rounded-md focus:border-slate-300"
                />
                <button className="uppercase bg-white px-8 py-2 rounded-md text-slate-400 border-2 border-slate-200">
                  Search
                </button>
              </div>
            </div> */}
        </div>
        {/* <div className="block lg:hidden m-auto w-1/2 mt-2">
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full py-2.5 pl-2 placeholder:italic placeholder:text-gray-800 placeholder:text-xs outline-none border-2 border-slate-100 bg-white rounded-md focus:border-slate-300"
              />
              <button className="uppercase bg-white px-8 py-2 rounded-md text-slate-400 border-slate-200">
                Search
              </button>
            </div>
          </div> */}
      </div>
      {humburgerMenu && (
        <div className="absolute w-full h-screen bg-secondary opacity-95 flex flex-col items-start pr-10 pt-6 sm:hidden">
          <div className="w-1/2 mx-auto font-medium">
            <div
              className="pb-2 border-b-2 border-slate-500 w-full text-center"
              onClick={() => gotoMenu("/")}
            >
              Home
            </div>
            <div
              className="pb-2 border-b-2 border-slate-500 w-full mt-4 text-center"
              onClick={() => gotoMenu("/about")}
            >
              About Myanmar Spices
            </div>
            <div
              className="pb-2 border-b-2 border-slate-500 w-full mt-4 text-center"
              onClick={() => gotoMenu("/popular-dishes")}
            >
              Popular Dishes
            </div>
            <div
              className="pb-2 border-b-2 border-slate-500 w-full mt-4 text-center"
              onClick={() => gotoMenu("/recipes")}
            >
              Recipes
            </div>
            <div
              className="pb-2 border-b-2 border-slate-500 w-full mt-4 text-center"
              onClick={() => gotoMenu("/contact-us")}
            >
              Contact Us
            </div>
            {/* <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-full py-2.5 pl-2 placeholder:italic placeholder:text-gray-800 placeholder:text-xs outline-none border-2 border-slate-200 bg-white rounded-md focus:border-slate-300"
                />
                <button className="uppercase bg-slate-700 w-full px-8 py-2 rounded-md text-slate-100 mt-2 border-slate-200">
                  Search
                </button>
              </div> */}
          </div>
        </div>
      )}
      <div className={`${humburgerMenu ? "hidden sm:block" : "block"}`}>
        <Outlet />
      </div>
      <footer
        className={`font-Montserrat font-medium ${
          humburgerMenu
            ? "hidden sm:block"
            : "uppercase text-center bg-secondary py-2 mt-16 text-xs md:text-sm font-light"
        }`}
      >
        Copy Right &copy; {new Date().getFullYear()} - Spice of Myanmar
      </footer>
    </>
  );
};
export default FrontLayout;
