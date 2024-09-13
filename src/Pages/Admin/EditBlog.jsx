import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getOneBlog, updateBlog } from '../../API/Blog';
import { getAllCategories } from '../../API/Category'; // اضافه کردن این ایمپورت
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import '../CSS/EditBlog.css';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';

const EditBlog = () => {
  const { id } = useParams(); // اضافه کردن این قسمت برای گرفتن id بلاگ
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

  const { data: blogQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogQuery', id], // به‌روز کردن این قسمت برای استفاده از id بلاگ
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
      toast.success("بلاگ با موفقیت ویرایش شد");
      navigate('/admin/admin-weblog');
    },
    onError: () => {
      toast.error("خطا در ویرایش بلاگ");
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
            placeholder="عنوان بلاگ"
            required
          />
          <textarea
            name="shortDescription"
            value={blogData?.shortDescription}
            onChange={handleChange}
            placeholder="محتوای کوتاه بلاگ"
            required
          />
          <textarea
            name="description"
            value={blogData?.description}
            onChange={handleChange}
            placeholder="محتوای بلاگ"
            required
          />

          {/* استفاده از دسته‌بندی‌های موجود */}
          <select
            name="category"
            value={blogData?.category}
            onChange={handleChange}
            required
          >
            <option value="">انتخاب دسته‌بندی</option>
            {categories && categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={blogData?.date}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="image"
            onChange={(e) => setBlogData({ ...blogData, image: e.target.files[0] })}
          />
          <button type="submit">ذخیره تغییرات</button>
        </form>
      </div>
    </WithLoaderAndError>
  );
};

export default EditBlog;
