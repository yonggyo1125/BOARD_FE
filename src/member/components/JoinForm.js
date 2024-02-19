import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { InputText, Textarea } from '../../commons/components/InputBoxStyle';
import { SubTitle } from '../../commons/components/TitleStyle';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';

const TermsBox = styled.div`
  margin: 10px 0;
  text-align: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    vertical-align: middle;
  }
`;

const JoinForm = () => {
  const { t } = useTranslation();

  return (
    <form>
      <InputText type="text" name="email" placeholder={t('이메일')} />
      <InputText type="password" name="password" placeholder={t('비밀번호')} />
      <InputText
        type="password"
        name="confirmPassword"
        placeholder={t('비밀번호_확인')}
      />
      <InputText type="text" name="name" placeholder={t('회원명')} />
      <SubTitle align="center">{t('가입약관')}</SubTitle>
      <Textarea>약관...</Textarea>
      <TermsBox>
        <FiSquare /> {t('가입약관에_동의합니다.')}
      </TermsBox>
    </form>
  );
};

export default React.memo(JoinForm);
