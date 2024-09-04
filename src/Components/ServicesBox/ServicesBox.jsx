import React from 'react';
import './ServicesBox.css';
import { servicesContent } from '../../Constants/servicesContent';
import { Link } from 'react-router-dom';
import arrow_left from '../Assets/Images/icons8-arrow-30 (2).png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ServicesBox = () => {

    const navigate = useNavigate();

    return (
        <div className="services-section1">
            <Button
                intent='secondary'
                size='large'
                label='همه خدمات'
                onClick={() => navigate('/services')}
            />
            <div className="services-section1-bottom">
                {
                    servicesContent.map((item, id) => {
                        return (
                            <div
                                key={id}
                                className="services-section1-bottom-box"
                            >
                                <Link to='/services'>
                                    <span className='box-number'>{item.number}</span>
                                    <span className='box-title'>{item.title}</span>
                                    <p className='box-text'>{item.text}</p>
                                    <div className='box-div'>
                                        <span>بیشتر بدانید</span>
                                        <KeyboardBackspaceIcon className='arrow-left'/>
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

export default ServicesBox;