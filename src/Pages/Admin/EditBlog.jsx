import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getOneBlog, updateBlog } from '../../API/Blog';
import { getAllCategories } from '../../API/Category';
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import '../CSS/EditBlog.css';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';

const EditBlog = () => {

  const { id, lang } = useParams();
  const { token } = useAuth();
  const auth = useAuthHooks();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    category: '',
    date: '',
    image: null,
  });

  const weblogForm = {
    fa: {
      title: 'عنوان بلاگ',
      shortDescription: 'محتوای کوتاه بلاگ',
      description: 'محتوای بلاگ',
      category: 'دسته بندی'
    },
    en: {
      title: 'Blog title',
      shortDescription: 'Blog short description',
      description: 'Blog description',
      category: 'Category'
    }
  }

  const { data: blogQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogQuery', id],
    queryFn: () => getOneBlog(id),
  });
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  useEffect(() => {
    if (blogQuery) {
      setBlogData({
        title: blogQuery?.title,
        shortDescription: blogQuery?.shortDescription,
        description: blogQuery?.description,
        category: blogQuery?.category,
        date: blogQuery?.date,
        image: blogQuery?.images[0],
      });
    }
  }, [blogQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevData => ({ ...prevData, [name]: value }));
  };

  const updateBlogMutation = useMutation({
    mutationFn: (updatedBlog) => updateBlog({ token, ...auth }, id, updatedBlog),
    onSuccess: () => {
      toast.success('بلاگ با موفقیت ویرایش شد');
      navigate(`/${lang}/admin/weblog`);
    },
    onError: () => {
      toast.error('خطا در ویرایش بلاگ');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateBlogMutation.mutate(blogData);
  };

  return (
    <WithLoaderAndError {...{ blogQuery, isLoading, isError, error }}>
      <div className='edit-blog-container'>
        <h2>ویرایش بلاگ</h2>
        <form
          onSubmit={handleSubmit}
          className="edit-blog-form"
        >
          <input
            type="text"
            name="title"
            value={blogData?.title}
            onChange={handleChange}
            placeholder={weblogForm.fa.title}
            required
          />
          <textarea
            name="shortDescription"
            value={blogData?.shortDescription}
            onChange={handleChange}
            placeholder={weblogForm.fa.shortDescription}
            required
          />
          <textarea
            name="description"
            value={blogData?.description}
            onChange={handleChange}
            placeholder={weblogForm.fa.description}
            required
          />
          <select
            name="category"
            value={blogData?.category}
            onChange={handleChange}
            required
          >
            <option value="">{weblogForm.fa.category}</option>
            {categories && categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="image"
            onChange={(e) => setBlogData({ ...blogData, image: e.target.files[0] })}
          />
          <button type="submit">دخیره تغییرات</button>
        </form>
        <form
          onSubmit={handleSubmit}
          className="edit-blog-form"
        >
          <input
            type="text"
            name="title"
            value={blogData?.title}
            onChange={handleChange}
            placeholder={weblogForm.en.title}
            required
          />
          <textarea
            name="shortDescription"
            value={blogData?.shortDescription}
            onChange={handleChange}
            placeholder={weblogForm.en.shortDescription}
            required
          />
          <textarea
            name="description"
            value={blogData?.description}
            onChange={handleChange}
            placeholder={weblogForm.en.description}
            required
          />
          <select
            name="category"
            value={blogData?.category}
            onChange={handleChange}
            required
          >
            <option value="">{weblogForm.en.category}</option>
            {categories && categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="image"
            onChange={(e) => setBlogData({ ...blogData, image: e.target.files[0] })}
          />
          <button type="submit">دخیره تغییرات</button>
        </form>
      </div>
    </WithLoaderAndError>
  );
};

export default EditBlog;
