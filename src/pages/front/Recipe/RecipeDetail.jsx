import { Link, useParams } from "react-router-dom";
import recepes1 from "../../../assets/1.jpg";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../../component/BreadCrumb";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import Loading from "react-loading";

const RecipeDetail = () => {
  const { id, downloadLink } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async (id) => {
    setLoading(true);
    const docRef = doc(db, "recipes", id);
    const docSnap = await getDoc(docRef);

    setRecipe(docSnap.data());
    setLoading(false);
  };

  useEffect(() => {
    getData(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-[90%] m-auto sm:w-[88%] md:w-[85%] lg:w-[80%] font-Montserrat mt-5">
      <BreadCrumb data={[{ link: "/recipes", name: "Recipes" }]} />
      <>
        {!loading && recipe && (
          <>
            <h2 className="font-semibold text-xl">{recipe.title}</h2>
            <p className="mt-2 mb-4">{recipe.firstParagraph}</p>
            {downloadLink && (
              <Link to="/movie-link" state={downloadLink}>
                Click Here
              </Link>
            )}
            <div className="aspect-video object-cover">
              <img
                src={recepes1}
                className="object-cover rounded-md"
                alt="recipes_img"
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: recipe.content }} />
          </>
        )}
        {loading && <Loading type="spin" className="w-full text-red-500" />}
      </>
    </section>
  );
};
export default RecipeDetail;
