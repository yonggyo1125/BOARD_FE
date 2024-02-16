import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUserPlus } from 'react-icons/fa';
import { FiLogIn, FiSearch } from 'react-icons/fi';
import logo from '../../images/logo.png';

const HeaderBox = styled.header`
  background: #fff;

  .layout-width {
    display: flex;
    align-items: center;
    height: 115px;

    .logo,
    form,
    .links {
      flex-grow: 1;
      width: 0;
    }

    form {
      text-align: center;
    }

    .links {
      text-align: right;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderBox>
      <div className="layout-width">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <form>
          <input type="text" name="skey" placeholder={t('검색어_입력')} />
          <button type="submit">
            <FiSearch />
          </button>
        </form>

        <div class="links">
          <Link to="/member/login">
            <FiLogIn />
          </Link>
          <Link to="/member/join">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </HeaderBox>
  );
};

export default React.memo(Header);
