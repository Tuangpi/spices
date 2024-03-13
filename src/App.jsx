import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import Home from "./pages/home/Home";
import ContentDetail from "./pages/home/ContentDetail";
import About from "./pages/About";
import PopularDishes from "./pages/PopularDishes";
import ContactUs from "./pages/ContactUs";
import CategoryContent from "./pages/home/CategoryContent";
import AdminLayout from "./layout/AdminLayout";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import CreatePost from "./pages/admin/Post/CreatePost";
import Recipes from "./pages/Recipes";
import PostList from "./pages/admin/Post/PostList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<FrontLayout />}>
        <Route index element={<Home />} />
        <Route path="/content/detail" element={<ContentDetail />} />
        <Route path="/category/:id" element={<CategoryContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular-dishes" element={<PopularDishes />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>

      <Route path="/admin/login" element={<Login />} />

      <Route path="/admin/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="post-list" element={<PostList />} />
        <Route path="create-post" element={<CreatePost />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
