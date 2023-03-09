/* eslint-disable */
import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Layout;
