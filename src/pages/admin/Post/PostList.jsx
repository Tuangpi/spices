import React from "react";
import { useNavigate } from "react-router-dom";

const postList = Array.from({ length: 10 }, (_, index) => ({
  title: `Title ${index + 1}`,
}));

const PostList = () => {
  const navigate = useNavigate();
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
            <th className="border px-4 py-2">No.</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((p, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{p.title}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
