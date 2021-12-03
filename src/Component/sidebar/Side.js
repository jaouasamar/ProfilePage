import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Side.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        ABOUT ME
      </a>

      <a className="menu-item" href="/angular">
       PROJECTS
      </a>

      <a className="menu-item" href="/react">
        CONTACT
      </a>

      
    </Menu>
  );
};