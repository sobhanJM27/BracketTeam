import React from 'react';
import './ServicesContent.css';
import { servicesContent } from '../../Constants/servicesContent';
import { Link } from 'react-router-dom';
import arrow_left from '../Assets/Images/icons8-arrow-30 (2).png';

const ServicesContent = () => {
    return (
        <div className="services-section1">
            <div className="services-section1-top">
                <Link to='/service'>همه خدمات</Link>
            </div>
            <div className="services-section1-bottom">
                {
                    servicesContent.map((item, id) => {
                        return (
                            <div key={id} className="services-section1-bottom-box">
                                <Link to='/service'>
                                    <p className='box-number'>{item.number}</p>
                                    <p className='box-title'>{item.title}</p>
                                    <p className='box-text'>{item.text}</p>
                                    <div className='box-div'>
                                        <button>بیشتر بدانید</button>
                                        <img class src={arrow_left} alt="" />
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServicesContent;