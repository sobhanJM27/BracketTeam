import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/ExWorks.css';
import Header from '../Components/Header/Header';
import icon1 from '../Components/Assets/Images/icons8-search-50.png';
import SearchIcon from '@mui/icons-material/Search';

const ExWorks = () => {
  return (
    <div className="exworks">
      <Header title='بخشی از نمونه کارها' />
      <div className="exworks-image">
        <div className="exworks-image-box">
          <Link to='https://metaashopp.com/'>
            <div className="image-box1">
              <SearchIcon className='icon' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExWorks;
