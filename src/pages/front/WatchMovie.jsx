import { useLocation } from "react-router-dom";

const WatchMovie = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="flex justify-center items-center">
      {state && (
        <iframe
          width="1366"
          height="768"
          src={state}
          title=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default WatchMovie;
