import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinContainer from '../containers/JoinContainer';
import { MainTitle } from '../../commons/components/TitleStyle';

const JoinPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <MainTitle>{t('회원가입')}</MainTitle>
      <JoinContainer />
    </>
  );
};

export default React.memo(JoinPage);
