import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { TableCols } from '../../../commons/components/admin/TableStyle';
import { InputText } from '../../../commons/components/InputBoxStyle';
import { SubTitle } from '../../../commons/components/TitleStyle';

const FormBox = styled.form``;

const BoardConfigForm = () => {
  const { t } = useTranslation();

  return (
    <FormBox>
      <SubTitle>{t('일반설정')}</SubTitle>
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
            <span>
              <IoIosRadioButtonOff /> {t('사용')}
            </span>
            <span>
              <IoIosRadioButtonOff /> {t('미사용')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('한페이지_게시글_수')}</th>
          <td>
            <InputText type="number" name="pagePerRows" />
          </td>
        </tr>
        <tr>
          <th>{t('페이지_구간_갯수')}</th>
          <td>
            <InputText type="number" name="pageRanges" />
          </td>
        </tr>
      </TableCols>

      
    </FormBox>
  );
};

export default React.memo(BoardConfigForm);
