import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllCategories, addCategory, editCategory, deleteCategory } from '../../API/Category';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import '../CSS/AdminCategories.css';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';

const AdminCategories = () => {

  const { token } = useAuth();
  const auth = useAuthHooks();
  const queryClient = useQueryClient();

  const [categoryData, setCategoryData] = useState({ fa: { titleFa: '' }, en: { titleEn: '' } });
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const { data: categories, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories(),
  });

  const addCategoryMutation = useMutation({
    mutationFn: (newCategory) => addCategory({ token, ...auth }, newCategory.fa.titleFa, newCategory.en.titleEn),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success('دسته بندی با موفقیت اظافه شد');
      setCategoryData({ fa: { titleFa: '' }, en: { titleEn: '' } });
    },
    onError: () => {
      toast.error('خطا در افزودن دسته بندی');
    },
  });

  const editCategoryMutation = useMutation({
    mutationFn: (updatedCategory) => editCategory({ token, ...auth }, editingCategoryId, updatedCategory.fa.titleFa, updatedCategory.en.titleEn),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success('دسته بندی با موفقیت ویرایش شد');
      setEditingCategoryId(null);
      setCategoryData({ fa: { titleFa: '' }, en: { titleEn: '' } });
    },
    onError: () => {
      toast.error('خطا در ویرایش دسته بندی');
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: (id) => deleteCategory({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success('دسته بندی با موفقیت حذف شد');
    },
    onError: () => {
      toast.error('خطا در حذف دسته بندی');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      fa: { titleFa: categoryData.fa.titleFa },
      en: { titleEn: categoryData.en.titleEn }
    };
    if (editingCategoryId) {
      editCategoryMutation.mutate(newCategory);
    } else {
      addCategoryMutation.mutate(newCategory);
    }
  };

  const handleEdit = (category) => {
    setEditingCategoryId(category._id);
    setCategoryData({
      fa: { titleFa: category.fa?.title || '' },
      en: { titleEn: category.en?.title || '' }
    });
  };

  const handleCategoryChange = (categoryId, lang, value) => {
    const updatedCategories = categories.map((category) => {
      if (category._id === categoryId) {
        return {
          ...category,
          [lang]: {
            ...category[lang],
            title: value,
          },
        };
      }
      return category;
    });
    setCategoryData(updatedCategories);
  };

  return (
    <div className="admin-categories">
      <h2>مدیریت دسته بندی ها</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryData.fa?.titleFa || ''}
          onChange={(e) => setCategoryData({ ...categoryData, fa: { titleFa: e.target.value } })}
          placeholder='نام دسته بندی'
          required
        />
        <input
          type="text"
          value={categoryData.en?.titleEn || ''}
          onChange={(e) => setCategoryData({ ...categoryData, en: { titleEn: e.target.value } })}
          placeholder='Name of category'
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          {editingCategoryId ? 'ویرایش دسته بندی' : 'اظافه کردن دسته بندی'}
        </button>
      </form>
      <WithLoaderAndError {...{ data: categories, isLoading, isError, error }}>
        <ul>
          {categories && categories.map((category) => (
            <li key={category._id}>
              <input
                type="text"
                value={category.fa?.title}
                onChange={(e) => handleCategoryChange(category._id, 'fa', e.target.value)}
              />
              <input
                type="text"
                value={category.en?.title}
                onChange={(e) => handleCategoryChange(category._id, 'en', e.target.value)}
              />
              <div>
                <button className="edit-btn" onClick={() => handleEdit(category)}>ویرایش</button>
                <button className="delete-btn" onClick={() => deleteCategoryMutation.mutate(category._id)}>حذف</button>
              </div>
            </li>
          ))}
        </ul>
      </WithLoaderAndError>
    </div>
  );
};

export default AdminCategories;
