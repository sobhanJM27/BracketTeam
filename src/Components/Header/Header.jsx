import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({title}) => {
    return (
        <div className='header'>
            <div className="header-top">
                <h1>{title}</h1>
                <div className="header-bottom">
                    <Link to="/home">صفحه اصلی</Link>
                    <p className="header-bottom-direction">{'>'}</p>
                    <p>بخشی از نمونه کارها</p>
                </div>
            </div>
        </div>
    )
}

export default Header;