import { useState } from "react";
import { db } from "../../../firebase/firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const EditCategory = () => {
  const location = useLocation();
  const [name, setName] = useState(location.state.name ?? "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    setLoading(true);

    const docRef = doc(db, "categories", location.state.id);
    updateDoc(docRef, {
      name,
      updatedAt: serverTimestamp(),
    })
      .then((res) => {
        setLoading(false);
        navigate("/admin/category-list");
      })
      .catch((err) => setLoading(false));
  };

  return (
    <div className="bg-gray-50 p-2 min-h-screen">
      <div className="p-2 mb-2 text-base rounded-md font-semibold flex justify-between items-center bg-white">
        <FontAwesomeIcon
          icon={faBackward}
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <div>Update Category</div>
      </div>
      <form className="text-base bg-white mt-4 p-2 rounded-md">
        <div className="flex flex-col justify-center mt-4">
          <label htmlFor="name" className="block font-medium mb-1.5">
            Category Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Category Name"
            className="w-[98%] border border-slate-400 focus:outline-none focus:border focus:border-slate-500 rounded px-3 py-2 text-sm sm:text-base"
          />
        </div>
        <div className="flex justify-center items-center gap-x-3 mt-5">
          <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
              loading ? "animate-pulse" : ""
            }`}
            onClick={(e) => handleSave(e)}
          >
            {loading ? "Updating ..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
