import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { HomeTwoTone, PlusCircleTwoTone } from '@ant-design/icons';

const Navigation = () => {
  return (
    <nav className='navigation-bar'>
      <ul>
        <li>
          <NavLink>
            <div>
              <HomeTwoTone />
            </div>
            <div className='title'>
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div className='title'>
              Test
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div>
              <PlusCircleTwoTone />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div className='title'>
              Test
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div className='title'>
              Test
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;