import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Layout from "./Pages/Public/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Components/Laoder/Loader";
import AdminLayout from "./Pages/Admin/AdminLayout";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

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

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/:lang"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="exWorks"
              element={<ExWorks />}
            />
            <Route
              path="services"
              element={<Services />}
            />
            <Route
              path="aboutUs"
              element={<AboutUs />}
            />
            <Route
              path="contactUs"
              element={<ContactUs />}
            />
            <Route
              path="questions"
              element={<Questions />}
            />
            <Route
              path="blog"
              element={<Weblog />}
            />
            <Route
              path="blog/:id"
              element={<Blog />}
            />
            <Route
              path="login"
              element={<Login />}
            />
            <Route
              path="signup"
              element={<Signup />}
            />
            <Route
              path="admin"
              element={<AdminLayout />}
            >
              <Route
                index
                element={<AdminDashboard />}
              />
              <Route
                path="adminWeblog"
                element={<AdminWeblog />}
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
