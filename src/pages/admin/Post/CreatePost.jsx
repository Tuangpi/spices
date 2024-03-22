import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { db, storage } from "../../../firebase/firebase";
import { useAuth } from "../../../component/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const CreatePost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [firstPara, setFirstPara] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
            addDoc(collection(db, "recipes"), {
              title,
              content,
              firstParagraph: firstPara,
            })
              .then((res) => setLoading(false))
              .catch((err) => setLoading(false));
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
            setLoading(false);
          });
      };
      reader.readAsArrayBuffer(featureImage);
      navigate("/admin/post-list");
    }
  };

  const handlePublish = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="p-2 mb-2 text-lg rounded-md font-semibold flex justify-between items-center">
        <FontAwesomeIcon
          icon={faBackward}
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <div> Create Post</div>
      </div>
      <form className="text-base">
        <div className="overflow-y-auto h-[28rem]">
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
              className="block w-full border border-slate-600 shadow-sm rounded-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none file:bg-white file:border-0 file:me-4 file:py-3 file:px-4"
            />
          </div>
          <div className="flex flex-col justify-center mt-4">
            <label htmlFor="title" className="block font-medium mb-1.5">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              value={title ?? ""}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Post Title"
              className="w-full border border-slate-600 rounded px-3 py-2 text-sm sm:text-base"
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
              className="w-full border border-slate-600 rounded px-3 py-2 text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col justify-center mt-4">
            <label htmlFor="content" className="block font-medium mb-1.5">
              Post Content
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              // config={config}
              // onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3 mt-5">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => handleSave(e)}
          >
            {loading ? "Save..." : "Save"}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePublish()}
          >
            Save & Publish
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
