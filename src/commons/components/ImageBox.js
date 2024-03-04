import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaWindowClose } from 'react-icons/fa';
import ConfirmBox from './ConfirmBox';

const Box = styled.div``;

const ImageBox = ({ image, thumb }) => {
  let imageUrl = thumb ? image.thumbUrl : image.fileUrl;
  imageUrl = imageUrl || image.fileUrl;

  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  // 파일 삭제
  const onClick = useCallback(() => setOpen(true), []);

  const onConfirm = useCallback(() => {
    console.log('확인');
  }, []);

  const onCancel = useCallback(() => setOpen(false), []);

  return (
    <Box>
      <FaWindowClose onClick={onClick} />
      <img src={imageUrl} alt="img" />
      {open && (
        <ConfirmBox open={open} onConfirm={onConfirm} onCancel={onCancel}>
          {t('정말_이미지를_삭제하겠습니까?')}
        </ConfirmBox>
      )}
    </Box>
  );
};

export default React.memo(ImageBox);
