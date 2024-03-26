import { useEffect } from "react";

const Ads = ({ dataAdSlot }) => {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9308060714713198"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-adtest="on"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default Ads;
