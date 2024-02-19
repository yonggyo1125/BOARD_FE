import React, { useState, useCallback } from 'react';

import JoinForm from '../components/JoinForm';

const JoinContainer = () => {
  const [form, setForm] = useState({}); // 양식 항목 데이터

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

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
