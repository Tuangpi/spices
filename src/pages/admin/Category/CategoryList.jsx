import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import Swal from "sweetalert2";
import { BounceLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CategoryList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const items = [];
    querySnapshot.docs.forEach((item) =>
      items.push({ id: item.id, ...item.data() })
    );
    setCategories(items);
    console.log(items);
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
        deleteDoc(doc(db, "categories", id)).then((res) => {
          setCategories((prev) => prev.filter((p) => p.id !== id));
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto min-h-screen">
      <div className="text-xl font-medium mb-3">Category List</div>
      <div className="bg-white rounded-md p-3">
        <div className="flex justify-end items-center mb-2">
          <button
            onClick={() => navigate("/admin/create-category")}
            className="bg-blue-500 text-white px-2 py-1 rounded-md outline-none"
          >
            Create Category
          </button>
        </div>
        <table className="table-auto border-collapse w-full text-xs">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-4 py-2 text-left">No.</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Create Time</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              categories &&
              categories.map((category, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{category.name}</td>
                  <td className="border px-4 py-2">
                    {new Date(
                      category.createdAt?.seconds * 1000
                    ).toDateString()}
                  </td>
                  <td className="border px-4 py-2">
                    <span className="flex ">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2 outline-none w-full"
                        onClick={() =>
                          navigate("/admin/category/edit", { state: category })
                        }
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded outline-none w-full"
                        onClick={() => handleDelete(category.id)}
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

export default CategoryList;
