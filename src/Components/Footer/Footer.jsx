import React from "react";
import "./Footer.css";
import bracket from "../Assets/Images/b3-2.png";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = ({ t }) => {
  const navigate = useNavigate();
  const { lang } = useParams();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            onClick={() => navigate(`/${lang}`)}
            src={bracket}
            alt="bracket"
          />
          <span>{t("footer.text1")}</span>
        </div>
        <div className="footer-contact">
          <span>{t("navbar.contactUs")}</span>
          <div className="footer-contact-details">
            <Link to="mailto:info@bracketteam.net" className="footer-email">
              <AlternateEmailIcon className="footer-icon" />
              info@bracketteam.net
            </Link>
            <Link to="tel:+98123456789" className="footer-phone">
              <PhoneIcon className="footer-icon" />
              {t("footer.phoneNumber")}
            </Link>
          </div>
        </div>
        <div className="footer-social">
          <span>{t("footer.social")}</span>
          <Link
            className="footer-instagram"
            to="https://www.instagram.com/bracketteam_net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="footer-icon" />
            bracketteam_net
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t("footer.text2")}</p>
      </div>
    </footer>
  );
};

export default withTranslation()(Footer);
