import React from 'react';
import './BlogContent.css';
import image from '../Assets/Images/blogcontent.png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import bracket from '../Assets/Images/b3-2.jpg';

const BlogContent = () => {

    const navigate = useNavigate();

    return (
        <div className="blog-content">
            <div className="blog-content-section1">
                <img
                    src={image}
                    alt="blogContent"
                />
                <h3>براکت</h3>
                <div className="blog-content-section1-text">
                    <span>در بازاریابی تازه کار هستید؟</span>
                    <span>مشکلی نیست! وبلاگ ما را</span>
                    <span>بخوانید - مطلع شوید!</span>
                </div>
                <i className='fa fa-instagram'></i>
            </div>
            <div className='blog-content-section2'>
                <h4>دسته بندی ها</h4>
                <div className="blog-content-section2-items">
                    <div className="blog-content-section2-item">
                        <i class="fa fa-circle" aria-hidden="true"></i>
                        <span className="item-text1">بازاریابی</span>
                        <span className="item-text2">(5)</span>
                    </div>
                </div>
            </div>
            <div className="blog-content-section3">
                <div className="blog-content-section3-header">
                    <img className='blog-content-section3-image' src={bracket} alt="bracket" />
                    <span className="blog-content-section3-title">BRACKETTEAM</span>
                </div>
                <div className="blog-content-section3-contactus">
                    <span className='contactus-title'>تماس با ما</span>
                    <span className='contactus-number'>09133243570</span>
                </div>
                <div className="blog-content-section3-btn">
                    <Button
                        intent='primary'
                        size='large'
                        label='شروع کنید'
                        onClick={() => navigate('/contactUs')}
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogContent;