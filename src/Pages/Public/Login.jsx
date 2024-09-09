import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import '../CSS/Login.css';
import { useNavigate, useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { login, getRefreshToken } from '../../API/Auth';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Login = ({ t }) => {
    const { lang } = useParams();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(phone, password);
            if (response.token && response.refreshToken) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('refreshToken', response.refreshToken);
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
            <Helmet>
                <title>Bracket - {t('navbar.login')}</title>
            </Helmet>
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
                        placeholder={t('form.password2')}
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
                        onClick={() => navigate(`/${lang}/signup`)}
                    >
                        {t('navbar.signup')}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default withTranslation()(Login);


// const refreshAccessToken = async () => {
//     const refreshToken = localStorage.getItem('refreshToken');
//     if (refreshToken) {
//         try {
//             const response = await getRefreshToken(refreshToken);
//             localStorage.setItem('token', response.accessToken);
//         } catch (error) {
//             console.error('Error refreshing token:', error);
//             localStorage.removeItem('token');
//             localStorage.removeItem('refreshToken');
//             navigate(`/${lang}/login`);
//             toast.error(t('رمز عبور شما منقضی شده است، لطفا دوباره وارد شوید.'));
//         }
//     }
// };
