import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import Swal from "sweetalert2";

const postList = Array.from({ length: 10 }, (_, index) => ({
  title: `Title ${index + 1}`,
}));

const PostList = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(null);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    setRecipes(querySnapshot.docs);
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
        deleteDoc(doc(db, "recipes", id)).then((res) =>
          setRecipes((prev) => prev.filter((p) => p.id !== id))
        );
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="text-xl font-medium mb-5">Post List</div>
      <div className="flex justify-end items-center mb-2">
        <button
          onClick={() => navigate("/admin/create-post")}
          className="bg-blue-500 text-white px-2 py-1 rounded-md outline-none"
        >
          Create Post
        </button>
      </div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">No.</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes &&
            recipes.map((recipe, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{recipe.data().title}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(recipe.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
