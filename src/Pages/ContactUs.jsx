import React, { useState } from 'react';
import './CSS/ContactUs.css';
import { Link } from 'react-router-dom';
import image1 from '../Components/Assets/Images/img-26-2.webp';
import icon1 from '../Components/Assets/Images/email-icon.png';
import icon2 from '../Components/Assets/Images/phone-icon.png';
import PageTitle from '../Components/PageTitle/PageTitle';

const ContactUs = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const [nameplaceholder, setNamePlaceholder] = useState('نام شما*');
  const handleFocusName = () => {
    setNamePlaceholder('');
  }
  const handleBlurName = () => {
    setNamePlaceholder('نام شما*');
  }
  const [fullName, setFullName] = useState('');
  const handleChangeName = (event) => {
    setFullName(event.target.value);
  }

  const [emailplaceholder, setEmailPlaceholder] = useState('ایمیل شما');
  const handleFocusEmail = () => {
    setEmailPlaceholder('');
  }
  const handleBlurEmail = () => {
    setEmailPlaceholder('ایمیل شما');
  }
  const [email, setEmail] = useState('');
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const [phoneplaceholder, setPhonePlaceholder] = useState('تلفن شما*');
  const handleFocusPhone = () => {
    setPhonePlaceholder('');
  }
  const handleBlurPhone = () => {
    setPhonePlaceholder('تلفن شما*');
  }
  const [phone, setPhone] = useState('');
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  }

  const [textplaceholder, setTextPlaceHolder] = useState('پیام ...');
  const handleFocusText = () => {
    setTextPlaceHolder('');
  }
  const handleBlurText = () => {
    setTextPlaceHolder('پیام ...')
  }
  const [text, setText] = useState('');
  const handleChangeText = (event) => {
    setText(event.target.value);
  }

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateName = () => {
    if (fullName === '') {
      setNameError('لطفا نام خود را وارد کنید.');
      return false;
    } else {
      setNameError('');
      return false;
    }

  }

  const validatePhone = () => {
    if (phone === '') {
      setPhoneError('لطفا شماره تلفن خود را وارد کنید.')
    }
  }

  const validateEmail = () => {
    if (email !== '' && !email.includes('@gmail.')) {
      setEmailError('لطفا ایمیل خود را درست وارد کنید.');
    } else {
      setEmailError('');
      return true;
    }
  }

  const loginHandler = () => {
    validateName();
    validatePhone();
    validateEmail();
    setFullName('');
    setEmail('');
    setPhone('');
    setText('');
  }


  return (
    <div className="contactUs">
      <PageTitle title='Bracket - تماس با ما' />
      <div className="contactUs-header">
        <div className="contactUs-header-top">
          <h1>تماس با ما</h1>
          <div className="contactUs-header-bottom">
            <Link to="/">صفحه اصلی</Link>
            <p className="contactUs-header-bottom-direction">{'>'}</p>
            <p>تماس با ما</p>
          </div>
        </div>
      </div>
      <div className="contactUs-section1">
        <div className="contactUs-section1-right">
          <img src={image1} alt="" />
        </div>
        <div className="contactUs-section1-left">
          <div className="section1-left-text">
            <div className="section1-left-header">
              <h1>کیفیت</h1>
              <h2>طریقه ارتباط با کارشناسان ما</h2>
            </div>
            <p>شما می‌توانید از طریق تلفن و ایمیل با ما در تماس باشید. تیم ما همواره آماده پاسخگویی به سوالات و مشکلات شماست. به خاطر داشته باشید که همواره احترام و حفظ حریم شخصی شما مورد توجه ماست.</p>
          </div>
          <div className="section1-left-information">
            <div className="section1-information1">
              <div className="section1-information1-logo">
                <img src={icon1} alt="" />
              </div>
              <div className="section1-information1-text">
                <p className="information1-text1">ایمیل ما</p>
                <p className="information1-text2">info@bracketteam.net</p>
              </div>
            </div>
            <div className="section1-information2">
              <div className="section1-information2-logo">
                <img src={icon2} alt="" />
              </div>
              <div className="section1-information2-text">
                <p className="information2-text1">تلفن ما</p>
                <p className="information2-text2">09178116652, 09035134830, 09395356683</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contactUs-form">
        <div className="contactUs-form-header">
          <h1>تماس با ما</h1>
        </div>
        <div className="contactUs-form-input">
          <div className="form-input-row1">
            <input autoComplete='off' type="text" placeholder={nameplaceholder} onFocus={handleFocusName} onBlur={handleBlurName} onChange={handleChangeName} value={fullName} required className="input1" />
            <input dir='rtl' autoComplete='off' type="tel" className='input2' placeholder={phoneplaceholder} onFocus={handleFocusPhone} onBlur={handleBlurPhone} onChange={handleChangePhone} value={phone} />
          </div>
          {(nameError && phoneError) && <div className="contactUs-error">
            {nameError && <div className="contactUs-error1">
              <p className='error1'>{nameError}</p>
            </div>}
            {phoneError && <div className="contactUs-error2">
              <p className='error2'>{phoneError}</p>
            </div>}
          </div>}
          <input autoComplete='off' type="email" className="input3" placeholder={emailplaceholder} onFocus={handleFocusEmail} onBlur={handleBlurEmail} onChange={handleChangeEmail} value={email} required />
          {emailError && <div className="contactUs-error">
            <p className='error3'>{emailError}</p>
          </div>}
          <textarea autoComplete='off' placeholder={textplaceholder} onFocus={handleFocusText} onBlur={handleBlurText} onChange={handleChangeText} value={text}></textarea>
        </div>
        <button onClick={loginHandler} className="contactUs-form-btn" >ارسال</button>
      </form>
    </div>
  )
}

export default ContactUs;
