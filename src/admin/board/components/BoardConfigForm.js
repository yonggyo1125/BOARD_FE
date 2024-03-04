import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { TableCols } from '../../../commons/components/admin/TableStyle';
import { InputText } from '../../../commons/components/InputBoxStyle';

const FormBox = styled.form``;

const BoardConfigForm = () => {
  const { t } = useTranslation();

  return (
    <FormBox>
      <TableCols>
        <tr>
          <th>{t('게시판_아이디')}</th>
          <td>
            <InputText type="text" name="bid" />
          </td>
        </tr>
        <tr>
          <th>{t('게시판_이름')}</th>
          <td>
            <InputText type="text" name="bName" />
          </td>
        </tr>
        <tr>
          <th>{t('사용_여부')}</th>
          <td>

          </td>
        </tr>
      </TableCols>
    </FormBox>
  );
};

export default React.memo(BoardConfigForm);
