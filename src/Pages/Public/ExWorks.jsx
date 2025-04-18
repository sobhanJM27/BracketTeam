import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ExWorks.css';
import Header from '../../Components/Header/Header';
import SearchIcon from '@mui/icons-material/Search';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';

const ExWorks = ({ t }) => {
  return (
    <div className="exworks">
      <HelmetProvider>
        <Helmet>
          <title>Bracket - {t('navbar.exWorks')}</title>
        </Helmet>
      </HelmetProvider>
      <Header title={t('navbar.exWorks')} />
      <div className="exworks-image">
        <div className="exworks-image-box">
          <Link to="https://metaashopp.com/">
            <div className="image-box1">
              <SearchIcon className="icon" />
            </div>
          </Link>
        </div>
        <div className="exworks-image-box">
          <Link to="https://saberzarei.com/">
            <div className="image-box2">
              <SearchIcon className="icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ExWorks);
