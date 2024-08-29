import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './ContactUsForm.css';

const ContactUsForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // انجام هر کاری که شما نیاز دارید با داده‌ها
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3>تماس با ما</h3>
            <div className="form-content">
                <div className="form-section1">
                    <input
                        className='form-section1-input1'
                        placeholder='نام شما *' type="text"
                        {...register('name', { required: true })}
                    />
                    <input
                        className='form-section1-input2'
                        placeholder='شماره تلفن شما *'
                        type="tel"
                        {...register('phone', { required: true })}
                    />
                </div>
                <input
                    className='form-input'
                    placeholder='ایمیل شما'
                    type="email"
                    {...register('email', { required: false })}
                />
                <textarea
                    className='form-textarea'
                    placeholder="پیام ..."
                    {...register('message', { required: true })}
                ></textarea>
                <div>
                    <Button
                        intent='primary'
                        size='large'
                        label='ارسال'
                    />
                </div>
            </div>
        </form>
    )
}

export default ContactUsForm;