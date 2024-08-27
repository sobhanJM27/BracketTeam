import React from 'react';
import BlogHeader from '../Components/BlogHeader/BlogHeader';
import BlogContent from '../Components/BlogContent/BlogContent';
import './CSS/Blog.css';
import BlogSection from '../Components/BlogSection/BlogSection';

const Blog = () => {
  return (
    <div className="blog">
      <BlogHeader />
      <div className="blog-bottom">
        <BlogSection />
        <BlogContent />
      </div>
    </div>
  )
}

export default Blog