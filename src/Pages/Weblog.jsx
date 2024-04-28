import React from 'react'
import './CSS/Weblog.css'

const Weblog = () => {
    return (
        <div className="weblog">
            <div className="weblog-header">
                <div className="weblog-header-right">
                    <p className="weblog-header-right-text">وبلاگ</p>
                    <h1>وبلاگ های متفاوت و مفید</h1>
                    <div className="weblog-header-right-icon">
                        <div className="header-icon">
                            <i className="fa fa-calendar"></i>
                            <p>24 اذر, 1380</p>
                        </div>
                        <div className="header-icon">
                            <i className="fa fa-user"></i>
                            <p>توسط اعضای تیم</p>
                        </div>
                        <div className="header-icon">
                            <i className='fa fa-comment'></i>
                            <p>1 دیدگاه</p>
                        </div>
                    </div>
                </div>
                <div className="weblog-header-left">
                    <i className='fa fa-heart'></i>
                    <p>1 لایک</p>
                </div>
            </div>
        </div>
    )
}

export default Weblog
