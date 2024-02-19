import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import JoinForm from '../components/JoinForm';

const JoinContainer = () => {
  const [form, setForm] = useState({}); // 양식 항목 데이터
  const [errors, setErrors] = useState({}); // 유효성 검사 실패시 필드, 메세지
  const { t } = useTranslation();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /* 필수 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요'),
        confirmPassword: t('비밀번호를 확인하세요.'),
        name: t('회원명을_입력하세요.'),
        agree: t('가입약관에_동의하세요.'),
      };
      /* 필수 항목 E */

      const _errors = {}; // 검증 실패시 담아주는 에러 객체

      /* 필수 항목 검증 S */
      for (let [key, value] of Object.entries(form)) {
        _errors[key] = _errors[key] || [];

        if (key !== 'agree') {
          value = value.trim();
        }

        if (!value) _errors[key].push(requiredFields[key]);
      }
      /* 필수 항목 검증 E */
    },
    [t, form],
  );

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value.trim() }));
  }, []);

  const onToggle = useCallback(
    () =>
      setForm((form) => {
        form.agree = form.agree || false;
        return { ...form, agree: !form.agree };
      }),
    [],
  );

  return (
    <JoinForm
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
      form={form}
    />
  );
};

export default React.memo(JoinContainer);
