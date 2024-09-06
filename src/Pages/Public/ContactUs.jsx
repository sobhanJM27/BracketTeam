import '../CSS/ContactUs.css';
import image1 from '../../Components/Assets/Images/img-26-2.png';
import icon1 from '../../Components/Assets/Images/email-icon.png';
import icon2 from '../../Components/Assets/Images/phone-icon.png';
import Header from '../../Components/Header/Header';
import ContactUsForm from '../../Components/ContactUsForm/ContactUsForm';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';

const ContactUs = ({ t }) => {

  return (
    <div className="contactUs">
      <Helmet>
        <title>تماس با ما</title>
      </Helmet>
      <Header title={t('navbar.contactUs')} />
      <div className="contactUs-section1">
        <div className="contactUs-section1-right">
          <img
            src={image1}
            alt="contactUs"
          />
        </div>
        <div className="contactUs-section1-left">
          <div className="section1-left-text">
            <h2>{t('contactUs.title1')}</h2>
            <p>{t('contactUs.text1')}</p>
          </div>
          <div className="section1-left-information">
            <div className="section1-information">
              <div className="section1-information-logo">
                <img
                  src={icon1}
                  alt="contactUs"
                />
              </div>
              <div className="section1-information-text">
                <span className="information-text1">{t('contactUs.title2')}</span>
                <span className="information-text2">info@bracketteam.net</span>
              </div>
            </div>
            <div className="section1-information">
              <div className="section1-information-logo">
                <img
                  src={icon2}
                  alt="contactUs"
                />
              </div>
              <div className="section1-information-text">
                <span className="information-text1">{t('contactUs.title3')}</span>
                <span className="information-text2">{t('footer.phoneNumber')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
  )
}

export default withTranslation()(ContactUs);
