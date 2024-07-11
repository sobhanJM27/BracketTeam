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
import NotFound from "./Pages/NotFound";
import Weblog from "./Pages/Weblog";
import { Helmet } from "react-helmet";

function App() {

  return (
    <div>
      <Helmet>
        <title>bracetteam</title>
        <meta name="description" content="توضیحات سایت شما" />
        <script type="application/ld+json">
        {
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "https://bracketteam.net/",
            "logo": "./public/bracket.png"
          }
        }
        </script>
      </Helmet>
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
          {/* <Route path='/weblog' element={<Weblog />} />  */}
          {/* /:id */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
