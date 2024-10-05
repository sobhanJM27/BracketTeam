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
  const { id, lang } = useParams();
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
    category: '',
    titleSeo: '',
    url: ''
  });

  const weblogForm = {
    fa: {
      title: 'عنوان بلاگ',
      shortDescription: 'محتوای کوتاه بلاگ',
      description: 'محتوای بلاگ',
      category: 'دسته بندی',
      titleSeo: 'عنوان سئو'
    },
    en: {
      title: 'Blog title',
      shortDescription: 'Blog short description',
      description: 'Blog description',
      category: 'Category',
      titleSeo: 'Seo title'
    }
  }

  const { data: blogsQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogsQuery', categoryId],
    queryFn: () => getAllBlogs(categoryId, undefined)
  });

  const { data: categories, isLoading: loadingCategories, isError: isErrorCategories, error: errorCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories
  });

  const deleteBlogMutation = useMutation({
    mutationFn: (id) => deleteBlog({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success('بلاگ با موفقیت حذف شد');
    },
    onError: () => {
      toast.error('خطا در برقراری ارتباط');
    },
  });

  const addBlogMutation = useMutation({
    mutationFn: (newBlog) => addBlog({ token, ...auth, ...newBlog }),
    onSuccess: () => {
      queryClient.invalidateQueries(['blogsQuery']);
      toast.success('بلاگ با موفقیت اظافه شد');
      setBlogData({
        title: '',
        shortDescription: '',
        description: '',
        image: null,
        status: true,
        category: '',
        titleSeo: '',
        url: '',
      });
    },
    onError: () => {
      toast.error('خطا در اظافه کردن بلاگ');
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
    <div className="admin-weblog">
      <h2>مدیریت بلاگ ها</h2>
      <form className="admin-weblog-form" onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          required
        />
        <input
          type="url"
          name="url"
          value={blogData.url}
          placeholder="لینک کوتاه"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          value={blogData.title}
          placeholder={weblogForm.fa.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name='titleSeo'
          value={blogData.titleSeo}
          placeholder={weblogForm.fa.titleSeo}
          onChange={handleChange}
          required
        />
        <textarea
          name="shortDescription"
          value={blogData.shortDescription}
          placeholder={weblogForm.fa.shortDescription}
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="description"
          value={blogData.description}
          placeholder={weblogForm.fa.description}
          onChange={handleChange}
          required
        ></textarea>
        <select
          name="category"
          value={blogData.category}
          onChange={handleChange}
          required
        >
          <option value="">{weblogForm.fa.category}</option>
          {categories && categories.map((category) => (
            <option key={category.parentId} value={category.parentId}>
              {category.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="title"
          value={blogData.title}
          placeholder={weblogForm.en.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name='titleSeo'
          value={blogData.titleSeo}
          placeholder={weblogForm.en.titleSeo}
          onChange={handleChange}
          required
        />
        <textarea
          name="shortDescription"
          value={blogData.shortDescription}
          placeholder={weblogForm.en.shortDescription}
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="description"
          value={blogData.description}
          placeholder={weblogForm.en.description}
          onChange={handleChange}
          required
        ></textarea>
        <Button
          intent='primary'
          size='small'
          label='اظافه کردن بلاگ'
          onClick={handleSubmit}
        />
      </form>
      <div className='admin-weblog-blogs'>
        <h2>لیست بلاگ ها</h2>
        <WithLoaderAndError {...{ blogsQuery, isLoading, isError, error, loadingCategories, isErrorCategories, errorCategories }}>
          <ul className="admin-weblog-blogs-items">
            {
              blogsQuery && blogsQuery.map((blogs) => {
                return (
                  <li
                    key={blogs._id}
                    className="admin-weblog-blogs-items-item"
                    onChange={() => setCategoryId(blogs._id)}
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
                          navigate(`/${lang}/admin/edit-weblog/${id}`);
                        }}
                      >
                        ویرایش
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          deleteBlogMutation.mutate(blogs._id);
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
        </WithLoaderAndError>
      </div>
    </div>
  )

}

export default AdminWeblog;