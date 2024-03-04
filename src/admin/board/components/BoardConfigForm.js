import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { TableCols } from '../../../commons/components/admin/TableStyle';
import { InputText, Textarea } from '../../../commons/components/InputBoxStyle';
import { SubTitle } from '../../../commons/components/TitleStyle';
import { BigButton } from '../../../commons/components/ButtonStyle';

const FormBox = styled.form``;

const BoardConfigForm = () => {
  const { t } = useTranslation();

  return (
    <FormBox>
      <SubTitle>{t('일반설정')}</SubTitle>
      <TableCols className="mb30">
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

      <SubTitle>{t('분류설정')}</SubTitle>
      <TableCols className="mb30">
        <tr>
          <th>{t('분류')}</th>
          <td>
            <Textarea
              name="category"
              placeholder={t('분류가_여러개일때_줄개행하여_입력')}
            />
          </td>
        </tr>
      </TableCols>

      <SubTitle>{t('권한설정')}</SubTitle>
      <TableCols>
        <tr>
          <th>{t('글쓰기')}</th>
          <td>
            <span>
              <IoIosRadioButtonOff />
              {t('전체(비회원+회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('회원(회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('관리자')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('글목록')}</th>
          <td>
            <span>
              <IoIosRadioButtonOff />
              {t('전체(비회원+회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('회원(회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('관리자')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('글보기')}</th>
          <td>
            <span>
              <IoIosRadioButtonOff />
              {t('전체(비회원+회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('회원(회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('관리자')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('댓글')}</th>
          <td>
            <span>
              <IoIosRadioButtonOff />
              {t('전체(비회원+회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('회원(회원+관리자)')}
            </span>
            <span>
              <IoIosRadioButtonOff />
              {t('관리자')}
            </span>
          </td>
        </tr>
      </TableCols>
      <div class="btns">
        <BigButton type="reset">{t('다시입력')}</BigButton>
        <BigButton type="submit">{t('등록하기')}</BigButton>
      </div>
    </FormBox>
  );
};

export default React.memo(BoardConfigForm);
