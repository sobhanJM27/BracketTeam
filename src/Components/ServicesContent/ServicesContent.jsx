import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Assets/Images/vector-img-90.webp';
import './ServicesContent.css';

const ServicesContent = () => {
    return (
        <div className="services-content">
            <div className="services-content-right">
                <h2>ارائه خدمات متناسب با حرفه شما</h2>
                <p>ما خدمات سایت را به شیوه‌ای منحصر به فرد و متناسب با حرفه شما ارائه می‌دهیم، تا بتوانید مشتریان خود را جذب کنید و نیازهای آن‌ها را به خوبی برطرف کنید. با توجه به تخصص و صنعت شما، در سایت شما بهبود و بالندگی را تضمین می‌کنیم.</p>
                <Link
                    to='/services'
                >
                    بیشتر بدانید
                </Link>
            </div>
            <div className="services-content-left">
                <img
                    src={image1}
                    alt="servicesContent"
                />
            </div>
        </div>
    )
}

export default ServicesContent;