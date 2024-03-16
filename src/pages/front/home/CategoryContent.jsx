import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../../../assets/1.webp";
import pic2 from "../../../assets/2.webp";
import pic4 from "../../../assets/test.jpeg";
import test from "../../../assets/test.jpeg";
import BreadCrumb from "../../../component/BreadCrumb";

const CategoryContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-[90%] m-auto sm:w-[86%] font-Montserrat mt-5">
      <BreadCrumb data={[{ link: "/", name: "Home" }]} />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-8">
        <div
          className="bg-slate-50 rounded-b-md border border-slate-100 shadow-md cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200"
          onClick={() => navigate("/recipes/detail/" + 1)}
        >
          <img src={pic1} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            Category Name
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
        </div>
        <div
          className="bg-slate-50 rounded-b-md border border-slate-100 shadow-md cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200"
          onClick={() => navigate("/recipes/detail/" + 1)}
        >
          <img src={pic2} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            Category Name
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
        </div>
        <div
          className="bg-slate-50 rounded-b-md border border-slate-100 shadow-md cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200"
          onClick={() => navigate("/recipes/detail/" + 1)}
        >
          <img src={pic4} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            Category Name
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
        </div>
        <div
          className="bg-slate-50 rounded-b-md border border-slate-100 shadow-md cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200"
          onClick={() => navigate("/recipes/detail/" + 1)}
        >
          <img src={test} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            Category Name
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
        </div>
        <div
          className="bg-slate-50 rounded-b-md border border-slate-100 shadow-md cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200"
          onClick={() => navigate("/recipes/detail/" + 1)}
        >
          <img src={pic4} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            Category Name
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
        </div>
        <div
          className="bg-slate-50 rounded-b-md border border-slate-100 shadow-md cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200"
          onClick={() => navigate("/recipes/detail/" + 1)}
        >
          <img src={pic2} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            Category Name
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
        </div>
        <div
          className="bg-slate-50 rounded-b-md border border-slate-100 shadow-md cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200"
          onClick={() => navigate("/recipes/detail/" + 1)}
        >
          <img src={pic1} className="aspect-video object-cover" />
          <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
            Category Name
          </p>
          <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
        </div>
      </div>
    </section>
  );
};
export default CategoryContent;
