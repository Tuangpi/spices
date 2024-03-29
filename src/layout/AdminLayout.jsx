import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    doSignOut().then((res) => navigate("/admin/login"));
  };

  return (
    <div className="flex items-start justify-between text-sm">
      <div className="sticky top-0 left-0 h-screen overflow-y-auto bg-gray-800 text-white hidden md:block md:w-[14%] py-8 px-4">
        {/* Sidebar content */}
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <ul>
          <li className="mb-4">
            <Link
              to="/admin/dashboard"
              className="block w-full py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/category-list"
              className="block w-full py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Category
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/recipes-list"
              className="block w-full py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Recipes
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admin/movie-list"
              className="block w-full py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Movies
            </Link>
          </li>
          {/* <li className="mb-4">
            <Link
              to="/admin/post-link"
              className="block w-full py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Post Link
            </Link>
          </li> */}
        </ul>
      </div>

      <div className="w-full md:w-[86%] bg-white">
        <nav className="flex justify-between items-center bg-white p-3.5 shadow">
          <Link to="/" target="_blank" className="font-medium">
            Visit to web site
          </Link>
          <div>
            <div className="relative">
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={() => setDropDown((prev) => !prev)}
              >
                <span>Username</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 100 20 10 10 0 000-20zM8 10a2 2 0 114 0 1 1 0 01-2 2 1 1 0 01-2 0 1 1 0 01-2 0zm2-6a2 2 0 100 4 2 2 0 000-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropDown && (
                <div className="absolute top-9 right-0 bg-white border border-gray-200 rounded shadow-md mt-2 w-48">
                  <ul>
                    <li>
                      <Link
                        to="/account"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        My Account
                      </Link>
                    </li>
                    <li onClick={() => handleLogout()}>
                      <button className="block w-full px-4 text-red-500 py-2 hover:bg-gray-200 text-left">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#D1D5DB",
              color: "#444",
            },
            error: {
              style: {
                background: "#F43F5E",
              },
            },
          }}
        />
        <div
          className="p-2 overflow-auto bg-gray-100"
          onClick={() => setDropDown(false)}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
