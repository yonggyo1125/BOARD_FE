import React, { useRef, useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import { SmallButton } from './ButtonStyle';
import { fileUpload } from '../apis/apiFile';
import color from '../../styles/color';
const { dark } = color;

const MessageBox = loadable(() => import('./MessageBox'));

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
  const [message, setMessage] = useState('');

  const onClick = useCallback(() => {
    const fileEl = document.createElement('input');
    fileEl.type = 'file';
    fileEl.multiple = !Boolean(single);
    fileEl.click();

    fileEl.addEventListener('change', (e) => {
      const files = e.target.files;
      console.log(files);
    });
  }, []);

  return (
    <>
      type && type === 'dragdrop' ? (<DragDropBox>{children}</DragDropBox>) : (
      <SmallButton type="button" onClick={onClick}>
        {children}
      </SmallButton>
      );
      {message && <MessageBox color="danger">{message}</MessageBox>}
    </>
  );
};

export default React.memo(FileUpload);
