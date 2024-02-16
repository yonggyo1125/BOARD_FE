import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.header`
  background: #fff;
`;

const Header = () => {
  return (
    <HeaderBox>
      <div className="layout-width"></div>
    </HeaderBox>
  );
};

export default React.memo(Header);
