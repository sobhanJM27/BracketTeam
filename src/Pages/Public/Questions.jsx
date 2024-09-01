import React from 'react';
import '../CSS/Questions.css';
import icon1 from '../../Components/Assets/Images/phone-number-icon.png';
import icon2 from '../../Components/Assets/Images/call-center-icon.png';
import FaqPage from '../../Components/FaqPage/FaqPage';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Questions = () => {

  const navigate = useNavigate();

  return (
    <div className='questions'>
      <Helmet>
        <title>سوالات متداول</title>
      </Helmet>
      <Header title='سوالات متداول' />
      <div className="questions-container">
        <div className="questions-container-right">
          <h2>برای کسب اطلاعات جزئیات را بررسی کنید</h2>
          <div className="container-right-text">
            <p className="container-text">
              اولین مرحله برای کسب اطلاعات جزئیات، مراجعه به قسمت “سوالات متداول” یا “پرسش‌های متداول” در سایت ماست. در این قسمت، از کلیه پرسش‌ها و استفسارات متداول مشتریان پاسخ‌های کامل و دقیقی شده است.
            </p>
            <p className="container-text">همچنین، بهترین راه برای کسب اطلاعات دقیق و جزئیات بیشتر این است که از طریق فرم تماس یا ایمیل با تیم پشتیبانی ما در ارتباط باشید. تیم پشتیبانی ما آماده است که به تمامی سوالات شما پاسخ دهد و اطلاعات لازم را در اختیارتان قرار دهد.
            </p>
            <p className="container-text">
              با این روش‌ها، مشتریان می‌توانند به راحتی از جزئیات مهم و اطلاعات لازم برای خرید و استفاده از خدمات ما مطلع شوند.
            </p>
          </div>
          <div>
            <Button
              intent='primary'
              size='large'
              label='مشاهده بیشتر'
              onClick={() => navigate('/services')}
            />
          </div>
        </div>
        <div className="questions-container-left">
          <div className="questions-container-box">
            <img
              src={icon1}
              alt="phone"
            />
            <h3>مشاوره رایگان</h3>
          </div>
          <div className="questions-container-box">
            <img
              src={icon2}
              alt="headphone"
            />
            <h3>تیم ما</h3>
          </div>
        </div>
      </div>
      <FaqPage />
    </div >
  )
}

export default Questions;
