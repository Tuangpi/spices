import { useNavigate } from "react-router-dom";
import recepes1 from "../../../assets/1.jpg";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { BounceLoader } from "react-spinners";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const q = query(collection(db, "recipes"), where("published", "==", true));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((item) =>
      items.push({ id: item.id, ...item.data() })
    );
    const categories = await getDocs(collection(db, "categories"));
    const categoriesArr = [];
    categories.docs.forEach((item) =>
      categoriesArr.push({ id: item.id, ...item.data() })
    );
    setCategories(categoriesArr);
    setRecipes(items);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section
        className={`${
          loading
            ? "flex justify-center items-center"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        } gap-x-8 gap-y-8 w-[90%] m-auto sm:w-[86%] mt-5 font-Montserrat min-h-96`}
      >
        {!loading &&
          recipes &&
          recipes.map((recipe, index) => (
            <div
              className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
              key={index}
              onClick={() => navigate("/recipes/detail/" + recipe.id)}
            >
              <img src={recepes1} className="aspect-video object-cover" />
              <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
                {recipe.categoryId
                  ? categories.find(
                      (category) => category.id === recipe.categoryId
                    ).name
                  : "No Category"}
              </p>
              <p className="pl-3 text-xl font-medium pt-2 pb-6">
                {recipe.title}
              </p>
            </div>
          ))}
        <BounceLoader
          color="#3e4edf"
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
        />
      </section>
    </>
  );
};
export default Recipes;
