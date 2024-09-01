import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import BlogsBox from '../../Components/BlogsBox/BlogsBox';
import '../CSS/Weblog.css';
import Button from '../../Components/Button/Button';
import { useQuery } from '@tanstack/react-query';
import { getAllBlogs } from '../../API/Blog';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';
import BlogContent from '../../Components/BlogContent/BlogContent';
import { Helmet } from 'react-helmet';

const Weblog = () => {

    const [categoryId, setCategoryId] = useState(undefined);

    const handleCategory = () => {
        setCategoryId(categoryId);
    }

    const { data: blogsQuery, isLoading, isError, error } = useQuery({
        queryKey: ['blogsQuery', categoryId],
        queryFn: () => getAllBlogs(categoryId)
    })

    return (
        <div className="weblog">
            <Helmet>
                <title>وبلاگ</title>
            </Helmet>
            <Header title='وبلاگ' />
            <WithLoaderAndError {...{ blogsQuery, isLoading, isError, error }}>
                <div className="weblog-blogs">
                    <div className="weblog-blogs-right">
                        {
                            blogsQuery && blogsQuery.map((id) => {
                                return (
                                    <BlogsBox
                                        data={blogsQuery}
                                        key={id}
                                        handleCategory={handleCategory}
                                    />
                                )
                            })
                        }
                        <div className="weblog-btn">
                            <Button
                                intent='primary'
                                size='large'
                                label='بارگذاری بیشتر'
                            />
                        </div>
                    </div>
                    <BlogContent />
                </div>
            </WithLoaderAndError>
        </div>
    )
}

export default Weblog;

