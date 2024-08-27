import React from 'react';
import './BlogHeader.css';
import Button from '../Button/Button';

const BlogHeader = ({ title }) => {
    return (
        <div className='blog-header'>
            <div>
                <Button
                    intent='secondary'
                    size='small'
                    label='تکنولوژی'
                />
            </div>
            <h1>15 راز تبدیل دیجیتال</h1>
            <div className="blog-header-content">
                <div className="blog-header-content-right">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span>31 تیر, 1400</span>
                </div>
                <div className="blog-header-content-left">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>اعضای تیم</span>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader;