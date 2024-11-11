import React from 'react';
import './ServicesSeoContent.css';
import { useQuery } from '@tanstack/react-query';
import { getDesc } from '../../API/Services'
import WithLoaderAndError from '../WithLoaderAndError/WithLoaderAndError';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';
import image1 from '../Assets/Images/3.webp';

const ServicesSeoContent = ({ t }) => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['desc'],
        queryFn: () => getDesc()
    });

    console.log(data);

    return (
        <WithLoaderAndError {...{ data, isLoading, isError, error }}>
            <Helmet>
                <title>Bracket - {t('navbar.services')} - {data?.fa?.titleSeo}</title>
            </Helmet>
            <div className="services-seo-content">
                <div className="services-seo-content-right">
                    <h2>{data?.fa?.title}</h2>
                    <p>{data?.fa?.description}</p>
                </div>
                <div className="services-seo-content-left">
                    <img
                        src={image1}
                        alt="servicesContent"
                    />
                </div>
            </div>
        </WithLoaderAndError>
    )
}

export default withTranslation()(ServicesSeoContent);