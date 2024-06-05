import React from 'react';
import './CSS/Weblog.css';
import { Link } from 'react-router-dom';
import BlogCart from '../Components/BlogCart/BlogCart';
import BlogContent from '../Components/BlogContent/BlogContent';

const Weblog = () => {
    return (
        <div className="weblog">
            <div className="weblog-header">
                <div className="weblog-header-top">
                    <h1>لیست وبلاگ</h1>
                    <div className="weblog-header-bottom">
                        <Link to="/">صفحه اصلی</Link>
                        <p className="weblog-header-bottom-direction">{'>'}</p>
                        <p>لیست وبلاگ</p>
                    </div>
                </div>
            </div>
            <div className="weblog-content">
                <div className="weblog-content-left">
                    <BlogContent />
                </div>
                <div className="weblog-content-right">
                    {/* <BlogCart /> */}
                    sfsf
                </div>
            </div>
        </div>
    )
}

export default Weblog;

