import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Header = ({ title, t }) => {
    return (
        <div className='header'>
            <div className="header-top">
                <h1>{title}</h1>
                <div className="header-bottom">
                    <Link to="">{t('homePage')}</Link>
                    <p className="header-bottom-direction">{'>'}</p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Header);