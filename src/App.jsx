import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exWorks" element={<ExWorks />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path='/service' element={<Service />} />
          <Route path="*" element={<h1 style={{ margin: '200px 550px', width: '600px' }}>*چنین صفحه ای یافت نشد*</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
