import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Register } from "./pages/Register/Register";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Profile } from "./pages/Profile/Profile";
import { SearchMovie } from "./components/SearchMovie/SearchMovie";
import MovieProfile from "./components/SearchMovie/MovieProfile/MovieProfile";
import { AdminProfile } from "./pages/AdminProfile/AdminProfile";
import { EditUser } from "./pages/AdminProfile/EditUser/EditUser";
import { Login } from "./pages/Login/Login";
import { AuthProvider } from "./utils/AuthProvider";
import PrivateRoutes from "./utils/PrivateRoutes2";
import UserProfile from "./pages/UserProfile/UserProfile";
import Home from "./pages/Home/Home";
import UserCreateReview from "./components/UserCreateReview/UserCreateReview";
import { UserCreateCommentOnReview } from "./components/UserCreateCommentOnReview/UserCreateCommentOnReview";

function App() {
  return (
    <>
      <AuthProvider>
        {" "}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />

            {/*private*/}
            <Route element={<PrivateRoutes requiredRole="user" />}>
              {" "}
              <Route path="/profile/:id" element={<UserProfile />} />
              <Route
                path="/create-user-review/:id"
                element={<UserCreateReview />}
              />
              <Route
                path="/create-comment-on-review/:id/:movieId"
                element={<UserCreateCommentOnReview />}
              />
            </Route>

            <Route element={<PrivateRoutes requiredRole="admin" />}>
              <Route path="/admin-profile" element={<AdminProfile />} />
              <Route path="/edit-user/:id" element={<EditUser />} />
            </Route>

            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            <Route path="search-movie" element={<SearchMovie />} />
            <Route path="/movie/:id" element={<MovieProfile />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
