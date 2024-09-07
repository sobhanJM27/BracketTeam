import React from 'react';
import './BlogHeader.css';
import Button from '../Button/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const BlogHeader = ({ data }) => {
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
                    label={data?.category}
                />
            </div>
            <h1>{data?.title}</h1>
            <div className="blog-header-content">
                <div className="blog-header-content-right">
                    <CalendarMonthIcon
                        className="blog-header-content-right-icon"
                    />
                    <span>{data?.date}</span>
                </div>
                <div className="blog-header-content-left">
                    <PersonOutlineIcon
                        className="blog-header-content-right-icon"
                    />
                    <span>اعضای تیم</span>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader;