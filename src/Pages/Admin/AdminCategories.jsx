import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllCategories, addCategory, editCategory, deleteCategory } from '../../API/Category';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import '../CSS/AdminCategories.css';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';
import { withTranslation } from 'react-i18next';

const AdminCategories = ({ t }) => {

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
      toast.success(t('category.message1'));
      setCategoryData({ title: '' });
    },
    onError: () => {
      toast.error(t('category.error2'));
    },
  });

  const editCategoryMutation = useMutation({
    mutationFn: (updatedCategory) => editCategory({ token, ...auth }, editingCategoryId, updatedCategory.title),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success(t('category.message2'));
      setEditingCategoryId(null);
      setCategoryData({ title: '' });
    },
    onError: () => {
      toast.error(t('category.error2'));
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: (id) => deleteCategory({ token, ...auth }, id),
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success(t('category.message3'));
    },
    onError: () => {
      toast.error(t('category.error3'));
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
    <WithLoaderAndError {...{ categories, isLoading, isError, error }}>
      <div className="admin-categories">
        <h2>{t('category.title1')}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={categoryData.title}
            onChange={(e) => setCategoryData({ title: e.target.value })}
            placeholder={t('category.title2')}
            required
          />
          <button type="submit">
            {editingCategoryId ? t('category.edit') : t('category.add')}
          </button>
        </form>
        <ul>
          {categories && categories.map((category) => (
            <li key={category?.parentId}>
              <span>{category?.title}</span>
              <div>
                <button className="edit-btn" onClick={() => handleEdit(category)}>{t('admin.edit')}</button>
                <button className="delete-btn" onClick={() => deleteCategoryMutation.mutate(category._id)}>{t('admin.delete')}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </WithLoaderAndError>
  );
};

export default withTranslation()(AdminCategories);
