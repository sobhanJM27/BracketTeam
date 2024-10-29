import React from 'react';
import './BlogHeader.css';
import Button from '../Button/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { withTranslation } from 'react-i18next';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { enZA, faIR } from 'date-fns/locale';
import { useParams } from 'react-router-dom';

const BlogHeader = ({ data, t }) => {

    const { lang } = useParams();

    return (
        <div
            className='blog-header'
        >
            <img src={data?.images[0]} alt="blog" />
            <div className='blog-header-button'>
                <Button
                    intent='secondary'
                    size='small'
                    label={data?.category.fa.title}
                />
            </div>
            <h2>{data?.fa.title}</h2>
            <div className="blog-header-content">
                <div className="blog-header-content-right">
                    <CalendarMonthIcon
                        className="blog-header-content-right-icon"
                    />
                    <span>{formatDistanceToNow(new Date(data?.createdAt), { addSuffix: true, locale: lang === 'fa' ? faIR : enZA })}</span>
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