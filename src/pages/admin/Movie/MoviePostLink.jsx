import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const MoviePostLink = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const items = [];
    querySnapshot.docs.forEach((item) =>
      items.push({ id: item.id, ...item.data() })
    );
    setRecipes(items);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="p-2 mb-2 text-base rounded-md font-semibold flex justify-between items-center bg-white">
        <FontAwesomeIcon
          icon={faBackward}
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <div>Generate URL</div>
      </div>
      <div className="flex justify-between items-start space-x-3 rounded-md p-4 mt-4">
        <div className="w-full bg-white min-h-48 rounded-md p-4 shadow-md">
          <div>Movie Title</div>
        </div>
        <div className="w-full bg-white rounded-md p-4 shadow-md">
          <div>Please select one post to generate the video url.</div>
          <div className="h-96 overflow-y-auto mt-5">
            {!loading &&
              recipes &&
              recipes.map((recipe, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 space-y-1.5"
                >
                  <input type="radio" name="post" id={`post${index}`} />
                  <label htmlFor={`post${index}`} className="cursor-pointer">
                    {recipe.title}
                  </label>
                </div>
              ))}
          </div>
          <div className="flex justify-end items-center">
            <button className="bg-blue-500 rounded-md outline-none px-2 py-1 hover:bg-blue-400">
              Generate Url
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoviePostLink;
