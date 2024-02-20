import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import { produce } from 'immer';

const LoginContainer = () => {
  const [form, setForm] = useState({});

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => (draft[e.target.name] = e.target.value.trim())),
      ),
    [],
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return <LoginForm onChange={onChange} onSubmit={onSubmit} form={form} />;
};

export default React.memo(LoginContainer);
