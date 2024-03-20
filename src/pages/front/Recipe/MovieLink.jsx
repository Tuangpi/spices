import { useLocation } from "react-router-dom";

const MovieLink = () => {
  const { state } = useLocation();

  return (
    <div className="flex justify-between items-center w-1/2 md:w-1/3 mt-6 gap-x-3">
      {state.embedLink && (
        <a
          href={`https://d000d.com/e/${state.embedLink}`}
          target="_blank"
          className="bg-red-500 px-2 py-1 outline-none rounded-md text-white block w-full text-center"
        >
          Watch
        </a>
      )}
      {state.downloadLink && (
        <a
          href={`https://d000d.com/d/${state.downloadLink}`}
          target="_blank"
          className="bg-blue-500 px-2 py-1 outline-none rounded-md text-white block w-full text-center"
        >
          Download
        </a>
      )}
    </div>
  );
};
export default MovieLink;
