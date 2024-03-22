import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import Home from "./pages/front/home/Home";
import ContentDetail from "./pages/front/home/ContentDetail";
import CategoryContent from "./pages/front/home/CategoryContent";
import About from "./pages/front/About";
import PopularDishes from "./pages/front/PopularDishes";
import ContactUs from "./pages/front/ContactUs";
import Login from "./pages/admin/Login";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import PostList from "./pages/admin/Post/PostList";
import CreatePost from "./pages/admin/Post/CreatePost";
import Recipes from "./pages/front/Recipe/Recipes";
import RecipeDetail from "./pages/front/Recipe/RecipeDetail";
import MovieLink from "./pages/front/Recipe/MovieLink";
import RequiredAuth from "./component/RequiredAuth";
import NotFound from "./component/NotFound";
import AuthRedirect from "./component/AuthRedirect";
import UploadMovie from "./pages/admin/Movie/UploadMovie";
import MovieList from "./pages/admin/Movie/MovieList";

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

        <Route
          path="/recipes/detail/:id/:downloadLink"
          element={<RecipeDetail />}
        />
        <Route path="/recipes/detail/:id" element={<RecipeDetail />} />
        <Route path="/movie-link" element={<MovieLink />} />

        <Route path="/contact-us" element={<ContactUs />} />
      </Route>

      <Route element={<AuthRedirect />}>
        <Route path="/admin/login" element={<Login />} />
      </Route>

      <Route element={<RequiredAuth />}>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="post-list" element={<PostList />} />
          <Route path="movie-list" element={<MovieList />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="update-movie" element={<UploadMovie />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
