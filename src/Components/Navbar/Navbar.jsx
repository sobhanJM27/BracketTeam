import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate, useParams, useLocation } from 'react-router-dom';
import bracket from '../Assets/Images/b3-2.png';
import { navbarItems } from '../../Constants/navbarItems';
import Button from '../Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import { withTranslation } from 'react-i18next';
import { getBaseURL } from '../../i18n/language';
import axiosInstance from '../../API/axiosInstance';
import Dropdown from '../Dropdown/Dropdown';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import { removeCookie } from '../../Utils/cookie.js';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = ({ t, i18n }) => {

    const navigate = useNavigate();
    const { lang } = useParams();
    const { Auth } = useAuth();
    const { logout } = useAuthHooks();

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [index, setIndex] = useState(-1);
    const [hover, setHover] = useState(false);
    const [menu, setMenu] = useState(false);
    const [selectedLang, setSelectedLang] = useState(i18n.language);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = prevScrollPos < currentScrollPos;
            setIsNavbarVisible(!isScrollingDown);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setIsAuthenticated(!!storedUser && Auth);
    }, [Auth]);

    const showMenu = () => {
        setMenu(!menu);
    }
    const hideMenu = () => {
        setMenu(false);
    }
    const handleLogo = () => {
        navigate(`/${lang}`);
        setMenu(false);
    }
    const handleLanguageChange = (newLang) => {
        localStorage.setItem('lang', newLang);
        i18n.changeLanguage(newLang);
        const newBaseURL = getBaseURL(newLang);
        axiosInstance.defaults.baseURL = newBaseURL;
        const currentLocation = window.location.pathname.split('/').filter(Boolean);
        const currentPage = currentLocation.slice(1).join('/');
        navigate(`/${newLang}/${currentPage}`);
    };
    const handleLanguageChange2 = (newLang) => {
        localStorage.setItem('lang', newLang);
        i18n.changeLanguage(newLang);
        const newBaseURL = getBaseURL(newLang);
        axiosInstance.defaults.baseURL = newBaseURL;
        setSelectedLang(newLang);
        const currentLocation = window.location.pathname.split('/').filter(Boolean);
        const currentPage = currentLocation.slice(1).join('/');
        navigate(`/${newLang}/${currentPage}`);
    };

    const languageOptions = [
        { value: 'fa', label: 'فارسی' },
        { value: 'en', label: 'English' }
    ];

    const handleLogout = () => {
        removeCookie('win_token');
        localStorage.removeItem('user');
        logout();
        setIsAuthenticated(false);
        navigate(`/${lang}/`);
    };

    return (
        <>
            <div className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
                <div className='nav-right'>
                    <div className="nav-logo">
                        <img
                            src={bracket}
                            onClick={handleLogo}
                            alt="bracket"
                        />
                    </div>
                    {
                        isAuthenticated ? (
                            <div
                                className='nav-login'
                                onClick={handleLogout}
                            >
                                <LogoutIcon className='nav-user' />
                                <p>{t('navbar.logout')}</p>
                            </div>
                        ) : (
                            <div
                                className='nav-login'
                                onClick={() => navigate(`/${lang}/login`)}
                            >
                                <PersonIcon className='nav-user' />
                                <p>{t('navbar.login')} | {t('navbar.signup')}</p>
                            </div>
                        )
                    }
                </div>
                <ul className={`nav-menu ${menu ? 'nav-menu1' : 'nav-menu'}`}>
                    <ClearIcon
                        onClick={hideMenu}
                        className={`delete-menu ${menu ? 'delete-menu1' : 'delete-menu'}`}
                    />
                    <LanguageSelector
                        languages={languageOptions}
                        selectedLang={selectedLang}
                        onChange={handleLanguageChange2}
                    />
                    {
                        navbarItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    onClick={() => setMenu(false)}
                                >
                                    <NavLink
                                        onMouseEnter={() => {
                                            setIndex(item.id);
                                            setHover(true);
                                        }}
                                        onMouseOut={() => {
                                            setIndex(-1);
                                            setHover(false);
                                        }}
                                        to={item.url}
                                        className={`nav-menu-link ${index === item.id ? 'active' : hover ? 'onhover' : ''}`}
                                    >
                                        {t(item.title)}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                    <img
                        onClick={handleLogo}
                        className={`menu-icon-logo`}
                        src={bracket}
                        alt="bracket"
                    />
                </ul>
                <div className='nav-left'>
                    <Button
                        intent='secondary'
                        size='large'
                        label={t('navbar.contactUs')}
                        onClick={() => navigate(`/${lang}/contactUs`)}
                    />
                    <Dropdown
                        options={languageOptions}
                        onChange={handleLanguageChange}
                        selected={languageOptions.find(obj => obj.value == selectedLang)}
                    />
                    <MenuIcon
                        onClick={showMenu}
                        className='menu-icon'
                    />
                </div>
                <div className="nav-screen-logo">
                    <img
                        src={bracket}
                        onClick={handleLogo}
                        alt="bracket"
                    />
                </div>
                {
                    isAuthenticated ? (
                        <div
                            className="nav-screen-login"
                            onClick={handleLogout}
                        >
                            <LogoutIcon className='nav-screen-login-logo' />
                        </div>
                    ) : (
                        <div
                            className="nav-screen-login"
                            onClick={() => navigate(`/${lang}/login`)}
                        >
                            <PersonIcon className='nav-screen-login-logo' />
                        </div>
                    )
                }
            </div >
            <div
                onClick={hideMenu}
                className={`${menu ? 'blur-background' : ''}`}
            ></div>
        </>
    )
}

export default withTranslation()(Navbar);
