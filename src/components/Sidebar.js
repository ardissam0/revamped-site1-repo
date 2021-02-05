import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/About">
        About
      </Link>

      <Link className="menu-item" to="/Contact">
        Contact
      </Link>
    </Menu>
  );
};

export default Sidebar;