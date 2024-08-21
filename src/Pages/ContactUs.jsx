import './CSS/ContactUs.css';
import image1 from '../Components/Assets/Images/img-26-2.webp';
import icon1 from '../Components/Assets/Images/email-icon.png';
import icon2 from '../Components/Assets/Images/phone-icon.png';
import PageTitle from '../Components/PageTitle/PageTitle';
import Header from '../Components/Header/Header';

const ContactUs = () => {

  return (
    <div className="contactUs">
      <Header title='تماس با ما' />
      <div className="contactUs-section1">
        <div className="contactUs-section1-right">
          <img src={image1} alt="" />
        </div>
        <div className="contactUs-section1-left">
          <div className="section1-left-text">
            <h2>طریقه ارتباط با کارشناسان ما</h2>
            <p>
              شما می‌توانید از طریق تلفن و ایمیل با ما در تماس باشید. تیم ما همواره آماده پاسخگویی به سوالات و مشکلات شماست. به خاطر داشته باشید که همواره احترام و حفظ حریم شخصی شما مورد توجه ماست.
            </p>
          </div>
          <div className="section1-left-information">
            <div className="section1-information1">
              <div className="section1-information1-logo">
                <img src={icon1} alt="" />
              </div>
              <div className="section1-information1-text">
                <span className="information1-text1">ایمیل ما</span>
                <span className="information1-text2">info@bracketteam.net</span>
              </div>
            </div>
            <div className="section1-information2">
              <div className="section1-information2-logo">
                <img src={icon2} alt="" />
              </div>
              <div className="section1-information2-text">
                <span className="information2-text1">تلفن ما</span>
                <span className="information2-text2">09178116652, 09035134830, 09395356683</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
