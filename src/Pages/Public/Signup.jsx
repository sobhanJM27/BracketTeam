import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import '../CSS/Signup.css';
import { useNavigate, useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { register } from '../../API/Auth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import usePersianNumber from '../../Hooks/usePersianNumber';
import FormLoader from '../../Components/FormLoader/FormLoader';

const Signup = ({ t }) => {
    
    const { lang } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const persianPhone = usePersianNumber(formData.phone);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (formData.phone.trim() === '') {
            newErrors.phone = t('error.phoneError');
            isValid = false;
        }

        if (formData.email !== '' && !/\S+@\S+\.\S+/.test(formData.email) ) {
            newErrors.email = t('error.emailError');
            isValid = false;
        }

        if (formData.password.trim() === '') {
            newErrors.password = t('error.passwordError2');
            isValid = false;
        } else if (formData.password.length < 4) {
            newErrors.password = t('error.passwordError');
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            Object.values(errors).forEach(error => toast.error(error));
            setLoading(false);
            return;
        }

        try {
            const response = await register(formData);
            if (response.token) {
                localStorage.setItem('token', response.token);
                toast.success(t('form.message1'));
                navigate(`/${lang}/login`);
            } else {
                toast.error(t('form.registrationError'));
            }
        } catch (error) {
            toast.error(t('form.error1'));
            console.error('Error during registration:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePhoneChange = (e) => {
        const value = lang === 'fa'
            ? e.target.value
            : e.target.value.replace(/[۰-۹]/g, match => String.fromCharCode(match.charCodeAt(0) - 1728));
        setFormData({
            ...formData,
            phone: value
        });
    };

    return (
        <div className="signin">
            <Helmet>
                <title>Bracket - {t('navbar.signup')}</title>
            </Helmet>
            <form className="signin-form" onSubmit={handleSubmit}>
                <h3>{t('navbar.signup')}</h3>
                <div className="signin-form-content">
                    <input
                        className='signin-form-section1-input1'
                        name="first_name"
                        placeholder={t('form.firstName')}
                        type="text"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    <input
                        className='signin-form-section1-input1'
                        name="last_name"
                        placeholder={t('form.lastName')}
                        type="text"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                    <input
                        className='signin-form-section1-input2'
                        name="phone"
                        placeholder={t('form.phone2')}
                        type="tel"
                        value={lang === 'fa' ? persianPhone : formData.phone}
                        onChange={handlePhoneChange}
                        required
                    />
                    <input
                        className='signin-form-section1-input3'
                        name="password"
                        placeholder={t('form.password')}
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='signin-form-section1-input1'
                        name="email"
                        placeholder={t('form.email2')}
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="signin-form-btn">
                        <Button
                            intent='primary'
                            size='small'
                            label={t('navbar.signup')}
                            onClick={handleSubmit}
                            disabled={loading}
                        />
                    </div>
                    {loading && <FormLoader />}
                </div>
                <div className="signin-form-signin">
                    <span>{t('form.text2')}</span>
                    <span
                        className="signin-form-signin-text2"
                        onClick={() => navigate(`/${lang}/login`)}
                    >
                        {t('navbar.login')}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default withTranslation()(Signup);
