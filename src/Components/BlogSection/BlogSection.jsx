import React from 'react';
import './BlogSection.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const BlogSection = ({ data }) => {

    return (
        <div className="blog-section">
            <p className="blog-section-text">
                {data?.fa.description}
            </p>
            <ul className="blog-section-title">
                <li className="blog-section-title-text">{data?.category.fa.title}</li>
            </ul>
            <div className="blog-section-boxes">
                {
                    data.similar?.map((item) => {
                        return (
                            <div
                                key={item.similar?._id}
                                className="blog-section-box"
                            >
                                <div className="blog-section-box-right">
                                    <img
                                        src={item.similar?.images[0]}
                                        alt='blogSection'
                                        className='blog-section-box-image'
                                    />
                                    <div className="blog-section-box-middle">
                                        <span className="blog-section-box-middle-text1">{item.similar?.createdAt}</span>
                                        <span className="blog-section-box-middle-text2">{item.similar?.fa.title}</span>
                                    </div>
                                </div>
                                <KeyboardBackspaceIcon className='blog-section-arrowleft' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogSection;