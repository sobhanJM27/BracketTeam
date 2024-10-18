import React from 'react';
import './BlogHeader.css';
import Button from '../Button/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { withTranslation } from 'react-i18next';

const BlogHeader = ({ data, t }) => {
    
    return (
        <div
            className='blog-header'
            style={{
                backgroundImage: `url(${data?.images[0]})`
            }}
        >
            <div>
                <Button
                    intent='secondary'
                    size='small'
                    label={data?.category.fa.title}
                />
            </div>
            <h1>{data?.fa.title}</h1>
            <div className="blog-header-content">
                <div className="blog-header-content-right">
                    <CalendarMonthIcon
                        className="blog-header-content-right-icon"
                    />
                    <span>{data?.createdAt}</span>
                </div>
                <div className="blog-header-content-left">
                    <PersonOutlineIcon
                        className="blog-header-content-right-icon"
                    />
                    <span>{t('blog.text1')}</span>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(BlogHeader);