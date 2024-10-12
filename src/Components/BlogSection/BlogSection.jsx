import React from 'react';
import './BlogSection.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const BlogSection = ({ data }) => {
    return (
        <div className="blog-section">
            <p className="blog-section-text">
                {data?.description}
            </p>
            <ul className="blog-section-title">
                <li className="blog-section-title-text">{data.category}</li>
            </ul>
            <div className="blog-section-boxes">
                <div className="blog-section-box">
                    <div className="blog-section-box-right">
                        <img
                            src={data?.images}
                            alt='blogSection'
                            className='blog-section-box-image'
                        />
                        <div className="blog-section-box-middle">
                            <span className="blog-section-box-middle-text1">{data.date}</span>
                            <span className="blog-section-box-middle-text2">{data.title}</span>
                        </div>
                    </div>
                    <KeyboardBackspaceIcon className='blog-section-arrowleft'/>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;