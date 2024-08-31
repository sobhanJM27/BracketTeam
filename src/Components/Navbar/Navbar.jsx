import React, {
    useEffect,
    useState
} from 'react';
import {
    Link,
    NavLink,
    useNavigate
} from 'react-router-dom';
import './Navbar.css';
import bracket from '../Assets/Images/b3-2.jpg';
import menu_icon from '../Assets/Images/icons8-menu-24 (2).png';
import delete_icon from '../Assets/Images/icons8-delete-24.png';
import search_icon from '../Assets/Images/icons8-search-30.png';
import { navbarItems } from '../../Constants/navbarItems';
import Button from '../Button/Button';

const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [index, setIndex] = useState(-1);
    const [hover, setHover] = useState(false);
    const [menu, setMenu] = useState(false);
    const [isVisibleSearch, setIsVisibleSearch] = useState(false);

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


    const navigate = useNavigate();

    const showMenu = () => {
        setMenu(true);
    }

    const hideMenu = () => {
        setMenu(false);
    }

    const handleLogo = () => {
        navigate('/');
        setMenu(false);
    }

    const handleSearch = () => {
        setIsVisibleSearch(!isVisibleSearch);
    }


    return (
        <>
            <div className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
                <div className='nav-right'>
                    <div
                        className='nav-login'
                        onClick={() => navigate('/login')}
                    >
                        <i className="fa fa-user"
                            aria-hidden="true"
                        ></i>
                        <p>ورود | ثبت نام</p>
                    </div>
                    <div className="nav-logo">
                        <img
                            src={bracket}
                            onClick={handleLogo}
                            alt="bracket"
                        />
                    </div>
                </div>
                <ul className={`nav-menu ${menu ? 'nav-menu1' : 'nav-menu'}`}>
                    <img
                        onClick={hideMenu}
                        className={`delete-menu ${menu ? 'delete-menu1' : 'delete-menu'}`}
                        src={delete_icon} alt="delete"
                    />
                    {
                        navbarItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    onClick={() => setMenu(false)}
                                >
                                    <NavLink
                                        onMouseEnter={() => { setIndex(item.id); setHover(true); }}
                                        onMouseOut={() => { setIndex(-1); setHover(false); }}
                                        to={item.url}
                                        className={`nav-menu-link ${index === item.id ? 'active' : hover ? 'onhover' : ''}`}>
                                        {item.title}
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
                    <Link
                        className='nav-phone-number-link'
                        to='/contactUs'
                    >
                        09133243570
                    </Link>
                    <Button
                        intent='secondary'
                        size='large'
                        label='تماس با ما'
                        onClick={() => navigate('contactUs')}
                    />
                    <img
                        onClick={showMenu}
                        className='menu-icon'
                        src={menu_icon}
                        alt="show-menu"
                    />
                </div>
                <div className="nav-screen-logo">
                    <img
                        src={bracket}
                        onClick={handleLogo}
                        alt="bracket"
                    />
                </div>
            </div>
            <div
                onClick={hideMenu}
                className={`${menu ? 'blur-background' : ''}`}
            ></div>
        </>
    )
}

export default Navbar;
