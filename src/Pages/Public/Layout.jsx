import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { withTranslation } from "react-i18next";
import { useEffect } from "react";

function Layout({ i18n }) {

  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();

  useEffect(() => {
    const newPath = location.pathname.replace(/\/fa|\/en/, `/${i18n.language}`);
    if (location.pathname !== newPath) {
      navigate(newPath);
    }
  }, [i18n.language, location.pathname, navigate]);

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const direction = i18n.language === 'fa' ? 'rtl' : 'ltr';

  return (
    <div dir={direction}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default withTranslation()(Layout);