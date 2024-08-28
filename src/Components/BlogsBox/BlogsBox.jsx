import React from 'react';
import './BlogsBox.css';
import Button from '../Button/Button';
import arrow_left from '../Assets/Images/icons8-arrow-30 (2).png';
import { useNavigate, useParams } from 'react-router-dom';

const BlogsBox = ({ data, handleCategory }) => {

    const { id } = useParams();

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/blog/${id}`);
    }

    return (
        <div className="blogsbox">
            <div className="blogsbox-section1">
                <Button
                    intent='secondary'
                    size='small'
                    label='تکنولوژی'
                    handleCategory={handleCategory}
                />
                <img
                    src={data?.images[0]}
                    alt={data?.title}
                    onClick={handleClick}
                />
            </div>
            <div className="blogsbox-section2">
                <div className="blogsbox-section2-right">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span>{data?.date}</span>
                </div>
                <div className="blogsbox-section2-left">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>اعضای تیم</span>
                </div>
            </div>
            <h2 className="blogsbox-title" onClick={handleClick}>{data?.title}</h2>
            <p className="blogsbox-text">{data?.shortDescription}</p>
            <div onClick={handleClick} className="blogsbox-section4">
                <span>بارگذاری بیشتر</span>
                <img
                    src={arrow_left}
                    alt="arrowLeft"
                />
            </div>
        </div>
    )
}

export default BlogsBox;