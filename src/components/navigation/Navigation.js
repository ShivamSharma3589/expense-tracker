import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { 
  HomeFilled, 
  PlusCircleFilled,
  FileUnknownFilled,
  AndroidFilled,
} from '@ant-design/icons';

const Navigation = () => {
  return (
    <nav className='navigation-bar'>
      <ul>
        <li>
          <NavLink to='/' className="nav-item">
            <div className='icon-area'>
              <HomeFilled className='nav-icon' />
            </div>
            <div className='title'>
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-item">
            <div className='icon-area'>
              <FileUnknownFilled className='nav-icon' />
            </div>
            <div className='title'>
              Test
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="add" className="nav-item-center">
            <div className='center-icon-area'>
              <PlusCircleFilled className='nav-center-icon' />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-item">
            <div className='icon-area'>
              <FileUnknownFilled className='nav-icon' />
            </div>
            <div className='title'>
              Test
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="start" className="nav-item">
            <div className='icon-area'>
              <AndroidFilled className='nav-icon' />
            </div>
            <div className='title'>
              User
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;