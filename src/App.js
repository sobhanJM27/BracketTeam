import React, { startTransition, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Components/Laoder/Loader";

const Home = lazy(() => import('./Pages/Home'));
const ExWorks = lazy(() => import('./Pages/ExWorks'));
const Services = lazy(() => import('./Pages/Services'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Questions = lazy(() => import('./Pages/Questions'));
const Weblog = lazy(() => import('./Pages/Weblog'));
const Blog = lazy(() => import('./Pages/Blog'));
const NotFound = lazy(() => import('./Pages/NotFound'));

function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/exWorks"
              element={
                <ExWorks />
              } />
            <Route
              path="/services"
              element={
                <Services />
              } />
            <Route
              path="/aboutUs"
              element={
                <AboutUs />
              } />
            <Route
              path="/contactUs"
              element={
                <ContactUs />
              } />
            <Route
              path="/questions"
              element={
                <Questions />
              } />
            <Route
              path="/weblog"
              element={
                <Weblog />
              }
            />
            <Route
              path="/blog"
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
