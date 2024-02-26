import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import { produce } from 'immer';
import { apiLogin, updateMemberInfo } from '../apis/apiLogin';
import cookies from 'react-cookies';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UserContext from '../modules/UserContext';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectURL = searchParams.get('redirectURL') || '/';

  const userContext = useContext(UserContext);

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => {
          draft[e.target.name] = e.target.value.trim();
        }),
      ),
    [],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /* 필수 입력 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
      };
      /* 필수 입력 항목 E */

      const _errors = {};
      let hasErrors = false;

      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];
        if (!form[key] || !form[key].trim()) {
          _errors[key].push(value);
          hasErrors = true;
        }
      }

      setErrors(_errors);

      if (hasErrors) {
        return;
      }

      apiLogin(form)
        .then((token) => {
          cookies.save('token', token, {
            path: '/',
          });

          updateMemberInfo(userContext); // 회원정보, 로그인 상태, 관리자 여부 업데이트

          navigate(redirectURL);
        })
        .catch((err) => {
          _errors.global = _errors.global || [];
          _errors.global.push(err.messages);
          setErrors({ ..._errors });
        });
    },
    [form, t, navigate, redirectURL, userContext],
  );

  return (
    <>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
    </>
  );
};

export default React.memo(LoginContainer);
