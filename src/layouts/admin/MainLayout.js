import React from 'react';
import styled from 'styled-components';
import AdminOnlyContainer from '../../commons/containers/AdminOnlyContainer';
import { Outlet } from 'react-router-dom';
import Header from '../../outlines/admin/Header';
import Side from '../../outlines/admin/Side';
import SubMenu from '../../outlines/admin/SubMenu';

const ContentBox = styled.main`
  display: flex;
  background: #f8f8f8;
  aside {
    width: 220px;
    background: #ccc;
  }

  section.main_content {
    flex-grow: 1;
  }
`;

const MainLayout = () => {
  return (
    <AdminOnlyContainer>
      <Header />
      <ContentBox>
        <Side />
        <section className="main_content">
          <SubMenu />
          <Outlet />
        </section>
      </ContentBox>
    </AdminOnlyContainer>
  );
};

export default React.memo(MainLayout);
