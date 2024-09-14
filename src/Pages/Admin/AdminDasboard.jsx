import React from 'react';
import '../CSS/AdminLayout.css';
import { withTranslation } from 'react-i18next';

const AdminDasboard = ({ t }) => {
  return (
    <div className='admin-dashboard'>
      {t('admin.dashboard')}
    </div>
  )
}

export default withTranslation()(AdminDasboard);