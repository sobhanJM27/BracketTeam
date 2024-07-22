import React, { useState } from 'react';
import './CSS/Login.css';
import bracket from '../Components/Assets/Images/b3-2.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const [phoneplaceholder, setPhonePlaceholder] = useState('شماره موبایل');
    const handleFocusPhone = () => {
        setPhonePlaceholder('');
    }
    const handleBlurPhone = () => {
        setPhonePlaceholder('شماره موبایل');
    }
    const [phone, setPhone] = useState('');
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const [passwordplaceholder, setPasswordplaceholder] = useState('رمز عبور');
    const handleFocusPassword = () => {
        setPasswordplaceholder('');
    }
    const handleBlurPassword = () => {
        setPasswordplaceholder('رمز عبور');
    }
    const [password, setPassword] = useState('');
    const handleChangePassword = (event) => {
        setPhone(event.target.value);
    }

    const navigate = useNavigate();

    return (
        <div className="login-page">
            <div className="login-page-logo">
                <div className="login-page-logo-text">
                    <p className='login-page-logo-text1'>Bracket</p>
                    <p className='login-page-logo-text2'>Bracketteam.net</p>
                </div>
                <img className='login-page-logo-img' src={bracket} alt="" />
            </div>
            <form onSubmit={handleSubmit} className='login'>
                <h1>ورود</h1>
                <div className='login-top'>
                    <input dir='rtl' autoComplete='off' type="tel" placeholder={phoneplaceholder} onFocus={handleFocusPhone} onBlur={handleBlurPhone} onChange={handleChangePhone} value={phone} />
                    <input dir='rtl' autoComplete='off' type="password" placeholder={passwordplaceholder} onFocus={handleFocusPassword} onBlur={handleBlurPassword} onChange={handleChangePassword} value={password} />
                </div>
                <button className='login-btn'>تایید</button>
                <div className='login-bottom'>
                    <p className='login-bottom-text1'>ثبت نام نکرده اید؟</p>
                    <p onClick={() => navigate('/')} className='login-bottom-text2'>ثبت نام</p>
                </div>
            </form>
        </div>
    )
}

export default Login;