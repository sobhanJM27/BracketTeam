import React from "react";
import "./Header.css";
import { Link, useParams } from "react-router-dom";
import { withTranslation } from "react-i18next";

const Header = ({ title, t }) => {
  const { lang } = useParams();

  return (
    <div className="header">
      <div className="header-top">
        <h1>{title}</h1>
        <div className="header-bottom">
          <Link to={`/${lang}`}>{t("homePage")}</Link>
          <p className="header-bottom-direction">{">"}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Header);
