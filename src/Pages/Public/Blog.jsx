import React, { useState } from 'react';
import BlogHeader from '../../Components/BlogHeader/BlogHeader';
import BlogContent from '../../Components/BlogContent/BlogContent';
import '../CSS/Blog.css';
import BlogSection from '../../Components/BlogSection/BlogSection';
import { useQuery } from '@tanstack/react-query';
import { getOneBlog } from '../../API/Blog';
import { getAllCategories } from '../../API/Category';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState(undefined);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getOneBlog(id, { categoryId }),
  });
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories(),
  });
  return (
    <WithLoaderAndError
      {...{ data, isLoading, isError, error, categoriesData: categories }}
    >
      <HelmetProvider>
        <Helmet>
          <title>Bracket - {data?.fa.titleSeo}</title>
        </Helmet>
      </HelmetProvider>
      <div className="blog">
        <BlogHeader data={data} />
        <div className="blog-bottom">
          <BlogSection data={data} />
          <BlogContent
            categoriesQuery={categories}
            setCategoryId={setCategoryId}
          />
        </div>
      </div>
    </WithLoaderAndError>
  );
};

export default Blog;
