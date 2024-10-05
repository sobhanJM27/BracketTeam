import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import '../CSS/Login.css';
import { useNavigate, useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { login } from '../../API/Auth';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useAuthHooks } from '../../Hooks/useAuth';
import usePersianNumber from '../../Hooks/usePersianNumber';
import FormLoader from '../../Components/FormLoader/FormLoader';

const Login = ({ t }) => {

    const { lang } = useParams();
    const navigate = useNavigate();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const { login: loginAction } = useAuthHooks();
    const persianPhone = usePersianNumber(phone);

    const validateForm = () => {
        let isValid = true;

        setPhoneError('');
        setPasswordError('');

        if (phone.trim() === '') {
            setPhoneError(t('error.phoneError'));
            toast.error(t('error.phoneError'));
            isValid = false;
        }

        if (password.trim() === '') {
            setPasswordError(t('error.passwordError2'));
            toast.error(t('error.passwordError2'));
            isValid = false;
        } else if (password.length < 4) {
            setPasswordError(t('error.passwordError'));
            toast.error(t('error.passwordError'));
            isValid = false;
        }

        return isValid;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const response = await login(phone, password);
            if (response.token && response.refreshToken) {
                const userData = {
                    role: response.role,
                    token: response.token,
                    refreshToken: response.refreshToken
                };
                localStorage.setItem('user', JSON.stringify(userData));
                loginAction(userData);
                toast.success(t('form.message2'));
                if (response.role === 'ADMIN') {
                    navigate(`/${lang}/admin`);
                } else {
                    navigate('/');
                    console.log(response);
                }
            } else {
                toast.error(t('form.error2'));
            }

        } catch (error) {
            toast.error(t('form.error2'));
            console.error('Error during login:', error);
        } finally {
            setLoading(false);
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
                            disabled={loading}
                        />
                    </div>
                    {loading && <FormLoader />}
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


