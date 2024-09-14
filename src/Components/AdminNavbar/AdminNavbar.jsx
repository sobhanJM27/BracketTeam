import React, { useState } from 'react';
import './AdminNavbar.css';
import { adminNavbarItems } from '../../Constants/navbarItems';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {

  const [activeItem, setActiveItem] = useState(1);

  const handleItem = (index) => {
    setActiveItem(index);
  }

  return (
    <div className="admin-navbar">
      <ul className='admin-navbar-items'>
        {
          adminNavbarItems.map((item) => {
            return (
              <li
                className="admin-navbar-items-item"
                key={item.id}
              >
                <NavLink
                  to={item.url}
                  onClick={() => handleItem(item.id)}
                  className={`admin-navbar-items-item-link ${activeItem === item.id ? 'admin-navbar-active' : ''}`}
                >
                  {item.title}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AdminNavbar;