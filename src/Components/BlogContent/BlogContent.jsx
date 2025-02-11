import React from 'react';
import './BlogContent.css';
import Button from '../Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import bracket from '../Assets/Images/b3-2.png';
import CircleIcon from '@mui/icons-material/Circle';
import { withTranslation } from 'react-i18next';

const BlogContent = ({ categoriesQuery, setCategoryId, t }) => {
  const navigate = useNavigate();
  const { lang } = useParams();

  return (
    <div className="blog-content">
      <div className="blog-content-section3">
        <div className="blog-content-section3-header">
          <img
            className="blog-content-section3-image"
            src={bracket}
            alt="bracket"
          />
          <span className="blog-content-section3-title">BRACKETTEAM</span>
        </div>
        <div className="blog-content-section3-contactus">
          <span className="contactus-title">{t('navbar.contactUs')}</span>
          <span className="contactus-number">09133243570</span>
        </div>
        <div className="blog-content-section3-btn">
          <Button
            intent="primary"
            size="large"
            label={t('blog.start')}
            onClick={() => navigate(`/${lang}/contactUs`)}
          />
        </div>
      </div>
      <div className="blog-content-section2">
        <h4>{t('blog.title4')}</h4>
        <div className="blog-content-section2-items">
          {categoriesQuery?.map((category) => {
            return (
              <div
                className="blog-content-section2-item"
                key={category?._id}
                onClick={() => setCategoryId(category?._id)}
              >
                <CircleIcon className="blog-content-section2-item-icon" />
                <span className="item-text1">{category?.fa.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(BlogContent);
