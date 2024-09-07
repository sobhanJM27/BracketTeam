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
import { getAllCategories } from '../../API/Category';

const Weblog = () => {

    const [categoryId, setCategoryId] = useState(undefined);
    const [visibleBlogs, setVisibleBlogs] = useState(5);

    const { data: blogsQuery, isLoading, isError, error } = useQuery({
        queryKey: ['blogsQuery', categoryId],
        queryFn: () => getAllBlogs(categoryId, undefined)
    });

    const { data: categories, isLoading: loadingCategories, isError: isErrorCategories, error: errorCategories } = useQuery({
        queryKey: ['categories'],
        queryFn: () => getAllCategories()
    });

    const loadMoreBlogs = () => {
        setVisibleBlogs((prevVisible) => prevVisible + 5);
    };

    return (
        <div className="weblog">
            <Helmet>
                <title>وبلاگ</title>
            </Helmet>
            <Header title='وبلاگ' />
            <WithLoaderAndError
                {...{ blogsQuery, isLoading, isError, error, loadingCategories, isErrorCategories, errorCategories }}
            >
                <div className="weblog-blogs">
                    <div className="weblog-blogs-right">
                        {
                            blogsQuery && blogsQuery.slice(0, visibleBlogs).map((id) => {
                                return (
                                    <BlogsBox
                                        data={blogsQuery}
                                        key={id}
                                    />
                                )
                            })
                        }
                        {
                            blogsQuery && blogsQuery.length > visibleBlogs && (
                                <div className="weblog-btn">
                                    <Button
                                        intent='primary'
                                        size='large'
                                        label='بارگذاری بیشتر'
                                        onClick={loadMoreBlogs}
                                    />
                                </div>
                            )
                        }
                    </div>
                    <BlogContent
                        categories={categories}
                        setCategoryId={setCategoryId}
                    />
                </div>
            </WithLoaderAndError>
        </div>
    )
}

export default Weblog;

