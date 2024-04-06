import React, { useEffect, useState } from 'react';
import './Navbar.css';
import bracket from '../Assets/Images/b3-2.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import menu_icon from '../Assets/Images/icons8-menu-24 (2).png';
import delete_icon from '../Assets/Images/icons8-delete-24.png';
import search_icon from '../Assets/Images/icons8-search-30.png';

const Navbar = (props) => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = prevScrollPos < currentScrollPos;

            setIsNavbarVisible(!isScrollingDown);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    const [index, setIndex] = useState(-1);
    const [hover, setHover] = useState(false);

    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(true);
    }

    const hideMenu = () => {
        setMenu(false);
    }

    const navigate = useNavigate();

    const handleLogo = () => {
        navigate('/');
        setMenu(false);
    }

    const [isVisibleSearch, setIsVisibleSearch] = useState(false);

    const handleSearch = () => {
        setIsVisibleSearch(!isVisibleSearch);
    }


    return (
        <>
            <div className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
                <img onClick={showMenu} className='menu-icon' src={menu_icon} alt="" />
                <div className="nav-logo">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img src={bracket} alt="" />
                    </Link>
                </div>
                <ul className={`nav-menu ${menu ? 'nav-menu1' : 'nav-menu'}`}>
                    <img onClick={hideMenu} className={`delete-menu ${menu ? 'delete-menu1' : 'delete-menu'}`} src={delete_icon} alt="" />
                    <li onClick={() => setMenu(false)}><NavLink onMouseEnter={() => { setIndex(0); setHover(true); }} onMouseOut={() => { setIndex(-1); setHover(false); }} to='/' className={`nav-menu-link ${index === 0 ? 'active' : hover ? 'onhover' : ''}`} style={{ textDecoration: 'none' }}>خانه</NavLink></li>
                    <li><NavLink onClick={() => setMenu(false)} onMouseEnter={() => { setIndex(1); setHover(true); }} onMouseOut={() => { setIndex(-1); setHover(false); }} to='/exWorks' className={`nav-menu-link ${index === 1 ? 'active' : hover ? 'onhover' : ''}`} style={{ textDecoration: 'none' }}>بخشی از نمونه کارها</NavLink></li>
                    <li><NavLink onClick={() => setMenu(false)} onMouseEnter={() => { setIndex(3); setHover(true); }} onMouseOut={() => { setIndex(-1); setHover(false); }} to='/questions' className={`nav-menu-link ${index === 3 ? 'active' : hover ? 'onhover' : ''}`} style={{ textDecoration: 'none' }}>سوالات متداول</NavLink></li>
                    <li><NavLink onClick={() => setMenu(false)} onMouseEnter={() => { setIndex(4); setHover(true); }} onMouseOut={() => { setIndex(-1); setHover(false); }} to='/aboutUs' className={`nav-menu-link ${index === 4 ? 'active' : hover ? 'onhover' : ''}`} style={{ textDecoration: 'none' }}>درباره ما</NavLink></li>
                    <img onClick={handleLogo} className={`menu-icon-logo`} src={bracket} alt="" />
                </ul>
                <div>
                    <Link className='nav-phone-number-link' to='/contactUs' style={{ textDecoration: 'none' }}>09133243570</Link>
                </div>
                <Link className="nav-contact-us" style={{ textDecoration: 'none' }} to='/contactUs'>
                    <div className='nav-contact-us-link'>تماس با ما</div>
                </Link>
                <div className="nav-search" onClick={handleSearch}>
                    {!isVisibleSearch ? <img src={search_icon} alt="" /> : <img className='delete-search' src={delete_icon} alt='' />}
                </div>
                {isVisibleSearch &&
                    <form className={`menu-form ${isVisibleSearch ? 'show-menu-form' : 'menu-form'}`} role="search">
                        <input type="search" name="searchBar" placeholder="جستجو..." />
                        <button>
                            <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                        </button>
                    </form>}
            </div>
            <div onClick={hideMenu} className={`${menu ? 'blur-background': ''}`}></div>
        </>
    )
}

export default Navbar;
