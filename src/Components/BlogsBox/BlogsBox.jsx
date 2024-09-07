import React from 'react';
import './BlogsBox.css';
import Button from '../Button/Button';
import arrow_left from '../Assets/Images/icons8-arrow-30 (2).png';
import { useNavigate, useParams } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const BlogsBox = ({
    data
}) => {

    const { id } = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${id}`);
    }

    return (
        <div className="blogsbox">
            <div
                className="blogsbox-section1"
                onClick={handleClick}
            >
                <Button
                    intent='secondary'
                    size='small'
                    label={data?.category}
                />
                <img
                    src={data?.images[0]}
                    alt={data?.title}
                />
            </div>
            <div className="blogsbox-section2">
                <div className="blogsbox-section2-right">
                    <CalendarMonthIcon
                     className="blogsbox-section2-right-icon"
                    />
                    <span>
                        {data?.date}
                    </span>
                </div>
                <div className="blogsbox-section2-left">
                    <PersonOutlineIcon
                        className="blogsbox-section2-right-icon"
                    />
                    <span>اعضای تیم</span>
                </div>
            </div>
            <h2
                className="blogsbox-title"
                onClick={handleClick}
            >
                {data?.title}
            </h2>
            <p className="blogsbox-text">
                {data?.shortDescription}
            </p>
            <div
                onClick={handleClick}
                className="blogsbox-section4"
            >
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