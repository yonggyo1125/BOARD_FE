import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AsideBox = styled.aside``;

const Side = () => {
  const { t } = useTranslation();

  return (
    <AsideBox>
      <NavLink to="/admin/config">{t('기본설정')}</NavLink>
      <NavLink to="/admin/member">{t('회원관리')}</NavLink>
      <NavLink to="/admin/board">{t('게시판_관리')}</NavLink>
    </AsideBox>
  );
};

export default React.memo(Side);
