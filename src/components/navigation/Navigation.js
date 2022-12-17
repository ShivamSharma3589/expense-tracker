import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { HomeTwoTone, PlusCircleTwoTone } from '@ant-design/icons';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>
            <div>
              <HomeTwoTone />
            </div>
            <div>
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink>
            Test
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
            Test
          </NavLink>
        </li>
        <li>
          <NavLink>
            Test
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;