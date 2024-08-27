import React from 'react';
import image from '../Assets/Images/blogs.png';
import './BlogsBox.css';
import Button from '../Button/Button';
import arrow_left from '../Assets/Images/icons8-arrow-30 (2).png';
import { useNavigate } from 'react-router-dom';

const BlogsBox = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/blog');
    }

    return (
            <div className="blogsbox">
                <div className="blogsbox-section1">
                    <Button
                        intent='secondary'
                        size='small'
                        label='تکنولوژی'
                    />
                    <img
                        src={image}
                        alt="blogsbox"
                        onClick={handleClick}
                    />
                </div>
                <div className="blogsbox-section2">
                    <div className="blogsbox-section2-right">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>31 تیر, 1400</span>
                    </div>
                    <div className="blogsbox-section2-left">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>اعضای تیم</span>
                    </div>
                </div>
                <div className="blogsbox-section3">
                    <h2 onClick={handleClick}>15 راز تبدیل دیجیتال</h2>
                </div>
                <div onClick={handleClick} className="blogsbox-section4">
                    <span>بارگذاری بیشتر</span>
                    <img
                        src={arrow_left}
                        alt="arrowLeft"
                    />
                </div>
            </div>
    )
}

export default BlogsBox;