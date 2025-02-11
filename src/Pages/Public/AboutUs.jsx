import React from 'react';
import '../CSS/AboutUs.css';
import image1 from '../../Components/Assets/Images/img-17.png';
import image2 from '../../Components/Assets/Images/confident-african.webp';
import Header from '../../Components/Header/Header';
import { aboutUsItems } from '../../Constants/aboutUsItems';
import Button from '../../Components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';
import DoneIcon from '@mui/icons-material/Done';

const AboutUs = ({ t }) => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <div className="about-us">
      <HelmetProvider>
        <Helmet>
          <title>Bracket - {t('navbar.aboutUs')}</title>
        </Helmet>
      </HelmetProvider>
      <Header title={t('navbar.aboutUs')} />
      <div className="about-us-container">
        <div className="about-us-container-right">
          <img src={image1} alt="aboutUs" />
        </div>
        <div className="about-us-container-left">
          <div className="about-us-container-left-hdr">
            <h2>{t('aboutUs.title1')}</h2>
            <div className="about-us-container-left-hdr-point"></div>
          </div>
          <p>{t('aboutUs.text1')}</p>
          <Button
            intent="secondary"
            size="large"
            label={t('navbar.contactUs')}
            onClick={() => navigate(`/${lang}/contactUs`)}
          />
        </div>
      </div>
      <div className="about-us-section" ref={ref}>
        <div className="about-us-section-right">
          <h2>{t('aboutUs.title2')}</h2>
          {aboutUsItems.map((item) => {
            return (
              <div key={item.key} className="about-us-section-right-contents">
                <div
                  className={`about-us-section-right-content staggered-entry${
                    item.key
                  } ${inView ? 'show3' : ''}`}
                >
                  <div className="about-us-section-right-content-right">
                    <DoneIcon className="about-us-doneicon" />
                    <span className="text1">{t(item.title)}</span>
                  </div>
                  <p className="text">{t(item.text)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="about-us-section-left">
          <img src={image2} alt="aboutUs" />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(AboutUs);
