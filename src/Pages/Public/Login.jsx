import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import '../CSS/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // انجام هر کاری که شما نیاز دارید با داده‌ها
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>ورود</h3>
                <div className="login-form-content">
                    <input
                        className='login-form-section1-input1'
                        placeholder='شماره تلفن شما'
                        type="tel"
                        {...register('phone', { required: true })}
                    />
                    <input
                        className='login-form-section1-input2'
                        placeholder='رمز عبور شما'
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <div className="login-form-btn">
                        <Button
                            intent='primary'
                            size='small'
                            label='ورود'
                        />
                    </div>
                </div>
                <div className="login-form-signin">
                    <span>ثبت نام نکرده اید؟</span>
                    <span
                        className="login-form-signin-text2"
                        onClick={()=>navigate('/signin')}
                    >
                        ثبت نام
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login;