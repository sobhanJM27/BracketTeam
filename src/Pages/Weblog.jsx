import React from 'react';
import Header from '../Components/Header/Header';
import BlogsBox from '../Components/BlogsBox/BlogsBox';
import './CSS/Weblog.css';
import Button from '../Components/Button/Button';

const Weblog = () => {
    return (
        <div className="weblog">
            <Header title='وبلاگ' />
            <div className="weblog-blogs">
                <BlogsBox />
            </div>
            <div className="weblog-btn">
                <Button
                    intent='primary'
                    size='large'
                    label='بارگذاری بیشتر'
                />
            </div>
        </div>
    )
}

export default Weblog;

