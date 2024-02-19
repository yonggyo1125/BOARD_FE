import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputText } from '../../commons/components/InputBoxStyle';

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
    </form>
  );
};

export default React.memo(JoinForm);
