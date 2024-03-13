import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const CreatePost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // const config = useMemo(
  //   {
  //     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: placeholder || "Start typings...",
  //   },
  //   [placeholder]
  // );
  // const config = {
  //   placeholder: "Start typings...",
  // };

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
              autoFocus
              required
              placeholder="Post Title"
              className="w-full border border-slate-600 rounded px-3 py-2 text-sm sm:text-base"
            />
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
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save & Publish
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
