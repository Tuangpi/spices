import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { db, storage } from "../../../firebase/firebase";
import { useAuth } from "../../../component/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const CreatePost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [loading, setLoading] = useState(false);

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
    }
  };

  const handlePublish = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mb-6 mt-3 text-xl font-semibold">Create Post</div>
      <form>
        <div className="overflow-y-auto h-[28rem]">
          <div className="flex flex-col justify-center">
            <label
              htmlFor="file-input"
              className="block text-lg font-medium mb-1.5"
            >
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
            <label htmlFor="title" className="block text-lg font-medium mb-1.5">
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
          <div className="flex items-center justify-between mt-4 gap-x-4">
            <div className="w-full">
              <label
                htmlFor="embed-video-link"
                className="block text-lg font-medium mb-1.5"
              >
                Embed Video Link
              </label>
              <input
                type="text"
                id="embed-video-link"
                autoFocus
                required
                placeholder="Embed Video Link"
                className="w-full border border-slate-600 rounded px-3 py-2 text-sm sm:text-base"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="download-video-link"
                className="block text-lg font-medium mb-1.5"
              >
                Download Video Link
              </label>
              <input
                type="text"
                id="down-video-link"
                autoFocus
                required
                placeholder="Download Video Link"
                className="w-full border border-slate-600 rounded px-3 py-2 text-sm sm:text-base"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center mt-4">
            <label
              htmlFor="content"
              className="block text-lg font-medium mb-1.5"
            >
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
