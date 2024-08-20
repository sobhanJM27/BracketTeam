import React from 'react';
import './CSS/AboutUs.css';
import { Link } from 'react-router-dom';
import image1 from '../Components/Assets/Images/img-17.webp';
import image2 from '../Components/Assets/Images/confident-african.webp';
import icon1 from '../Components/Assets/Images/icons8-tick-24 (2).png';
import PageTitle from '../Components/PageTitle/PageTitle';
import Header from '../Components/Header/Header';
import { aboutUsItems } from '../Constants/aboutUsItems';

const aboutUs = () => {
  return (
    <div className='about-us'>
      <PageTitle title="Bracket - درباره ما" />
      <Header title='درباره ما' />
      <div className="about-us-container">
        <div className="about-us-container-right">
          <img src={image1} alt="" />
        </div>
        <div className="about-us-container-left">
          <div className="about-us-container-left-hdr">
            <h2>تجربه داشتن یک سایت با کیفیت</h2>
            <div className="about-us-container-left-hdr-point"></div>
          </div>
          <p>با تکیه بر تیم حرفه‌ای ما در زمینه طراحی و توسعه وب، عملکرد بهینه و رضایت حداکثری کاربران را در سایت شما به ارمغان می‌آورد. ما تلاش می‌کنیم تا با ایجاد تجربه‌ای بی‌نظیر، درخشش شما را در دنیای آنلاین به عنوان یک برند برتر بیان کنیم.</p>
          <Link to="/contactUs">تماس با ما</Link>
        </div>
      </div>
      <div className="about-us-section">
        <div className="about-us-section-right">
          <div className="about-us-section-right-hdr">
            <h2>برای طراحی سایت های خود از کارشناسان ما کمک بخواهید</h2>
          </div>
          {
            aboutUsItems.map((item, id) => {
              return (
                <div key={id} className="about-us-section-right-contents">
                  <div className="about-us-section-right-content">
                    <div className="about-us-section-right-content-right">
                      <img src={icon1} alt="" />
                      <span className="text1">{item.title}</span>
                    </div>
                    <p className="text">{item.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="about-us-section-left">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default aboutUs;
