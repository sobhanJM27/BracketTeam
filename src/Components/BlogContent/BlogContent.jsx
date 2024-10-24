import React from 'react';
import './BlogContent.css';
import Button from '../Button/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import bracket from '../Assets/Images/b3-2.png';
import CircleIcon from '@mui/icons-material/Circle';
import InstagramIcon from '@mui/icons-material/Instagram';
import { withTranslation } from 'react-i18next';

const BlogContent = ({
    categoriesQuery, setCategoryId, t
}) => {

    const navigate = useNavigate();
    const { lang } = useParams();

    return (
        <div className="blog-content">
            <div className="blog-content-section1">
                <img
                    src={bracket}
                    alt="blogContent"
                />
                <h3>{t('blog.bracket')}</h3>
                <div className="blog-content-section1-text">
                    <span>{t('blog.title1')}</span>
                    <span>{t('blog.title2')}</span>
                    <span>{t('blog.title3')}</span>
                </div>
                <Link to='https://www.instagram.com/bracketteam_net?igsh=MzRIODBiNWFIZA=='>
                    <InstagramIcon className='blog-content-section1-text-instagram' />
                </Link>
            </div>
            <div className='blog-content-section2'>
                <h4>{t('blog.title4')}</h4>
                <div className="blog-content-section2-items">
                    {
                        categoriesQuery?.map((category) => {
                            return (
                                <div
                                    className="blog-content-section2-item"
                                    key={category?._id}
                                    onClick={() => setCategoryId(category?._id)}
                                >
                                    <CircleIcon className="blog-content-section2-item-icon" />
                                    <span className="item-text1">
                                        {category?.fa.title}
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
                        onClick={() => navigate(`/${lang}/contactUs`)}
                    />
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(BlogContent);