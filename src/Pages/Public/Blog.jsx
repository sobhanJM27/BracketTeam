import React, { useState } from 'react';
import BlogHeader from '../../Components/BlogHeader/BlogHeader';
import BlogContent from '../../Components/BlogContent/BlogContent';
import '../CSS/Blog.css';
import BlogSection from '../../Components/BlogSection/BlogSection';
import { useQuery } from '@tanstack/react-query';
import { getAllBlogs } from '../../API/Blog';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';

const Blog = () => {

  const [categoryId, setCategoryId] = useState(undefined);

  const handleCategory = () => {
    setCategoryId(categoryId);
  }

  const { data: blogsQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogQuery', categoryId],
    queryFn: () => getAllBlogs(categoryId)
  })

  return (
    <WithLoaderAndError {...{ blogsQuery, isLoading, isError, error }}>
      <div className="blog" >
        <BlogHeader data={blogsQuery} />
        <div className="blog-bottom">
          <BlogSection data={blogsQuery} />
          <BlogContent handleCategory={handleCategory} />
        </div>
      </div >
    </WithLoaderAndError>
  )
}

export default Blog