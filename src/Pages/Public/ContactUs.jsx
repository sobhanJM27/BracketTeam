import '../CSS/ContactUs.css';
import image1 from '../../Components/Assets/Images/img-26-2.png';
import icon1 from '../../Components/Assets/Images/email-icon.png';
import icon2 from '../../Components/Assets/Images/phone-icon.png';
import Header from '../../Components/Header/Header';
import ContactUsForm from '../../Components/ContactUsForm/ContactUsForm';

const ContactUs = () => {

  return (
    <div className="contactUs">
      <Header title='تماس با ما' />
      <div className="contactUs-section1">
        <div className="contactUs-section1-right">
          <img
            src={image1}
            alt="contactUs"
          />
        </div>
        <div className="contactUs-section1-left">
          <div className="section1-left-text">
            <h2>طریقه ارتباط با کارشناسان ما</h2>
            <p>
              شما می‌توانید از طریق تلفن و ایمیل با ما در تماس باشید. تیم ما همواره آماده پاسخگویی به سوالات و مشکلات شماست. به خاطر داشته باشید که همواره احترام و حفظ حریم شخصی شما مورد توجه ماست.
            </p>
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
                <span className="information-text1">ایمیل ما</span>
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
                <span className="information-text1">تلفن ما</span>
                <span className="information-text2">09395356683</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
  )
}

export default ContactUs;
