import React, { startTransition, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Components/Laoder/Loader";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const Home = lazy(() => import('./Pages/Home'));
const ExWorks = lazy(() => import('./Pages/ExWorks'));
const Services = lazy(() => import('./Pages/Services'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Questions = lazy(() => import('./Pages/Questions'));
// import NotFound from "./Pages/NotFound";
// import Weblog from './Pages/Weblog';
// import Login from './Pages/Login';
// import SignIn from './Pages/Signin';

function App() {

  return (
    <Router>
      {/* <ScrollToTop /> */}
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
          </Route>
        </Routes>
      </Suspense>
      {/*
          <Route path="/weblog" element={<Weblog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} /> */}
    </Router>
  );
}

export default App;
