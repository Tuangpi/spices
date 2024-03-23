import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import CopyableText from "../../../component/CopyableText";

const MovieList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const options = {
      method: "POST",
      url: "https://http-cors-proxy.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        Origin: "www.example.com",
        "X-Requested-With": "www.example.com",
        "X-RapidAPI-Key": "e30e552cbdmsh4adfd2563d57d7bp1429c2jsn8096ef34f5f4",
        "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
      },
      data: {
        url: "https://doodapi.com/api/file/list?key=376215q6q556us5zk7bfq7",
      },
    };

    try {
      const response = await axios.request(options);
      setMovies(response.data.result);
      console.log(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto min-h-screen">
      <div className="text-xl font-medium mb-5">Movie List</div>
      <div className="bg-white rounded-md p-3">
        <div className="flex justify-end items-center mb-2">
          {/* <button
          onClick={() => navigate("/admin/update-movie")}
          className="bg-blue-500 text-white px-2 py-1 rounded-md outline-none"
        >
          Upload Movie
        </button> */}
        </div>
        <table className="table-auto border-collapse w-full">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-4 py-2 text-left">No.</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2 text-left">Url</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              movies &&
              movies.files.map((m, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{m.title}</td>
                  <td className="border px-4 py-2 w-1/6">
                    <img
                      src={m.single_img}
                      alt="asdf"
                      className="object-cover rounded-md"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <CopyableText text="http://localhost:5173/recipes/detail/1hdNoR7B3DcWfCAORK2K/ecy4sd3u6ml8" />
                  </td>
                  <td className="border px-4 py-2">
                    <span
                      className="cursor-pointer bg-blue-400 rounded-md outline-none px-2 py-1 text-sm hover:bg-blue-500"
                      onClick={() => navigate("/admin/movie-post-link/add")}
                    >
                      Add in Post
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

export default MovieList;
