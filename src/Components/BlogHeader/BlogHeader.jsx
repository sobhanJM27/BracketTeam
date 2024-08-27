import React from 'react';
import './BlogHeader.css';
import Button from '../Button/Button';

const BlogHeader = ({ title, data }) => {
    return (
        <div
            className='blog-header'
            style={{ backgroundImage: `url(${data?.images[0]})` }}>
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
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span>{data?.date}</span>
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