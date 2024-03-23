import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import Swal from "sweetalert2";
import { BounceLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const RecipesList = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [publishLoading, setPublishLoading] = useState(false);
  const [publishLoadingId, setPublishLoadingId] = useState(null);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const items = [];
    const categories = await getDocs(collection(db, "categories"));
    const categoryArr = [];
    categories.docs.forEach((item) =>
      categoryArr.push({ id: item.id, ...item.data() })
    );
    querySnapshot.docs.forEach((item) =>
      items.push({ id: item.id, ...item.data() })
    );
    setRecipes(items);
    setCategories(categoryArr);
    setLoading(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete",
      icon: "question",
      iconHtml: "؟",
      showCancelButton: true,
      showCloseButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        setLoading(true);
        deleteDoc(doc(db, "recipes", id)).then((res) => {
          setRecipes((prev) => prev.filter((p) => p.id !== id));
          setLoading(false);
        });
      }
    });
  };

  const handlePublished = (id, published) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      iconHtml: "؟",
      showCancelButton: true,
      showCloseButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        setPublishLoading(true);
        setPublishLoadingId(id);
        const docRef = doc(db, "recipes", id);
        updateDoc(docRef, {
          published: !published,
          updatedAt: serverTimestamp(),
        }).then((res) => {
          setRecipes((prev) =>
            prev.map((recipe) => {
              if (recipe.id === id) {
                return { ...recipe, published: !published };
              }
              return recipe;
            })
          );
          setPublishLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto min-h-screen">
      <div className="text-xl font-medium mb-3">Recipes List</div>
      <div className="bg-white rounded-md p-3">
        <div className="flex justify-end items-center mb-2">
          <button
            onClick={() => navigate("/admin/create-recipe")}
            className="bg-blue-500 text-white px-2 py-1 rounded-md outline-none"
          >
            Create Recipe
          </button>
        </div>
        <table className="table-auto border-collapse w-full text-xs">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-4 py-2 text-left">No.</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Published</th>
              <th className="border px-4 py-2 text-left">Create Time</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              recipes &&
              recipes.map((recipe, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{recipe.title}</td>
                  <td className="border px-4 py-2">
                    {recipe.categoryId
                      ? categories.find(
                          (category) => category.id == recipe.categoryId
                        ).name
                      : "No Category"}
                  </td>
                  <td
                    className={`border px-4 py-2 font-medium ${
                      recipe.published ? "text text-green-400" : " text-red-400"
                    }`}
                  >
                    {recipe.published ? "Publish" : "Unpublished"}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(recipe.createdAt?.seconds * 1000).toDateString()}
                  </td>
                  <td className="border px-4 py-2">
                    <span className="flex ">
                      <button
                        className={`${
                          recipe.published
                            ? "bg-red-500 hover:bg-red-700"
                            : "bg-green-500 hover:bg-green-700"
                        } text-white font-bold py-1 px-2 rounded mr-2 outline-none w-full`}
                        onClick={() =>
                          handlePublished(recipe.id, recipe.published)
                        }
                      >
                        {recipe.published ? "Unpublished" : "Publish"}
                        {publishLoading &&
                          recipe.id == publishLoadingId &&
                          " ..."}
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2 outline-none w-full"
                        onClick={() =>
                          navigate("/admin/recipe/edit", { state: recipe })
                        }
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded outline-none w-full"
                        onClick={() => handleDelete(recipe.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            {loading && (
              <tr>
                <td colSpan="6">
                  <BounceLoader
                    color="#3e4edf"
                    loading={loading}
                    cssOverride={{
                      display: "block",
                      margin: "auto",
                      marginTop: "6rem",
                    }}
                    size={60}
                    aria-label="Loading Spinner"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipesList;
