import React from 'react';
import styled from 'styled-components';
import AdminOnlyContainer from '../../commons/containers/AdminOnlyContainer';
import { Outlet } from 'react-router-dom';
import Header from '../../outlines/admin/Header';
import Side from '../../outlines/admin/Side';
import SubMenu from '../../outlines/admin/SubMenu';

const ContentBox = styled.main``;

const MainLayout = () => {
  return (
    <AdminOnlyContainer>
      <Header />
      <ContentBox>
        <Side />
        <section>
          <SubMenu />
          <Outlet />
        </section>
      </ContentBox>
    </AdminOnlyContainer>
  );
};

export default React.memo(MainLayout);
