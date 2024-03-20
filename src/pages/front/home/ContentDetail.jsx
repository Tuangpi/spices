import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ads1 from "../../../assets/ads1.gif";
import ads2 from "../../../assets/ads2.gif";

const ContentDetail = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 m-auto font-Montserrat mt-5">
      {location.state && (
        <div>
          <h4 className="font-medium text-2xl mt-4 sm:mt-0">
            {location.state.title}
          </h4>
          <div className="aspect-auto bg-red-600 mt-4">
            <img
              src={location.state.img}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="w-full m-auto mt-4">
            <img src={ads1} alt="ads1" className="w-full" />
          </div> */}
          <p className="text-lg font-light mt-5">{location.state.detail}</p>
          {/* <div className="w-full m-auto mt-5">
            <img src={ads2} alt="ads1" className="w-full" />
          </div> */}
        </div>
      )}
    </section>
  );
};
export default ContentDetail;
