import React from 'react';
import './BlogContent.css';
import image from '../Assets/Images/blogcontent.png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import bracket from '../Assets/Images/b3-2.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import InstagramIcon from '@mui/icons-material/Instagram';
import { withTranslation } from 'react-i18next';

const BlogContent = ({
    categoriesQuery, setCategoryId, t
}) => {

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
                    <span>{t('blog.title1')}</span>
                    <span>{t('blog.title2')}</span>
                    <span>{t('blog.title3')}</span>
                </div>
                <InstagramIcon
                    className='blog-content-section1-text-instagram'
                    onClick={() => navigate('https://www.instagram.com/bracketteam_net?igsh=MzRIODBiNWFIZA==')}
                />
            </div>
            <div className='blog-content-section2'>
                <h4>{t('blog.title4')}</h4>
                <div className="blog-content-section2-items">
                    {
                        categoriesQuery.map((category) => {
                            return (
                                <div
                                    className="blog-content-section2-item"
                                    key={category?.parentId}
                                    onClick={() => setCategoryId(category.parentId)}
                                >
                                    <CircleIcon className="blog-content-section2-item-icon" />
                                    <span className="item-text1">
                                        {category.title}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="blog-content-section3">
                <div className="blog-content-section3-header">
                    <img
                        className='blog-content-section3-image'
                        src={bracket}
                        alt="bracket"
                    />
                    <span className="blog-content-section3-title">BRACKETTEAM</span>
                </div>
                <div className="blog-content-section3-contactus">
                    <span className='contactus-title'>{t('navbar.contactUs')}</span>
                    <span className='contactus-number'>09133243570</span>
                </div>
                <div className="blog-content-section3-btn">
                    <Button
                        intent='primary'
                        size='large'
                        label={t('blog.start')}
                        onClick={() => navigate('contactUs')}
                    />
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(BlogContent);