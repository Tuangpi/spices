import { Link } from "react-router-dom";
import hero from "../../../assets/hero.jpg";
import Content from "./Content";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const items = [];
    querySnapshot.docs.forEach((item) =>
      items.push({ id: item.id, ...item.data() })
    );
    setCategories(items);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="font-Montserrat">
      <header className="relative text-center">
        <img
          src={hero}
          alt="hero"
          className="w-full h-[38rem] object-cover bg-center"
        />
        <div className="absolute top-[50%] left-[50%] bg-black -translate-x-[50%] -translate-y-[50%] inset-0  opacity-35 w-full h-full"></div>
        <div className="uppercase font-semibold w-full absolute opacity-100 inset-0 flex justify-center items-center text-3xl">
          <h2 className="px-3 py-2 rounded-md inline-block text-blue-100">
            Welcome to the Spice Kingdom of Myanmar
          </h2>
        </div>
      </header>
      <section className="w-[90%] m-auto sm:w-[86%] mt-10">
        <h3 className="text-center text-2xl uppercase font-medium">
          Browse By Category
        </h3>
        <div className="grid grid-cols-1 gap-3 mt-6 md:mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories &&
            categories.map((category, index) => (
              <Link
                to={`category/${category.id}`}
                key={index}
                className="p-2 md:p-3 bg-secondary rounded-md flex justify-center items-center cursor-pointer border-none outline-none shadow-md hover:scale-105 hover:animate-pulse transition-all ease-in-out duration-1000 text-black"
              >
                {category.name}
              </Link>
            ))}
        </div>
      </section>

      <div className="bg-slate-100 h-0.5 rounded-full my-6 mt-8 w-5/6 m-auto md:w-5/6"></div>
      <Content />
    </main>
  );
};
export default Home;
