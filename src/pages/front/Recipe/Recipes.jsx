import { useNavigate } from "react-router-dom";
import recepes1 from "../../../assets/1.jpg";
import { useEffect } from "react";

const items = [
  {
    id: 1,
    img: recepes1,
    title: "Mohinga",
    category: "Noodle and Soup",
  },
  {
    id: 2,
    img: recepes1,
    title: "Lahpet Thoke (Tea Leaf Salad)",
    category: "Vegetarian and Vangan Option",
  },
  {
    id: 3,
    img: recepes1,
    title: "Ohn No Khao Swè (Coconut Chicken Noodle Soup)",
    category: "Noodle and Soup",
  },
];

const Recipes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 w-[90%] m-auto sm:w-[86%] mt-5 font-Montserrat">
      {items?.map((item, index) => (
        <div
          className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
          key={index}
          onClick={() => navigate("/recipes/detail/" + index)}
        >
          <img src={recepes1} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            {item.category}
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">{item.title}</p>
        </div>
      ))}
    </section>
  );
};
export default Recipes;
