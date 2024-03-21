import { useLocation } from "react-router-dom";

const MovieLink = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <section className="flex flex-col w-1/2 md:w-1/3 mt-6 gap-x-3 m-auto">
      <div className="mt-2 text-center mb-8">
        <h2 className="text-xl font-medium mb-4">Advertisement</h2>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Advertisement"
          className="mx-auto"
        />
      </div>
      {state && (
        <a
          href={`https://d000d.com/d/${state}`}
          target="_blank"
          className="bg-blue-500 px-2 py-1 outline-none rounded-md text-white block w-full text-center"
        >
          Download
        </a>
      )}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-medium mb-4">Advertisement</h2>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Advertisement"
          className="mx-auto"
        />
      </div>
    </section>
  );
};
export default MovieLink;
