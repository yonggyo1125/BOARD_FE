import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.png';
import { SmallButton } from '../../commons/components/ButtonStyle';
import UserContext from '../../member/modules/UserContext';

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
`;

const Header = () => {
  const { t } = useTranslation();
  const { state: isLogin } = useContext(UserContext);

  return (
    <HeaderBox>
      <Link to="/admin" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="links">
        {isLogin ? (
          <>
            <SmallButton width="120px" bcolor="primary" fcolor="#fff">
              {t('로그아웃')}
            </SmallButton>
          </>
        ) : (
          <>
            <Link to="/member/login">
              <SmallButton width="120px">{t('로그인')}</SmallButton>
            </Link>
            <Link to="/member/join">
              <SmallButton width="120px">{t('회원가입')}</SmallButton>
            </Link>
          </>
        )}
      </div>
    </HeaderBox>
  );
};

export default React.memo(Header);
