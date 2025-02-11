import React from 'react';
import './BlogsBox.css';
import Button from '../Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { withTranslation } from 'react-i18next';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { enZA, faIR } from 'date-fns/locale';

const BlogsBox = ({ data, t }) => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const handleClick = () => {
    navigate(`${data._id}`);
  };

  return (
    <div className="blogsbox">
      <div className="blogsbox-section1" onClick={handleClick}>
        <Button
          intent="secondary"
          size="small"
          label={data?.category.fa.title}
        />
        <img src={data?.images} alt={data?.fa.title} />
      </div>
      <div className="blogsbox-section2">
        <div className="blogsbox-section2-right">
          <CalendarMonthIcon className="blogsbox-section2-right-icon" />
          <span>
            {formatDistanceToNow(new Date(data?.createdAt), {
              addSuffix: true,
              locale: lang === 'fa' ? faIR : enZA,
            })}
          </span>
        </div>
        <div className="blogsbox-section2-left">
          <PersonOutlineIcon className="blogsbox-section2-right-icon" />
          <span>{t('blog.text1')}</span>
        </div>
      </div>
      <h2 className="blogsbox-title" onClick={handleClick}>
        {data?.fa.title}
      </h2>
      <p className="blogsbox-text">{data?.fa.shortDescription}</p>
      <div onClick={handleClick} className="blogsbox-section4">
        <span>{t('services.learnMore')}</span>
        <KeyboardBackspaceIcon className="blogsbox-arrowleft" />
      </div>
    </div>
  );
};

export default withTranslation()(BlogsBox);
