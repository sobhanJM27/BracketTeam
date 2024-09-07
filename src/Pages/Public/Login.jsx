import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import '../CSS/Login.css';
import { useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Login = ({ t }) => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // انجام هر کاری که شما نیاز دارید با داده‌ها
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>{t('navbar.login')}</h3>
                <div className="login-form-content">
                    <input
                        className='login-form-section1-input1'
                        placeholder={t('form.phone1')}
                        type="tel"
                        {...register('phone', { required: true })}
                    />
                    <input
                        className='login-form-section1-input2'
                        placeholder={t('form.password')}
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <div className="login-form-btn">
                        <Button
                            intent='primary'
                            size='small'
                            label={t('navbar.login')}
                        />
                    </div>
                </div>
                <div className="login-form-signin">
                    <span>{t('form.text1')}</span>
                    <span
                        className="login-form-signin-text2"
                        onClick={() => navigate('signin')}
                    >
                        {t('navbar.signin')}
                    </span>
                </div>
            </form>
        </div>
    )
}

export default withTranslation()(Login);