import React from 'react';
import './ServicesSeoContent.css';
import { useQuery } from '@tanstack/react-query';
import { getDesc } from '../../API/Services'
import WithLoaderAndError from '../WithLoaderAndError/WithLoaderAndError';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';

const ServicesSeoContent = ({ t }) => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['desc'],
        queryFn: () => getDesc()
    });

    console.log(data);

    return (
        <WithLoaderAndError {...{ data, isLoading, isError, error }}>
            <div className="services-seo-content">
                <Helmet>
                    <title>Bracket - {t('navbar.services')} - {data?.fa?.titleSeo}</title>
                </Helmet>
                <h2 className="services-seo-title">{data?.fa?.title}</h2>
                <p className="services-seo-description">{data?.fa?.description}</p>
            </div>
        </WithLoaderAndError>
    )
}

export default withTranslation()(ServicesSeoContent);