import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import { FaHome, FaUser, FaCog, FaAlignLeft } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const {toggleSidebar} = useDashboardContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn'>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>Dashboard</h4>
        </div>
        <div className='btn-container'>
          toggle/logout
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
