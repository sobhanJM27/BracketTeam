import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllCategories, addCategory, editCategory, deleteCategory } from '../../API/Category';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import '../CSS/AdminCategories.css';

const AdminCategories = () => {
  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = useQueryClient();

  const [categoryData, setCategoryData] = useState({ title: '' });
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const { data: categories, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories(),
  });

  const addCategoryMutation = useMutation({
    mutationFn: (newCategory) => addCategory({ token, ...auth }, newCategory.title),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success("دسته‌بندی با موفقیت اضافه شد");
      setCategoryData({ title: '' });
    },
    onError: () => {
      toast.error("خطا در افزودن دسته‌بندی");
    },
  });

  const editCategoryMutation = useMutation({
    mutationFn: (updatedCategory) => editCategory({ token, ...auth }, editingCategoryId, updatedCategory.title),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success("دسته‌بندی با موفقیت ویرایش شد");
      setEditingCategoryId(null);
      setCategoryData({ title: '' });
    },
    onError: () => {
      toast.error("خطا در ویرایش دسته‌بندی");
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: (id) => deleteCategory({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success("دسته‌بندی با موفقیت حذف شد");
    },
    onError: () => {
      toast.error("خطا در حذف دسته‌بندی");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategoryId) {
      editCategoryMutation.mutate(categoryData);
    } else {
      addCategoryMutation.mutate(categoryData);
    }
  };

  const handleEdit = (category) => {
    setEditingCategoryId(category.parentId);
    setCategoryData({ title: category.title });
  };

  return (
    <div className="admin-categories">
      <h1>مدیریت دسته‌بندی‌ها</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryData.title}
          onChange={(e) => setCategoryData({ title: e.target.value })}
          placeholder="نام دسته‌بندی"
          required
        />
        <button type="submit">
          {editingCategoryId ? 'ویرایش دسته‌بندی' : 'اضافه کردن دسته‌بندی'}
        </button>
      </form>
      <ul>
        {categories && categories.map((category) => (
          <li key={category._id}>
            <span>{category.title}</span>
            <div>
              <button className="edit-btn" onClick={() => handleEdit(category)}>ویرایش</button>
              <button className="delete-btn" onClick={() => deleteCategoryMutation.mutate(category._id)}>حذف</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategories;
