import React from 'react';
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
  return type && type === 'dragdrop' ? (
    <DragDropBox>{children}</DragDropBox>
  ) : (
    <SmallButton>{children}</SmallButton>
  );
};

export default React.memo(FileUpload);
