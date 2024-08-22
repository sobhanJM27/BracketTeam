import React from 'react';
import './HomeServices.css';
import { Link } from 'react-router-dom';
import middle_img from '../Assets/Images/img-55.webp';
import coub from '../Assets/Images/coub-img-2.png';
import ServicesBox from '../ServicesBox/ServicesBox';
import ServicesContent from '../ServicesContent/ServicesContent';
import { servicesContent2left, servicesContent2right } from '../../Constants/servicesContent2';

const HomeServices = () => {
    return (
        <div className="services">
            <ServicesBox />
            <div className="services-section2">
                <h2 className="services-section2-title">یک تجربه دیجیتال با کیفیت</h2>
                <div className="services-section2-content">
                    <div className="section2-content">
                        {
                            servicesContent2right.map((item, id) => {
                                return (
                                    <Link
                                        key={id}
                                        to="/service"
                                    >
                                        <div className={id === 1 ? 'content-mid1' : 'content'}>
                                            <div className='content-top'>
                                                <img
                                                    src={item.image}
                                                    alt="icon"
                                                />
                                                <h2>{item.title}</h2>
                                            </div>
                                            <p>{item.text}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="section2-content-middle">
                        <img
                            className="section2-content-img1"
                            src={middle_img}
                            alt="middleImage"
                        />
                        <img
                            className="section2-content-img2"
                            src={coub}
                            alt="coub"
                        />
                    </div>
                    <div className="section2-content">
                        {
                            servicesContent2left.map((item, id) => {
                                return (
                                    <Link
                                        key={id}
                                        to="/service"
                                    >
                                        <div className={id === 1 ? 'content-mid2' : 'content'}>
                                            <div className='content-top'>
                                                <img
                                                    src={item.image}
                                                    alt="icon"
                                                />
                                                <h2>{item.title}</h2>
                                            </div>
                                            <p>{item.text}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <ServicesContent />
        </div>
    )
}

export default HomeServices;
