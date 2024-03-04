import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FormBox = styled.form``;

const BoardConfigForm = () => {
  const { t } = useTranslation();

  return (
    <FormBox>
        
    </FormBox>
  );
};

export default React.memo(BoardConfigForm);
