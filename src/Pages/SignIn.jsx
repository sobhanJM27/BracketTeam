import React, { useState } from 'react';
import './CSS/SignIn.css';
import bracket from '../Components/Assets/Images/b3-2.jpg';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const [userplaceholder, setUserPlaceholder] = useState('نام کاربری');
    const handleFocusUser = () => {
        setUserPlaceholder('');
    }
    const handleBlurUser = () => {
        setUserPlaceholder('نام کاربری');
    }
    const [user, setUser] = useState('');
    const handleChangeUser = (event) => {
        setUser(event.target.value);
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
        <div className="signIn-page">
            <div className="signIn-page-logo">
                <div className="signIn-page-logo-text">
                    <p className='signIn-page-logo-text1'>Bracket</p>
                    <p className='signIn-page-logo-text2'>Bracketteam.net</p>
                </div>
                <img className='signIn-page-logo-img' src={bracket} alt="" />
            </div>
            <form onSubmit={handleSubmit} className='signIn'>
                <h1>ثبت نام</h1>
                <div className='signIn-top'>
                    <input dir='rtl' autoComplete='off' type="tel" placeholder={userplaceholder} onFocus={handleFocusUser} onBlur={handleBlurUser} onChange={handleChangeUser} value={user} />
                    <input dir='rtl' autoComplete='off' type="tel" placeholder={phoneplaceholder} onFocus={handleFocusPhone} onBlur={handleBlurPhone} onChange={handleChangePhone} value={phone} />
                    <input dir='rtl' autoComplete='off' type="password" placeholder={passwordplaceholder} onFocus={handleFocusPassword} onBlur={handleBlurPassword} onChange={handleChangePassword} value={password} />
                </div>
                <button className='signIn-btn'>تایید</button>
                <div className='signIn-bottom'>
                    <p className='signIn-bottom-text1'>ثبت نام کرده اید؟</p>
                    <p onClick={() => navigate('/login')} className='signIn-bottom-text2'>ورود</p>
                </div>
            </form>
        </div>
    )
}

export default SignIn;