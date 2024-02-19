import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { InputText, Textarea } from '../../commons/components/InputBoxStyle';
import { SubTitle } from '../../commons/components/TitleStyle';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { MediumButton } from '../../commons/components/ButtonStyle';

const TermsBox = styled.div`
  margin: 10px 0;
  text-align: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    vertical-align: middle;
  }
`;

const JoinForm = ({ onSubmit, onChange, onToggle, form, errors }) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <InputText
        type="text"
        name="email"
        placeholder={t('이메일')}
        onChange={onChange}
        value={form.email}
      />
      <InputText
        type="password"
        name="password"
        placeholder={t('비밀번호')}
        onChange={onChange}
        value={form.password}
      />
      <InputText
        type="password"
        name="confirmPassword"
        placeholder={t('비밀번호_확인')}
        onChange={onChange}
        value={form.confirmPassword}
      />
      <InputText
        type="text"
        name="name"
        placeholder={t('회원명')}
        onChange={onChange}
        value={form.name}
      />
      <SubTitle align="center" className="mt20">
        {t('가입약관')}
      </SubTitle>
      <Textarea>약관...</Textarea>
      <TermsBox onClick={onToggle}>
        {form.agree ? <FiCheckSquare /> : <FiSquare />}
        {t('가입약관에_동의합니다.')}
      </TermsBox>
      <MediumButton type="submit" bcolor="primary" fcolor="#fff">
        {t('가입하기')}
      </MediumButton>
    </form>
  );
};

export default React.memo(JoinForm);
