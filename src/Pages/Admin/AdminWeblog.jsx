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
import { withTranslation } from 'react-i18next';

const AdminWeblog = ({ t }) => {

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
      toast.success(t('admin.message1'));
    },
    onError: () => {
      toast.error(t('admin.error1'));
    },
  });

  const addBlogMutation = useMutation({
    mutationFn: (newBlog) => addBlog({ token, ...auth, ...newBlog }),
    onSuccess: () => {
      queryClient.invalidateQueries(['blogsQuery']);
      toast.success(t('admin.message2'));
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
      toast.error(t('admin.error2'));
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
        <h2>{t('admin.title1')}</h2>
        <form className="admin-weblog-form" onSubmit={handleSubmit}>
          <input
            type="file"
            placeholder={t('admin.photo')}
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
            placeholder={t('title2')}
            onChange={handleChange}
            required
          />
          <textarea
            name="shortDescription"
            value={blogData.shortDescription}
            placeholder={t('admin.shortDescription')}
            onChange={handleChange}
            required
          ></textarea>
          <textarea
            name="description"
            value={blogData.description}
            placeholder={t('admin.description')}
            onChange={handleChange}
            required
          ></textarea>
          <select
            name="category"
            value={blogData.category}
            onChange={handleChange}
            required
          >
            <option value="">{t('admin.category')}</option>
            {categories && categories.map((category) => (
              <option key={category.parentId} value={category.parentId}>
                {category.title}
              </option>
            ))}
          </select>
          <Button
            intent='primary'
            size='small'
            label={t('admin.addBlog')}
            onClick={handleSubmit}
          />
        </form>
        <div className='admin-weblog-blogs'>
          <h2>{t('admin.listBlogs')}</h2>
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
                        {t('admin.edit')}
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          deleteCourseMutation.mutate(blogs._id);
                        }}
                      >
                        {t('admin.delete')}
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

export default withTranslation()(AdminWeblog);