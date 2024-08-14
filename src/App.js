import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import { Suspense, lazy } from "react";
import Loader from "./Components/Laoder/Loader";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const Home = lazy(() => import('./Pages/Home'));
const ExWorks = lazy(() => import('./Pages/ExWorks'));
const Service = lazy(() => import('./Pages/Service'));
// import Questions from "./Pages/Questions";
// import AboutUs from "./Pages/AboutUs";
// import ContactUs from "./Pages/ContactUs";
// import NotFound from "./Pages/NotFound";
// import Weblog from './Pages/Weblog';
// import Login from './Pages/Login';
// import SignIn from './Pages/Signin';

function App() {

  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route
            path="/exWorks"
            element={
              <Suspense fallback={<Loader />}>
                <ExWorks />
              </Suspense>
            } />
          <Route
            path="/service"  
            element={
              <Suspense fallback={<Loader />}>
                <Service />
              </Suspense>
            } />
          {/* <Route path="/questions" element={<Questions />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/weblog" element={<Weblog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
