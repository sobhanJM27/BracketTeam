import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import '../CSS/Signin.css';
import { useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { register } from '../../API/Auth';
import toast from 'react-hot-toast';  

const Signup = ({ t }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            if (response.token) {
                localStorage.setItem('token', response.token);
                toast.success(t('ثبت نام با موفقیت انجام شد'));
                navigate('admin');
            } else {
                toast.error(t('مشکلی در دریافت اطلاعات کاربری وجود دارد'));
            }
        } catch (error) {
            toast.error(t('مشکلی در ثبت نام شما رخ داد'));  
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="signin">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h3>{t('navbar.signin')}</h3>
                <div className="signin-form-content">
                    <input
                        className='signin-form-section1-input1'
                        name="firstName"
                        placeholder={t('form.firstName')}
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange} 
                    />
                    <input
                        className='signin-form-section1-input1'
                        name="lastName"
                        placeholder={t('form.lastName')}
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        className='signin-form-section1-input1'
                        name="email"
                        placeholder={t('form.email')}
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='signin-form-section1-input2'
                        name="phone"
                        placeholder={t('form.phone1')}
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        className='signin-form-section1-input3'
                        name="password"
                        placeholder={t('form.password')}
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <div className="signin-form-btn">
                        <Button
                            intent='primary'
                            size='small'
                            label={t('navbar.signin')}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
                <div className="signin-form-signin">
                    <span>{t('form.text2')}</span>
                    <span
                        className="signin-form-signin-text2"
                        onClick={() => navigate('/login')}
                    >
                        {t('navbar.login')}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default withTranslation()(Signup);
