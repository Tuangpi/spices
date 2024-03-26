import { Link, useLocation } from "react-router-dom";
import Ads from "../../component/Ads";

const MovieLink = () => {
  const { state } = useLocation();

  return (
    <div className="bg-white">
      <section className="min-h-screen flex flex-col w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 gap-x-3 m-auto bg-secondary rounded-md py-8">
        <div className="text-center">
          <h2 className="text-xl font-medium mb-4">Advertisement</h2>
          <Ads dataAdSlot="3740901430" />
        </div>
        {state && (
          <div className="w-1/2 m-auto">
            <Link
              to="/watch-movie"
              state={`https://d000d.com/d/${state}`}
              className="bg-blue-500 px-2 py-1 outline-none rounded-md text-white block w-full text-center"
            >
              Download
            </Link>
          </div>
        )}
        <div className="text-center">
          <h2 className="text-xl font-medium mb-4">Advertisement</h2>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Advertisement"
            className="mx-auto"
          />
        </div>
      </section>
      <footer className="font-Montserrat font-medium uppercase text-center bg-secondary py-2 text-xs md:text-sm mt-8">
        Copy Right &copy; {new Date().getFullYear()} - Spice of Myanmar
      </footer>
    </div>
  );
};
export default MovieLink;
