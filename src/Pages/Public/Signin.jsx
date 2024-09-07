import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import '../CSS/Signin.css';
import { useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Signin = ({ t }) => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // انجام هر کاری که شما نیاز دارید با داده‌ها
    };

    return (
        <div className="signin">
            <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>{t('navbar.signin')}</h3>
                <div className="signin-form-content">
                    <input
                        className='signin-form-section1-input1'
                        placeholder={t('form.username')}
                        type="text"
                        {...register('name', { required: true })}
                    />
                    <input
                        className='signin-form-section1-input2'
                        placeholder={t('form.phone1')}
                        type="tel"
                        {...register('phone', { required: true })}
                    />
                    <input
                        className='signin-form-section1-input3'
                        placeholder={t('form.password')}
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <div className="signin-form-btn">
                        <Button
                            intent='primary'
                            size='small'
                            label={t('navbar.signin')}
                        />
                    </div>
                </div>
                <div className="signin-form-signin">
                    <span>{t('form.text2')}</span>
                    <span
                        className="signin-form-signin-text2"
                        onClick={() => navigate('login')}
                    >
                        {t('navbar.login')}
                    </span>
                </div>
            </form>
        </div>
    )
}

export default withTranslation()(Signin);