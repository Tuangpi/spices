import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CategoryContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-8 w-[90%] m-auto sm:w-[86%] font-Montserrat mt-4">
      <div
        className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
        onClick={() => navigate("/recipes/detail/" + 1)}
      >
        <img src="" className="aspect-video object-cover" />
        <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
          Category Name
        </p>
        <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
      </div>
      <div
        className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
        onClick={() => navigate("/recipes/detail/" + 1)}
      >
        <img src="" className="aspect-video object-cover" />
        <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
          Category Name
        </p>
        <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
      </div>
      <div
        className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
        onClick={() => navigate("/recipes/detail/" + 1)}
      >
        <img src="" className="aspect-video object-cover" />
        <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
          Category Name
        </p>
        <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
      </div>
      <div
        className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
        onClick={() => navigate("/recipes/detail/" + 1)}
      >
        <img src="" className="aspect-video object-cover" />
        <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
          Category Name
        </p>
        <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
      </div>
      <div
        className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
        onClick={() => navigate("/recipes/detail/" + 1)}
      >
        <img src="" className="aspect-video object-cover" />
        <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
          Category Name
        </p>
        <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
      </div>
      <div
        className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
        onClick={() => navigate("/recipes/detail/" + 1)}
      >
        <img src="" className="aspect-video object-cover" />
        <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
          Category Name
        </p>
        <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
      </div>
      <div
        className="rounded-b-md border border-slate-100 shadow-md mt-4 cursor-pointer hover:border-slate-200 hover:scale-105 transition-all ease-in duration-200 mb-20"
        onClick={() => navigate("/recipes/detail/" + 1)}
      >
        <img src="" className="aspect-video object-cover" />
        <p className="pl-3 text-xs font-medium uppercase text-slate-600 pt-3">
          Category Name
        </p>
        <p className="pl-3 text-xl font-medium pt-2 pb-6">Title</p>
      </div>
    </section>
  );
};
export default CategoryContent;
