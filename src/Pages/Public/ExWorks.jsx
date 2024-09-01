import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ExWorks.css';
import Header from '../../Components/Header/Header';
import SearchIcon from '@mui/icons-material/Search';
import { Helmet } from 'react-helmet';

const ExWorks = () => {
  return (
    <div className="exworks">
      <Helmet>
        <title>بخشی از نمونه کارها</title>
      </Helmet>
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
