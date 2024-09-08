import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import '../CSS/Login.css';
import { useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { login } from '../../API/Auth';
import { toast } from 'react-hot-toast';

const Login = ({ t }) => {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(phone, password); 
            if (response.token) {
                localStorage.setItem('token', response.token); 
                toast.success(t('ورود با موفقیت انجام شد'));
                navigate('admin'); 
            } else {
                toast.error(t('مشکلی در ورود شما رخ داد'));
            }
        } catch (error) {
            toast.error(t('مشکلی در ورود شما رخ داد'));
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleLogin}>
                <h3>{t('navbar.login')}</h3>
                <div className="login-form-content">
                    <input
                        className="login-form-section1-input1"
                        placeholder={t('form.phone1')}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        className="login-form-section1-input2"
                        placeholder={t('form.password')}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="login-form-btn">
                        <Button
                            intent="primary"
                            size="small"
                            label={t('navbar.login')}
                            onClick={handleLogin}
                        />
                    </div>
                </div>
                <div className="login-form-signin">
                    <span>{t('form.text1')}</span>
                    <span
                        className="login-form-signin-text2"
                        onClick={() => navigate('signup')}
                    >
                        {t('navbar.signin')}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default withTranslation()(Login);
