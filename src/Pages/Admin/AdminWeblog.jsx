import React from 'react';
import '../CSS/AdminWeblog.css';
import Button from '../../Components/Button/Button';

const AdminWeblog = () => {
  return (
    <div className="admin-weblog">
      <h1>مدیریت وبلاگ‌ها</h1>
      <form className="admin-weblog-form">
        <input type="file" placeholder='عکس بلاگ' />
        <input type="date" placeholder="تاریخ بلاگ" required />
        <input type="text" placeholder="عنوان بلاگ" required />
        <textarea placeholder='محتوای کوتاه بلاگ' required></textarea>
        <textarea placeholder="محتوای بلاگ" required></textarea>
        <Button
          intent='primary'
          size='small'
          label='اظافه کردن بلاگ'
        />
      </form>
      <div className='admin-weblog-blogs'>
        <h2>لیست بلاگ ها</h2>
        <ul className="admin-weblog-blogs-items">
          <li className="admin-weblog-blogs-items-item">
            <img src="" alt="blogImage" />
            <h3>عنوان وبلاگ ۱</h3>
            <span>تاریخ وبلاگ</span>
            <p>محتوای کوتاه وبلاگ</p>
            <p>محتوای وبلاگ ۱</p>
            <div className='admin-weblog-blogs-items-item-btn'>
              <button className="edit-btn">ویرایش</button>
              <button className="delete-btn">حذف</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default AdminWeblog;