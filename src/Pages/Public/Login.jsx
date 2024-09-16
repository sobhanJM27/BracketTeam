import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import '../CSS/Login.css';
import { useNavigate, useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { login, getRefreshToken } from '../../API/Auth';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useAuthHooks } from '../../Hooks/useAuth';
import usePersianNumber from '../../Hooks/usePersianNumber';

const Login = ({ t }) => {

    const { lang } = useParams();
    const navigate = useNavigate();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const { login: loginAction } = useAuthHooks();

    const persianPhone = usePersianNumber(phone);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(phone, password);
            if (response.token && response.refreshToken) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('refreshToken', response.refreshToken);
                loginAction({
                    role: response.user.Role[0],
                    token: response.token,
                    data: response.user,
                });
                toast.success(t('form.message2'));
                navigate(`/${lang}/admin`);
            } else {
                toast.error(t('form.error2'));
            }
        } catch (error) {
            toast.error(error.message);
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
                        value={lang === 'fa' ? persianPhone : phone}
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


