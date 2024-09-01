import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import '../CSS/Signin.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // انجام هر کاری که شما نیاز دارید با داده‌ها
    };

    return (
        <div className="signin">
            <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>ثبت نام</h3>
                <div className="signin-form-content">
                    <input
                        className='login-form-section1-input1'
                        placeholder='نام کاربری شما'
                        type="text"
                        {...register('name', { required: true })}
                    />
                    <input
                        className='signin-form-section1-input1'
                        placeholder='شماره تلفن شما'
                        type="tel"
                        {...register('phone', { required: true })}
                    />
                    <input
                        className='signin-form-section1-input2'
                        placeholder='رمز عبور شما'
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <div className="signin-form-btn">
                        <Button
                            intent='primary'
                            size='small'
                            label='ثبت نام'
                        />
                    </div>
                </div>
                <div className="signin-form-signin">
                    <span>ثبت نام کرده اید؟</span>
                    <span
                        className="signin-form-signin-text2"
                        onClick={() => navigate('/login')}
                    >
                        ورود
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Signin;