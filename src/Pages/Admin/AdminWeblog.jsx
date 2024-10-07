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
    fa: {
      titleFa: '',
      shortDescriptionFa: '',
      descriptionFa: '',
      titleSeoFa: '',
    },
    en: {
      titleEn: '',
      shortDescriptionEn: '',
      descriptionEn: '',
      titleSeoEn: '',
    },
    image: null,
    status: false,
    category: '',
    url: ''
  });

  const { data: blogsQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogsQuery', categoryId],
    queryFn: () => getAllBlogs(categoryId, undefined)
  });

  const { data: categories, isLoading: loadingCategories, isError: isErrorCategories, error: errorCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: ()=> getAllCategories()
  });

  console.log(categories)

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
        fa: {
          titleFa: '',
          shortDescriptionFa: '',
          descriptionFa: '',
          titleSeoFa: '',
        },
        en: {
          titleEn: '',
          shortDescriptionEn: '',
          descriptionEn: '',
          titleSeoEn: '',
        },
        image: null,
        status: false,
        category: '',
        url: ''
      });
    },
    onError: () => {
      toast.error('خطا در اظافه کردن بلاگ');
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.endsWith('Fa')) {
      const faFieldName = name
      setBlogData((prevData) => {
        return({
        ...prevData,
        fa: { ...prevData.fa, [faFieldName]: value },
      })});
    } else if (name.endsWith('En')) {
      const enFieldName = name
      setBlogData((prevData) => ({
        ...prevData,
        en: { ...prevData.en, [enFieldName]: value },
      }));
    } else {
      setBlogData((prevData) => ({ ...prevData, [name]: value }));
    }
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
          name="titleFa"
          value={blogData.fa.titleFa}
          placeholder="عنوان بلاگ"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="titleSeoFa"
          value={blogData.fa.titleSeoFa}
          placeholder="عنوان سئو"
          onChange={handleChange}
          required
        />
        <textarea
          name="shortDescriptionFa"
          value={blogData.fa.shortDescriptionFa}
          placeholder="محتوای کوتاه بلاگ"
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="descriptionFa"
          value={blogData.fa.descriptionFa}
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
          <option value="">دسته‌بندی</option>
          {categories && categories.map((category) => (
            <option key={category._id} value={category._id}>
              {`${category.fa.title} - ${category.en.title}`}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="titleEn"
          value={blogData.en.titleEn}
          placeholder="Blog title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="titleSeoEn"
          value={blogData.en.titleSeoEn}
          placeholder="Seo title"
          onChange={handleChange}
          required
        />
        <textarea
          name="shortDescriptionEn"
          value={blogData.en.shortDescriptionEn}
          placeholder="Blog short description"
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="descriptionEn"
          value={blogData.en.descriptionEn}
          placeholder="Blog description"
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