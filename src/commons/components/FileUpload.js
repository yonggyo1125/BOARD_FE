import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { SmallButton } from './ButtonStyle';
import { fileUpload } from '../apis/apiFile';
import color from '../../styles/color';
const { dark } = color;

const DragDropBox = styled.div`
  border: 1px dashed ${dark};
  text-align: center;
  padding: 70px 10px;
  color: ${dark};
`;

const FileUpload = ({
  gid,
  location,
  imageOnly,
  single,
  onSuccess,
  onFailure,
  type,
  children,
}) => {
  const onClick = useCallback(() => {
    const fileEl = document.createElement('input');
    fileEl.type = 'file';
    fileEl.click();
  }, []);

  return type && type === 'dragdrop' ? (
    <DragDropBox>{children}</DragDropBox>
  ) : (
    <SmallButton type="button" onClick={onClick}>
      {children}
    </SmallButton>
  );
};

export default React.memo(FileUpload);
