import React from 'react';
import './CSS/AboutUs.css';
import { Link } from 'react-router-dom';
import image1 from '../Components/Assets/Images/img-17.webp';
import image2 from '../Components/Assets/Images/confident-african.webp';
import icon1 from '../Components/Assets/Images/icons8-tick-24 (2).png';
import PageTitle from '../Components/PageTitle/PageTitle';

const aboutUs = () => {
  return (
    <div className='about-us'>
      <PageTitle title="Bracket - درباره ما"/>
      <div className="about-us-header">
        <div className="about-us-header-top">
          <h1>درباره ما</h1>
          <div className="about-us-header-bottom">
            <Link to="/">صفحه اصلی</Link>
            <p className="about-us-header-bottom-direction">{'>'}</p>
            <p>درباره ما</p>
          </div>
        </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-container-right">
          <img src={image1} alt="" />
        </div>
        <div className="about-us-container-left">
          <div className="about-us-container-left-hdr">
            <h1>کیفیت</h1>
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
          <div className="about-us-section-right-contents">
            <div className="about-us-section-right-content">
              <div className="about-us-section-right-content-x">
                <img src={icon1} alt="" />
                <p className="text1">روی نتایج فعالیت تمرکز کنید</p>
              </div>
              <p className="text">متمرکز شدن بر نتایج فعالیت به خوبی موجب پیشرفت و توسعه می‌شود.</p>
            </div>
            <div className="about-us-section-right-content">
              <div className="about-us-section-right-content-x">
                <img src={icon1} alt="" />
                <p className="text1">به رشد کسب و کار خود کمک کنید</p>
              </div>
              <p className='text'>با خدمات مشاوره‌ای و استراتژی‌های بهبود رشد، کسب و کار شما را به سطح بالاتری هدایت خواهیم کرد.</p>
            </div>
            <div className="about-us-section-right-content">
              <div className="about-us-section-right-content-x">
                <img src={icon1} alt="" />
                <p className="text1">فراتر از یک مکان برای کار</p>
              </div>
              <p className='text'>یک فضای کاری متمایز که به شما امکان خلق و طراحی یک وبسایت منحصر به فرد را می‌دهد.</p>
            </div>
          </div>
        </div>
        <div className="about-us-section-left">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default aboutUs;
