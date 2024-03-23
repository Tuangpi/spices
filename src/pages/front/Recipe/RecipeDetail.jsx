import { Link, useParams } from "react-router-dom";
import recepes1 from "../../../assets/1.jpg";
import a from "../../../assets/a.png";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../../component/BreadCrumb";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { BounceLoader } from "react-spinners";

const RecipeDetail = () => {
  const { id, downloadLink } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async (id) => {
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
    <section className="w-[90%] m-auto sm:w-[88%] md:w-[85%] lg:w-[80%] font-Montserrat min-h-96 mt-5">
      <BreadCrumb data={[{ link: "/recipes", name: "Recipes" }]} />
      <>
        {!loading && recipe && (
          <>
            <h2 className="font-semibold text-xl">{recipe.title}</h2>
            <p className="mt-2 mb-4">{recipe.firstParagraph}</p>
            {downloadLink && (
              <div className="flex justify-center items-center">
                <Link
                  to="/movie-link"
                  state={downloadLink}
                  className="flex justify-center items-center mb-8 animate-pulse bg-blue-100"
                >
                  <img src={a} alt="link" className="w-1/6 object-cover" />
                </Link>
              </div>
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
        {loading && (
          <div className="flex justify-between items-center">
            <BounceLoader
              color="#3e4edf"
              loading={loading}
              size={60}
              cssOverride={{
                display: "block",
                margin: "auto",
              }}
              aria-label="Loading Spinner"
            />
          </div>
        )}
      </>
    </section>
  );
};
export default RecipeDetail;
