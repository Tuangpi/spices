import { useNavigate } from "react-router-dom";
import recepes1 from "../../../assets/1.jpg";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(null);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    setRecipes(querySnapshot);
  };

  useEffect(() => {
    getData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 w-[90%] m-auto sm:w-[86%] mt-5 font-Montserrat">
      {recipes &&
        recipes.docs.map((recipe, index) => (
          <div
            className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
            key={index}
            onClick={() => navigate("/recipes/detail/" + recipe.id)}
          >
            <img src={recepes1} className="aspect-video object-cover" />
            <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
              {recipe.data().category}
            </p>
            <p className="pl-3 text-xl font-medium pt-2 pb-6">
              {recipe.data().title}
            </p>
          </div>
        ))}
    </section>
  );
};
export default Recipes;
