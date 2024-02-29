import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';
import ConfirmBox from './ConfirmBox';

const Box = styled.div``;

const ImageBox = ({ image, thumb }) => {
  let imageUrl = thumb ? image.thumbUrl : image.fileUrl;
  imageUrl = imageUrl || image.fileUrl;

  // 파일 삭제
  const onClick = useCallback(() => {}, []);

  return (
    <Box>
      <FaWindowClose onClick={onClick} />
      <img src={imageUrl} alt="img" />
      <ConfirmBox open={true}>정말 삭제?</ConfirmBox>
    </Box>
  );
};

export default React.memo(ImageBox);
