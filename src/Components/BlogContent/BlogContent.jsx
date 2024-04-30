import React from 'react';
import author_img from '../Assets/Images/author-widget-350x350.jpg';
import './BlogContent.css';
import { Link } from 'react-router-dom';
import image1 from '../Assets/Images/b3-2.jpg';

const BlogContent = () => {
    return (
        <div className="blogcontent">
            <div className="blogcontent-author">
                <img src={author_img} alt="" />
                <p className="blogcontent-text1">در برنامه نویسی تازه کار هستید؟</p>
                <p className="blogcontent-text2">مشکلی نیست! وبلاگ ما را</p>
                <p className="blogcontent-text3">بخوانید - مطلع شوید!</p>
                <Link to='https://www.instagram.com/bracketteam_net?igsh=MzRIODBiNWFIZA=='><i className="fa fa-instagram"></i></Link>
            </div>
            <div className="blogcontent-search">
                <p>جستجو</p>
                <input type="text" name="blog-searchBar" />
                <button>جستجو</button>
            </div>
            <div className="blogcontent-contactus">
                <img src={image1} alt="" />
                <h4>تماس با ما</h4>
                <p>09133243570</p>
                <Link to='/contactUs'>شروع کنید</Link>
            </div>
        </div>
    )
}

export default BlogContent;
