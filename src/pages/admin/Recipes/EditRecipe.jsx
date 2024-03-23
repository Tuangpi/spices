import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { db, storage } from "../../../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const EditRecipe = () => {
  const location = useLocation();
  const editor = useRef(null);
  const [content, setContent] = useState(location.state.content ?? "");
  const [title, setTitle] = useState(location.state.title ?? "");
  const [category, setCategory] = useState(null);
  const [categoryId, setCategoryId] = useState(location.state.categoryId ?? "");
  const [firstPara, setFirstPara] = useState(
    location.state.firstParagraph ?? ""
  );
  const [featureImage, setFeatureImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "categories"));
    const items = [];
    querySnapshot.docs.forEach((item) =>
      items.push({ id: item.id, ...item.data() })
    );
    setCategory(items);
    setLoading(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    setLoading(true);
    if (featureImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const blobData = new Blob([reader.result], { type: featureImage.type });
        const storageRef = ref(storage, "recipes/" + featureImage.name);
        uploadBytes(storageRef, blobData)
          .then((snapshot) => {
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
            setLoading(false);
          });
      };
      reader.readAsArrayBuffer(featureImage);
    }
    const docRef = doc(db, "recipes", location.state.id);
    updateDoc(docRef, {
      categoryId: categoryId,
      title,
      content,
      firstParagraph: firstPara,
      updatedAt: serverTimestamp(),
    })
      .then((res) => {
        setLoading(false);
        navigate("/admin/recipes-list");
      })
      .catch((err) => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-50 p-2 min-h-screen">
      <div className="p-2 mb-2 text-base rounded-md font-semibold flex justify-between items-center bg-white">
        <FontAwesomeIcon
          icon={faBackward}
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <div>Update Recipe</div>
      </div>
      <form className="text-base bg-white mt-4 p-2 rounded-md">
        <div className="flex flex-col justify-center mt-4">
          <label htmlFor="category" className="block font-medium mb-1.5">
            Choose Category
          </label>
          <select
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
            className="w-[98%] border border-slate-400 focus:outline-none focus:border focus:border-slate-500 rounded px-3 py-2 text-sm sm:text-base"
          >
            {!loading &&
              category &&
              category.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="file-input" className="block font-medium mb-1.5">
            Feature Image
          </label>
          <input
            type="file"
            required
            onChange={(e) => setFeatureImage(e.target.files[0])}
            accept="image/*"
            name="file-input"
            id="file-input"
            className="block w-[98%] border border-slate-400 shadow-sm rounded-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none file:bg-white file:border-0 file:me-4 file:py-3 file:px-4"
          />
        </div>
        <div className="flex flex-col justify-center mt-4">
          <label htmlFor="title" className="block font-medium mb-1.5">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Recipe Title"
            className="w-[98%] border border-slate-400 focus:outline-none focus:border focus:border-slate-500 rounded px-3 py-2 text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col justify-center mt-4">
          <label htmlFor="first" className="block font-medium mb-1.5">
            First Paragraph
          </label>
          <input
            type="text"
            id="first"
            value={firstPara}
            autoFocus
            onChange={(e) => setFirstPara(e.target.value)}
            required
            placeholder="First Paragraph"
            className="w-[98%] border border-slate-400 focus:outline-none focus:border focus:border-slate-500 rounded px-3 py-2 text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col justify-center mt-4 w-[98%]">
          <label htmlFor="content" className="block font-medium mb-1.5">
            Recipe Content
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            // config={config}
            // onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
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

export default EditRecipe;
