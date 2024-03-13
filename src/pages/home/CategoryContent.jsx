import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
const CategoryContent = () => {
  const humburgerMenu = useOutletContext();
  const param = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={`${humburgerMenu ? "hidden" : null} h-screen`}>
      Category
    </section>
  );
};
export default CategoryContent;
