import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ExWorks from "./Pages/ExWorks";
import Questions from "./Pages/Questions";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs";
import Service from "./Pages/Service";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import NotFound from "./Pages/NotFound";
import Weblog from './Pages/Weblog';
import Login from './Pages/Login';
import SignIn from './Pages/Signin';

function Main() {
  return (
    <Router>
      <App />
    </Router>
  )
}


function App() {

  const location = useLocation();
  const isLogin_SiginPage = (location.pathname === '/login' || location.pathname === '/signIn');

  return (
    <div>
        {!isLogin_SiginPage && <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exWorks" element={<ExWorks />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path='/service' element={<Service />} />
          <Route path="/weblog" element={<Weblog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        {!isLogin_SiginPage && <Footer />}
    </div>
  );
}

export default Main;
