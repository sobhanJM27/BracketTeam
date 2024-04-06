import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/ExWorks.css';
import image2 from '../Components/Assets/Images/metaashopp.com_-1128x9141.png';
import image3 from '../Components/Assets/Images/hamedamraei.com_-1153x5075.png';
import icon1 from '../Components/Assets/Images/icons8-search-50.png';
import PageTitle from '../Components/PageTitle/PageTitle';

const ExWorks = () => {
  return (
    <div className="exworks">
      <PageTitle title='Bracket - بخشی از نمونه کار ها' />
      <div className="exworks-header">
        <div className="exworks-header-top">
          <h1>بخشی از نمونه کارها</h1>
          <div className="exworks-header-bottom">
            <Link to="/">صفحه اصلی</Link>
            <p className="exworks-header-bottom-direction">{'>'}</p>
            <p>بخشی از نمونه کارها</p>
          </div>
        </div>
      </div>
      <div className="exworks-image">
        <div className="exworks-image-box1">
          <Link to='https://metaashopp.com/'>
            <div className="image-box1">
              <img className='icon' src={icon1} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExWorks;
