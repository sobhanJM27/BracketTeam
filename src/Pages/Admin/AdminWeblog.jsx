import React, { useState } from 'react';
import '../CSS/AdminWeblog.css';
import Button from '../../Components/Button/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addBlog, deleteBlog, getAllBlogs } from '../../API/Blog';
import { getAllCategories } from '../../API/Category';
import { useAuth, useAuthHooks } from "../../Hooks/useAuth";
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';

const AdminWeblog = () => {

  const [categoryId, setCategoryId] = useState(undefined);
  const { id } = useParams();
  const { token } = useAuth();
  const auth = useAuthHooks();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [blogData, setBlogData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    image: null,
    status: false,
    date: '',
    category: ''
  });

  const { data: blogsQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogsQuery', categoryId],
    queryFn: () => getAllBlogs(categoryId, undefined)
  });

  const { data: categories, isLoading: loadingCategories, isError: isErrorCategories, error: errorCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories()
  });

  const deleteCourseMutation = useMutation({
    mutationFn: (id) => deleteBlog({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("حذف با موفقیت انجام شد");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  const addBlogMutation = useMutation({
    mutationFn: (newBlog) => addBlog({ token, ...auth, ...newBlog }),
    onSuccess: () => {
      queryClient.invalidateQueries(['blogsQuery']);
      toast.success("بلاگ با موفقیت اضافه شد");
      setBlogData({
        title: '',
        shortDescription: '',
        description: '',
        image: null,
        status: true,
        date: '',
        category: ''
      });
    },
    onError: () => {
      toast.error("خطا در افزودن بلاگ");
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setBlogData(prevData => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addBlogMutation.mutate(blogData);
  };

  return (
    <WithLoaderAndError {...{ blogsQuery, isLoading, isError, error, loadingCategories, isErrorCategories, errorCategories }}>
    <div className="admin-weblog">
      <h1>مدیریت وبلاگ‌ها</h1>
      <form className="admin-weblog-form" onSubmit={handleSubmit}>
        <input
          type="file"
          placeholder='عکس بلاگ'
          onChange={handleFileChange}
          required
        />
        <input
          type="date"
          name="date"
          value={blogData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          value={blogData.title}
          placeholder="عنوان بلاگ"
          onChange={handleChange}
          required
        />
        <textarea
          name="shortDescription"
          value={blogData.shortDescription}
          placeholder='محتوای کوتاه بلاگ'
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="description"
          value={blogData.description}
          placeholder="محتوای بلاگ"
          onChange={handleChange}
          required
        ></textarea>
        <select
          name="category"
          value={blogData.category}
          onChange={handleChange}
          required
        >
          <option value="">انتخاب دسته‌بندی</option>
          {categories && categories.map((category) => (
            <option key={category.parentId} value={category.parentId}>
              {category.title}
            </option>
          ))}
        </select>
        <Button
          intent='primary'
          size='small'
          label='اضافه کردن بلاگ'
          onClick={handleSubmit}
        />
      </form>
      <div className='admin-weblog-blogs'>
        <h2>لیست بلاگ ها</h2>
        <ul className="admin-weblog-blogs-items">
          {
            blogsQuery && blogsQuery.map((blogs) => {
              return (
                <li
                  key={blogs._id}
                  className="admin-weblog-blogs-items-item"
                >
                  <img
                    src={blogs.images[0]}
                    alt="blogImage"
                  />
                  <h3>{blogs?.title}</h3>
                  <span>{blogs?.date}</span>
                  <p>{blogs?.shorDescription}</p>
                  <p>{blogs?.description}</p>
                  <p>{blogs?.category}</p>
                  <div className='admin-weblog-blogs-items-item-btn'>
                    <button
                      className="edit-btn"
                      onClick={() => {
                        navigate(`admin/edit-weblog/${id}`);
                      }}
                    >
                      ویرایش
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        deleteCourseMutation.mutate(blogs._id);
                      }}
                    >
                      حذف
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
    </WithLoaderAndError>
  )

}

export default AdminWeblog;