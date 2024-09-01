import React from 'react';
import '../CSS/AdminLayout.css';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <AdminNavbar />
            <div className="admin-layout-outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout