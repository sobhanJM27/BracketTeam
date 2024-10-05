import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Public/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Components/Laoder/Loader";
import AdminLayout from "./Pages/Admin/AdminLayout";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import RequireAuth from "./Utils/RequireAuth";
import { useInitialAuth } from "./Hooks/useAuth";
import bracket from './Components/Assets/Images/b3-2.jpg'
import { CheckLangRedirect } from "./Components/CheckLangRedirect/CheckLangRedirect";

const Home = lazy(() => import('./Pages/Public/Home'));
const ExWorks = lazy(() => import('./Pages/Public/ExWorks'));
const Services = lazy(() => import('./Pages/Public/Services'));
const AboutUs = lazy(() => import('./Pages/Public/AboutUs'));
const ContactUs = lazy(() => import('./Pages/Public/ContactUs'));
const Questions = lazy(() => import('./Pages/Public/Questions'));
const Weblog = lazy(() => import('./Pages/Public/Weblog'));
const Blog = lazy(() => import('./Pages/Public/Blog'));
const NotFound = lazy(() => import('./Pages/Public/NotFound'));
const Login = lazy(() => import('./Pages/Public/Login'));
const Signup = lazy(() => import('./Pages/Public/Signup'));

const AdminDashboard = lazy(() => import('./Pages/Admin/AdminDasboard'));
const AdminWeblog = lazy(() => import('./Pages/Admin/AdminWeblog'));
const EditBlog = lazy(() => import('./Pages/Admin/EditBlog'));
const AdminCategories = lazy(() => import('./Pages/Admin/AdminCategories'));

function App() {

  const isReady = useInitialAuth();

  if (!isReady)
    return (
      <div class="logo-container">
        <img src={bracket} alt='bracket' className="logo" />
      </div>
    );

  return (
    <Router>
      <CheckLangRedirect />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/fa" />}
          />
          <Route
            path="/:lang"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="/:lang/exWorks"
              element={<ExWorks />}
            />
            <Route
              path="/:lang/services"
              element={<Services />}
            />
            <Route
              path="/:lang/aboutUs"
              element={<AboutUs />}
            />
            <Route
              path="/:lang/contactUs"
              element={<ContactUs />}
            />
            <Route
              path="/:lang/questions"
              element={<Questions />}
            />
            <Route
              path="/:lang/blog"
              element={<Weblog />}
            />
            <Route
              path="/:lang/blog/:id"
              element={<Blog />}
            />
            <Route
              path="/:lang/login"
              element={<Login />}
            />
            <Route
              path="/:lang/signup"
              element={<Signup />}
            />
            <Route
              path="/:lang/admin"
              element={
                // <RequireAuth allowedRoles={["USER", "ADMIN"]}>
                <AdminLayout />
                // </RequireAuth>
              }
            >
              <Route
                index
                element={<AdminDashboard />}
              />
              <Route
                path="/:lang/admin/weblog"
                element={<AdminWeblog />}
              />
              <Route
                path="/:lang/admin/edit-weblog/:id"
                element={<EditBlog />}
              />
              <Route
                path="/:lang/admin/categories"
                element={<AdminCategories />}
              />
            </Route>
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
