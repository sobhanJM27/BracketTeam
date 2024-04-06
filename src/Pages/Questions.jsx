import React, { useState } from 'react';
import './CSS/Questions.css';
import { Link } from 'react-router-dom';
import icon1 from '../Components/Assets/Images/phone-number-icon.png';
import icon2 from '../Components/Assets/Images/call-center-icon.png';
import { CSSTransition } from 'react-transition-group';
import FaqPage from '../Components/FaqPage/FaqPage';
import PageTitle from '../Components/PageTitle/PageTitle';


const Questions = () => {

  const [showText, setShowText] = useState(false);

  const handleText = () => {
    setShowText(!showText);
  }

  return (
    <>
      <div className='questions'>
        <PageTitle title='Bracket - سوالات متداول'/>
        <div className="questions-header">
          <div className="questions-header-top">
            <h1>سوالات متداول</h1>
            <div className="questions-header-bottom">
              <Link to="/">صفحه اصلی</Link>
              <p className="questions-header-bottom-direction">{'>'}</p>
              <p>سوالات متداول</p>
            </div>
          </div>
        </div>
        <div className="questions-container">
          <div className="questions-container-right">
            <div className="container-right-header">
              <h1>نقل و قول</h1>
              <h2>برای کسب اطلاعات جزئیات را بررسی کنید</h2>
            </div>
            <div className="container-right-text">
              <p className="container-text">اولین مرحله برای کسب اطلاعات جزئیات، مراجعه به قسمت “سوالات متداول” یا “پرسش‌های متداول” در سایت ماست. در این قسمت، از کلیه پرسش‌ها و استفسارات متداول مشتریان پاسخ‌های کامل و دقیقی شده است.</p>
              <p className="container-text">همچنین، بهترین راه برای کسب اطلاعات دقیق و جزئیات بیشتر این است که از طریق فرم تماس یا ایمیل با تیم پشتیبانی ما در ارتباط باشید. تیم پشتیبانی ما آماده است که به تمامی سوالات شما پاسخ دهد و اطلاعات لازم را در اختیارتان قرار دهد.</p>
              <p className="container-text">با این روش‌ها، مشتریان می‌توانند به راحتی از جزئیات مهم و اطلاعات لازم برای خرید و استفاده از خدمات ما مطلع شوند.</p>
            </div>
            <Link className="questions-container-link" to="/contactUs">مشاهده بیشتر</Link>
          </div>
          <div className="questions-container-left">
            <div className="questions-container-box">
              <img src={icon1} alt="" />
              <h3>مشاوره رایگان</h3>
            </div>
            <div className="questions-container-box2">
              <img src={icon2} alt="" />
              <h3>تیم ما</h3>
            </div>
          </div>
        </div>
        <FaqPage/>
      </div >
    </>
  )
}

export default Questions;
