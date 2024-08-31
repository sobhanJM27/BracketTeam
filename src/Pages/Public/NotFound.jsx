import React from 'react';
import '../CSS/NotFound.css';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">صفحه مورد نظر پیدا نشد</p>
            <Button
                label='بازگشت به خانه'
                intent='primary'
                size='small'
                onClick={()=>navigate('/')}
            />
        </div>
    );
};

export default NotFound;