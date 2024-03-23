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
import RecipesList from "./pages/admin/Recipes/RecipesList";
import CreateRecipe from "./pages/admin/Recipes/CreateRecipe";
import Recipes from "./pages/front/Recipe/Recipes";
import RecipeDetail from "./pages/front/Recipe/RecipeDetail";
import RequiredAuth from "./component/RequiredAuth";
import NotFound from "./component/NotFound";
import AuthRedirect from "./component/AuthRedirect";
import UploadMovie from "./pages/admin/Movie/UploadMovie";
import MovieList from "./pages/admin/Movie/MovieList";
import WatchMovie from "./pages/front/WatchMovie";
import MovieLink from "./pages/front/MovieLink";
import EditRecipe from "./pages/admin/Recipes/EditRecipe";
import MoviePostLink from "./pages/admin/Movie/MoviePostLink";
import CategoryList from "./pages/admin/Category/CategoryList";
import CreateCategory from "./pages/admin/Category/CreateCategory";
import EditCategory from "./pages/admin/Category/EditCategory";

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

        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
      <Route path="/movie-link" element={<MovieLink />} />
      <Route path="/watch-movie" element={<WatchMovie />} />

      <Route element={<AuthRedirect />}>
        <Route path="/admin/login" element={<Login />} />
      </Route>

      <Route element={<RequiredAuth />}>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="category/edit" element={<EditCategory />} />
          <Route path="recipes-list" element={<RecipesList />} />
          <Route path="create-recipe" element={<CreateRecipe />} />
          <Route path="recipe/edit" element={<EditRecipe />} />
          <Route path="movie-list" element={<MovieList />} />
          <Route path="upload-movie" element={<UploadMovie />} />
          <Route path="movie-post-link/add" element={<MoviePostLink />} />
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
