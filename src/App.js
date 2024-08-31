import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Public/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Components/Laoder/Loader";
import AdminLayout from "./Pages/Admin/AdminLayout";

const Home = lazy(() => import('./Pages/Public/Home'));
const ExWorks = lazy(() => import('./Pages/Public/ExWorks'));
const Services = lazy(() => import('./Pages/Public/Services'));
const AboutUs = lazy(() => import('./Pages/Public/AboutUs'));
const ContactUs = lazy(() => import('./Pages/Public/ContactUs'));
const Questions = lazy(() => import('./Pages/Public/Questions'));
const Weblog = lazy(() => import('./Pages/Public/Weblog'));
const Blog = lazy(() => import('./Pages/Public/Blog'));
const NotFound = lazy(() => import('./Pages/Public/NotFound'));

function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="exWorks"
              element={
                <ExWorks />
              } />
            <Route
              path="services"
              element={
                <Services />
              } />
            <Route
              path="aboutUs"
              element={
                <AboutUs />
              } />
            <Route
              path="contactUs"
              element={
                <ContactUs />
              } />
            <Route
              path="questions"
              element={
                <Questions />
              } />
            <Route
              path="weblog"
              element={
                <Weblog />
              }
            />
            <Route
              path="blog/:id"
              element={
                <Blog />
              }
            />
            <Route
              path="*"
              element={
                <NotFound />
              }
            />
          </Route>
          <Route
            path="admin"
            element={
              <AdminLayout />
            }
          >

          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
