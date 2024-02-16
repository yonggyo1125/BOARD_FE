import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../../outlines/front/Header';
import Footer from '../../outlines/front/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
