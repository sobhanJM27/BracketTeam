import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../CSS/AdminWeblog.css';
import Button from '../../Components/Button/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addBlog, deleteBlog, getAllBlogs, updateBlog } from '../../API/Blog';
import { getAllCategories } from '../../API/Category';
import { useAuth, useAuthHooks } from "../../Hooks/useAuth";
import toast from 'react-hot-toast';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';
import FormLoader from '../../Components/FormLoader/FormLoader';

const AdminWeblog = () => {
  const [categoryId, setCategoryId] = useState(undefined);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [blogData, setBlogData] = useState({
    fa: {
      titleFa: '',
      shortDescriptionFa: '',
      descriptionFa: '',
      titleSeoFa: '',
      urlFa: '',
    },
    en: {
      titleEn: '',
      shortDescriptionEn: '',
      descriptionEn: '',
      titleSeoEn: '',
      urlEn: '',
    },
    images: '',
    status: false,
    category: '',
  });
  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = useQueryClient();

  const { data: blogsQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogsQuery', categoryId],
    queryFn: () => getAllBlogs(categoryId, undefined)
  });
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories()
  });

  const deleteBlogMutation = useMutation({
    mutationFn: (id) => deleteBlog(id, { token, ...auth }),
    onSuccess: () => {
      setIsDeleteLoading(false);
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success('بلاگ با موفقیت حذف شد');
    },
    onError: () => {
      setIsDeleteLoading(false);
      toast.error('خطا در برقراری ارتباط');
    },
  });
  const addBlogMutation = useMutation({
    mutationFn: (newBlog) =>
      addBlog(
        { token, ...auth },
        newBlog.fa.urlFa,
        newBlog.fa.titleFa,
        newBlog.fa.shortDescriptionFa,
        newBlog.fa.descriptionFa,
        newBlog.fa.titleSeoFa,
        newBlog.en.urlEn,
        newBlog.en.titleEn,
        newBlog.en.shortDescriptionEn,
        newBlog.en.descriptionEn,
        newBlog.en.titleSeoEn,
        newBlog.images,
        newBlog.status,
        newBlog.category,
      ),
    onSuccess: () => {
      setIsSubmitLoading(false);
      queryClient.invalidateQueries(['blogsQuery']);
      toast.success('بلاگ با موفقیت اظافه شد');
      setBlogData({
        fa: {
          titleFa: '',
          shortDescriptionFa: '',
          descriptionFa: '',
          titleSeoFa: '',
          urlFa: ''
        },
        en: {
          titleEn: '',
          shortDescriptionEn: '',
          descriptionEn: '',
          titleSeoEn: '',
          urlEn: ''
        },
        images: '',
        status: false,
        category: '',
      });
    },
    onError: (e) => {
      console.log(e);
      setIsSubmitLoading(false);
      toast.error('خطا در اظافه کردن بلاگ');
    },
  });
  const updateBlogMutation = useMutation({
    mutationFn: (updatedBlog) => updateBlog({ token, ...auth },
      currentBlogId,
      updatedBlog.fa.titleFa || '',
      updatedBlog.fa.shortDescriptionFa || '',
      updatedBlog.fa.descriptionFa || '',
      updatedBlog.fa.urlFa || '',
      updatedBlog.fa.titleSeoFa || '',
      updatedBlog.en.titleEn || '',
      updatedBlog.en.shortDescriptionEn || '',
      updatedBlog.en.descriptionEn || '',
      updatedBlog.en.urlEn || '',
      updatedBlog.fa.titleSeoEn || '',
      updatedBlog.status,
      updatedBlog.images,
      updatedBlog.category,
    ),
    onSuccess: () => {
      queryClient.invalidateQueries(['blogsQuery']);
      toast.success('بلاگ با موفقیت ویرایش شد');
      setCurrentBlogId(null);
      setBlogData({
        fa: {
          titleFa: '',
          shortDescriptionFa: '',
          descriptionFa: '',
          titleSeoFa: '',
          urlFa: '',
        },
        en: {
          titleEn: '',
          shortDescriptionEn: '',
          descriptionEn: '',
          titleSeoEn: '',
          urlEn: '',
        },
        images: '',
        status: false,
        category: '',
      });
    },
    onError: () => {
      toast.error('خطا در ویرایش بلاگ');
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.endsWith('Fa')) {
      const faFieldName = name;
      setBlogData((prevData) => ({
        ...prevData,
        fa: { ...prevData.fa, [faFieldName]: value },
      }));
    } else if (name.endsWith('En')) {
      const enFieldName = name;
      setBlogData((prevData) => ({
        ...prevData,
        en: { ...prevData.en, [enFieldName]: value },
      }));
    } else {
      setBlogData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    const newBlog = {
      fa: {
        titleFa: blogData.fa.titleFa,
        shortDescriptionFa: blogData.fa.shortDescriptionFa,
        descriptionFa: blogData.fa.descriptionFa,
        titleSeoFa: blogData.fa.titleSeoFa,
        urlFa: blogData.fa.urlFa
      },
      en: {
        titleEn: blogData.en.titleEn,
        shortDescriptionEn: blogData.en.shortDescriptionEn,
        descriptionEn: blogData.en.descriptionEn,
        titleSeoEn: blogData.en.titleSeoEn,
        urlEn: blogData.en.urlEn
      },
      images: blogData.images,
      status: blogData.status,
      category: blogData.category,
    }
    if (currentBlogId) {
      await updateBlogMutation.mutateAsync(newBlog);
      setIsSubmitLoading(false);
    } else {
      await addBlogMutation.mutateAsync(newBlog);
      setIsSubmitLoading(false);
    };
  };

  const handleEditClick = (blog) => {
    setCurrentBlogId(blog._id);
    setBlogData({
      fa: {
        titleFa: blog.fa?.title || '',
        shortDescriptionFa: blog.fa?.shortDescription || '',
        descriptionFa: blog.fa?.description || '',
        titleSeoFa: blog.fa?.titleSeo || '',
        urlFa: blog.fa?.url || ''
      },
      en: {
        titleEn: blog.en?.title || '',
        shortDescriptionEn: blog.en?.shortDescription || '',
        descriptionEn: blog.en?.description || '',
        titleSeoEn: blog.en?.titleSeo || '',
        urlEn: blog.en?.url || ''
      },
      images: blog.images,
      status: blog.status,
      category: blog.category,
    });
  };
  const handleBlogChange = async (blogId, lang, fieldName, value) => {
    const updatedBlogs = blogsQuery.map((blog) => {
      if (blog._id === blogId) {
        return {
          ...blog,
          [lang]: {
            ...blog[lang],
            [fieldName]: value,
          },
        };
      }
      return blog;
    });
    setBlogData(updatedBlogs);
  };

  return (
    <div className="admin-weblog">
      <h2>مدیریت بلاگ ها</h2>
      <form className="admin-weblog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="عکس"
          name="images"
          value={blogData?.images}
          onChange={handleChange}
        />
        <input
          type="text"
          name="urlFa"
          value={blogData.fa?.urlFa || ''}
          placeholder="لینک کوتاه"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="titleFa"
          value={blogData.fa?.titleFa || ''}
          placeholder="عنوان بلاگ"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="titleSeoFa"
          value={blogData.fa?.titleSeoFa || ''}
          placeholder="عنوان سئو"
          onChange={handleChange}
          required
        />
        <textarea
          name="shortDescriptionFa"
          value={blogData.fa?.shortDescriptionFa || ''}
          placeholder="محتوای کوتاه بلاگ"
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="descriptionFa"
          value={blogData.fa?.descriptionFa || ''}
          placeholder="محتوای بلاگ"
          onChange={handleChange}
          required
        ></textarea>
        {blogData.fa?.descriptionFa && (
          <div className="markdown-preview">
            <h3>پیش‌نمایش Markdown</h3>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blogData.fa?.descriptionFa}
            </ReactMarkdown>
          </div>
        )}

        <select
          name="category"
          value={blogData?.category}
          onChange={handleChange}
          required
        >
          <option value="">دسته‌بندی</option>
          {categories && categories.map((category) => (
            <option
              key={category._id}
              value={category._id}
              onChange={() => setCategoryId(category._id)}
            >
              {`${category.fa.title} - ${category.en.title}`}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="urlEn"
          value={blogData.en?.urlEn || ''}
          placeholder="Short Link"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="titleEn"
          value={blogData.en?.titleEn || ''}
          placeholder="Blog title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="titleSeoEn"
          value={blogData.en?.titleSeoEn || ''}
          placeholder="Seo title"
          onChange={handleChange}
          required
        />
        <textarea
          name="shortDescriptionEn"
          value={blogData.en?.shortDescriptionEn || ''}
          placeholder="Blog short description (Markdown)"
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="descriptionEn"
          value={blogData.en?.descriptionEn || ''}
          placeholder="Blog description (Markdown)"
          onChange={handleChange}
          required
        ></textarea>
        {blogData.en?.descriptionEn && (
          <div className="markdown-preview">
            <h3>پیش‌نمایش Markdown</h3>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blogData.en?.descriptionEn}
            </ReactMarkdown>
          </div>
        )}
        <input
          type="text"
          name="status"
          value={blogData?.status}
          placeholder="Status"
          onChange={handleChange}
          required
        />
        <Button
          intent='primary'
          size='small'
          label={currentBlogId ? 'ویرایش بلاگ' : 'اظافه کردن بلاگ'}
          onClick={handleSubmit}
        />
        {isSubmitLoading ? <FormLoader /> : ''}
      </form>

      <div className='admin-weblog-blogs'>
        <h2>لیست بلاگ ها</h2>
        <WithLoaderAndError {...{ data: blogsQuery, isLoading, isError, error }}>
          <ul className="admin-weblog-blogs-items">
            {
              blogsQuery && blogsQuery?.map((blogs) => {
                return (
                  <li key={blogs._id} className="admin-weblog-blogs-items-item">
                    <img
                      src={blogs.images[0]}
                      alt="blogs"
                    />
                    <input
                      type="text"
                      value={blogs.images}
                      placeholder='عکس'
                      name='images'
                      onChange={(e) => handleBlogChange(blogs._id, '', 'images', e.target.value)}
                    />
                    <input
                      type='text'
                      value={blogs.fa.title}
                      placeholder='عنوان بلاگ'
                      name='titleFa'
                      onChange={(e) => handleBlogChange(blogs._id, 'fa', 'title', e.target.value)}
                    />
                    <span>{blogs.createdAt}</span>
                    <input
                      type="text"
                      value={blogs.fa.shortDescription}
                      placeholder='محتوای کوتاه بلاگ'
                      name='shortDescriptionFa'
                      onChange={(e) => handleBlogChange(blogs._id, 'fa', 'shortDescription', e.target.value)}
                    />
                    <input
                      type="text"
                      value={blogs.fa.description}
                      placeholder='محتوای بلاگ'
                      name='descriptionFa'
                      onChange={(e) => handleBlogChange(blogs._id, 'fa', 'description', e.target.value)}
                    />
                    <input
                      type="text"
                      value={blogs.fa.titleSeo}
                      placeholder='عنوان سئو'
                      name='titleSeoFa'
                      onChange={(e) => handleBlogChange(blogs._id, 'fa', 'titleSeo', e.target.value)}
                    />
                    <input
                      type="url"
                      value={blogs.fa.url}
                      placeholder='لینک کوتاه'
                      name='urlFa'
                      onChange={(e) => handleBlogChange(blogs._id, 'fa', 'url', e.target.value)}
                    />
                    <input
                      type='text'
                      value={blogs.en.title}
                      placeholder='Blog title'
                      name='titleEn'
                      onChange={(e) => handleBlogChange(blogs._id, 'en', 'title', e.target.value)}
                    />
                    <input
                      type="text"
                      value={blogs.en.shortDescription}
                      placeholder='Blog short description'
                      name='shortDescriptionEn'
                      onChange={(e) => handleBlogChange(blogs._id, 'en', 'shortDescription', e.target.value)}
                    />
                    <input
                      type="text"
                      value={blogs.en.description}
                      placeholder='Blog description'
                      name='descriptionEn'
                      onChange={(e) => handleBlogChange(blogs._id, 'en', 'description', e.target.value)}
                    />
                    <input
                      type="text"
                      value={blogs.en.titleSeo}
                      placeholder='Seo title'
                      name='titleSeoEn'
                      onChange={(e) => handleBlogChange(blogs._id, 'en', 'titleSeo', e.target.value)}
                    />
                    <input
                      type="url"
                      value={blogs.en.url}
                      placeholder='Short link'
                      name='urlEn'
                      onChange={(e) => handleBlogChange(blogs._id, 'en', 'url', e.target.value)}
                    />
                    <input
                      type="text"
                      value={`${blogs.category.en.title} - ${blogs.category.fa.title}`}
                      placeholder='Category - دسته بندی'
                      name='category'
                      onChange={(e) => handleBlogChange(blogs._id, '', 'category', e.target.value)}
                    />
                    <input
                      type="text"
                      value={blogs.status}
                      placeholder='Status'
                      name='status'
                      onChange={(e) => handleBlogChange(blogs._id, '', 'category', e.target.value)}
                    />
                    <div className='admin-weblog-blogs-items-item-btn'>
                      <button
                        className="edit-btn"
                        onClick={() => handleEditClick(blogs)}
                      >
                        ویرایش
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          setIsDeleteLoading(true);
                          deleteBlogMutation.mutate(blogs._id);
                        }}
                      >
                        حذف
                      </button>
                      {isDeleteLoading ? <FormLoader /> : ''}
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </WithLoaderAndError>
      </div>
    </div>
  );
};

export default AdminWeblog;