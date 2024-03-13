import { Link, useOutletContext } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import Content from "./Content";
const Home = () => {
  const humburgerMenu = useOutletContext();
  return (
    <main
      className={`font-Montserrat ${
        humburgerMenu ? "hidden sm:block" : "block"
      }`}
    >
      <header className="relative text-center">
        <img
          src={hero}
          alt="hero"
          className="w-full h-[38rem] object-cover bg-center"
        />
        <div className="absolute top-[50%] left-[50%] bg-black -translate-x-[50%] -translate-y-[50%] inset-0  opacity-35 w-full h-full"></div>
        <div className="uppercase text-white font-medium w-full absolute opacity-100 inset-0 flex justify-center items-center text-3xl">
          <h2 className="px-3 py-2 rounded-md inline-block text-blue-50">
            Welcome to the Spice Kingdom of Myanmar
          </h2>
        </div>
      </header>
      <section className="w-11/12 m-auto md:w-5/6 mt-10">
        <h3 className="text-center text-2xl uppercase font-medium">
          Browse By Category
        </h3>
        <div className="grid grid-cols-2 gap-3 mt-12 sm:grid-cols-3 md:grid-cols-4">
          <Link
            to={`category/1`}
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Curries and Stews
          </Link>
          <Link
            to="category/2"
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Noodles and Soups
          </Link>
          <Link
            to="category/3"
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Salads and Appetizers
          </Link>
          <Link
            to="category/4"
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Rice Dishes
          </Link>
          <Link
            to="category/5"
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Street Food
          </Link>
          <Link
            to="category/6"
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Desserts and Sweets
          </Link>
          <Link
            to="category/6"
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Grilled and Fried Dishes
          </Link>
          <Link
            to="category/6"
            className="p-6 bg-blue-300 rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-white"
          >
            Vegetarian and Vegan Options
          </Link>
        </div>
      </section>
      <div className="bg-slate-100 h-0.5 rounded-full my-6 mt-12 w-11/12 m-auto md:w-5/6"></div>
      <Content />
    </main>
  );
};
export default Home;
