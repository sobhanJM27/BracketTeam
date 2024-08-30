import React from 'react';
import './CSS/AboutUs.css';
import image1 from '../Components/Assets/Images/img-17.png';
import image2 from '../Components/Assets/Images/confident-african.webp';
import icon1 from '../Components/Assets/Images/icons8-tick-24 (2).png';
import Header from '../Components/Header/Header';
import { aboutUsItems } from '../Constants/aboutUsItems';
import Button from '../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {

  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='about-us'>
      <Header title='درباره ما' />
      <div className="about-us-container">
        <div className="about-us-container-right">
          <img
            src={image1}
            alt="aboutUs"
          />
        </div>
        <div className="about-us-container-left">
          <div className="about-us-container-left-hdr">
            <h2>تجربه داشتن یک سایت با کیفیت</h2>
            <div className="about-us-container-left-hdr-point"></div>
          </div>
          <p>
            با تکیه بر تیم حرفه‌ای ما در زمینه طراحی و توسعه وب، عملکرد بهینه و رضایت حداکثری کاربران را در سایت شما به ارمغان می‌آورد. ما تلاش می‌کنیم تا با ایجاد تجربه‌ای بی‌نظیر، درخشش شما را در دنیای آنلاین به عنوان یک برند برتر بیان کنیم.
          </p>
          <Button
            intent='secondary'
            size='large'
            label='تماس با ما'
            onClick={() => navigate('/contactUs')}
          />
        </div>
      </div>
      <div className="about-us-section" ref={ref}>
        <div className="about-us-section-right">
          <h2>برای طراحی سایت های خود از کارشناسان ما کمک بخواهید</h2>
          {
            aboutUsItems.map((item) => {
              return (
                <div
                  key={item.key}
                  className='about-us-section-right-contents'
                >
                  <div className={`about-us-section-right-content staggered-entry${item.key} ${inView ? 'show3' : ''}`}>
                    <div className="about-us-section-right-content-right">
                      <img
                        src={icon1}
                        alt="aboutUs"
                      />
                      <span className="text1">{item.title}</span>
                    </div>
                    <p className="text">{item.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="about-us-section-left">
          <img
            src={image2}
            alt="aboutUs"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
