import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './ContactUsForm.css';
import { withTranslation } from 'react-i18next';

const ContactUsForm = ({ t }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // انجام هر کاری که شما نیاز دارید با داده‌ها
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3>{t('navbar.contactUs')}</h3>
            <div className="form-content">
                <div className="form-section1">
                    <input
                        className='form-section1-input1'
                        placeholder={t('form.name')} type="text"
                        {...register('name', { required: true })}
                    />
                    <input
                        className='form-section1-input2'
                        placeholder={t('form.phone2')}
                        type="tel"
                        {...register('phone', { required: true })}
                    />
                </div>
                <input
                    className='form-input'
                    placeholder={t('form.email')}
                    type="email"
                    {...register('email', { required: false })}
                />
                <textarea
                    className='form-textarea'
                    placeholder={t('form.message')}
                    {...register('message', { required: true })}
                ></textarea>
                <div>
                    <Button
                        intent='primary'
                        size='large'
                        label={t('form.button')}
                    />
                </div>
            </div>
        </form>
    )
}

export default withTranslation()(ContactUsForm);