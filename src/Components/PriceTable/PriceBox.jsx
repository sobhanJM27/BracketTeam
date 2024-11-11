import React from 'react';
import './PriceBox.css';
import Button from '../Button/Button';
import { addProject, getAllServices } from '../../API/Services';
import WithLoaderAndError from '../WithLoaderAndError/WithLoaderAndError';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import { withTranslation } from 'react-i18next';

const PriceTable = ({ t }) => {

    const { token } = useAuth();
    const auth = useAuthHooks();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['services'],
        queryFn: () => getAllServices()
    });

    const handleClick = async (serviceID) => {
        try {
            await addProject({ token, ...auth }, serviceID);
            toast.success(t('services.requestMessage1'));
        } catch (err) {
            console.log(err.message);
            toast.error(t('services.requestMessage2'));
        }
    };

    return (
        <WithLoaderAndError {...{ data, isLoading, isError, error }}>
            <ul className="price-container">
                {
                    Array.isArray(data) && data?.map((item) => {
                        return (
                            <li
                                className="price-container-box"
                                key={item?._id}>
                                <h2>{item?.fa?.title}</h2>
                                <span>{item?.fa?.price}</span>
                                <p>{item?.fa?.feature}</p>
                                <Button
                                    size='large'
                                    intent='secondary'
                                    label={t('services.addProject')}
                                    onClick={() => handleClick(item?._id)}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </WithLoaderAndError>
    );
};

export default withTranslation()(PriceTable);