import React from 'react';
import './PriceTable.css';
import Button from '../Button/Button';
import { addProject, getAllServices } from '../../API/Services';
import WithLoaderAndError from '../WithLoaderAndError/WithLoaderAndError';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';

const PriceTable = () => {

    const { token } = useAuth();
    const auth = useAuthHooks();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['services'],
        queryFn: () => getAllServices()
    });

    const handleClick = async (serviceID) => {
        try {
            await addProject({ token, ...auth }, serviceID);
            toast.success('درخواست شما با موفقیت ارسال شد');
        } catch (err) {
            console.log(err.message);
            toast.error('ارسال درخواست با خطا مواجه شد');
        }
    };

    return (
        <div>
            
        </div>
    );
};

export default PriceTable;