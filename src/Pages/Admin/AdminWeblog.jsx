import React, { useState } from 'react';
import '../CSS/AdminWeblog.css';
import Button from '../../Components/Button/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteBlog, getAllBlogs } from '../../API/Blog';
import { useAuth } from '../../Context/authContext';
import toast from 'react-hot-toast';
import { getRefreshToken } from '../../API/Auth';
import { useNavigate } from 'react-router-dom';

const AdminWeblog = () => {

  const navigate = useNavigate();

  const [categoryId, setCategoryId] = useState(undefined);

  const auth = useAuth();

  const queryClient = useQueryClient();

  const { data: blogsQuery, isLoading, isError, error } = useQuery({
    queryKey: ['blogsQuery', categoryId],
    queryFn: () => getAllBlogs(categoryId, undefined)
  });

  const deleteBlogMutation = useMutation({
    mutationFn: async (id) => {
      try {
        return await deleteBlog(id, auth?.token);
      } catch (error) {
        if (error.response && error.response.status !== 200) {
          const newToken = await getRefreshToken(auth?.token);
          auth.login({ ...auth, token: newToken });
          return await deleteBlog(id, newToken);
        }
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("حذف با موفقیت انجام شد");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });

  return (
    <div className="admin-weblog">
      <h1>مدیریت وبلاگ‌ها</h1>
      <form className="admin-weblog-form">
        <input
          type="file"
          placeholder='عکس بلاگ'
          required
        />
        <input
          type="date"
          placeholder="تاریخ بلاگ"
          required
        />
        <input
          type="text"
          placeholder="عنوان بلاگ"
          required
        />
        <textarea
          placeholder='محتوای کوتاه بلاگ'
          required
        ></textarea>
        <textarea
          placeholder="محتوای بلاگ"
          required
        ></textarea>
        <input
          type="text"
          placeholder="دسته بندی"
          required
        />
        <Button
          intent='primary'
          size='small'
          label='اظافه کردن بلاگ'
        />
      </form>
      <div className='admin-weblog-blogs'>
        <h2>لیست بلاگ ها</h2>
        <ul className="admin-weblog-blogs-items">
          {
            blogsQuery && blogsQuery.map((blogs, id) => {
              return (
                <li
                  key={id}
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
                      onClick={()=>navigate(`edit-blog/:${id}`)}
                    >
                      ویرایش
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteBlogMutation.mutate(id)}
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
  )

}

export default AdminWeblog;