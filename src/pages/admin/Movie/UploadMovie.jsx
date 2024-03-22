import axios from "axios";
import React, { useEffect, useState } from "react";

const UploadMovie = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadUrl, setUploadUrl] = useState(null);
  const [video, setVideo] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setUploading(true);
    setUploadStatus("Uploading...");

    try {
      const response = await axios.post(uploadUrl, {
        api_key: "376215q6q556us5zk7bfq7",
        file: video,
      });

      if (response.ok) {
        setUploadStatus("Upload successful!");
      } else {
        setUploadStatus("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://doodapi.com/api/upload/server?key=376215q6q556us5zk7bfq7"
      )
      .then((res) => setUploadUrl(res.data.result));
  }, []);

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleFormSubmit}>
        <input
          name="file"
          type="file"
          onChange={(e) => setVideo(e.target.files[0])}
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md ${
            uploading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UploadMovie;
