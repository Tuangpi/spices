import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

const CopyableText = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Url copied successfully !");
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  return (
    <span className="flex justify-start items-center">
      <input
        type="text"
        value={text}
        className="min-w-36 outline-none border border-slate-400 py-1 px-2 inline-block overflow-hidden"
      />
      <span className="pl-4 cursor-pointer" onClick={handleCopy}>
        <FontAwesomeIcon icon={faCopy} className="text-lg" />
      </span>
    </span>
  );
};

export default CopyableText;
