import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import color from '../../styles/color';
import { fontSize } from '../../styles/size';

const { dark } = color;
const { medium } = fontSize;

const InnerBox = styled.div`
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .tit {
    color: ${dark};
    font-size: ${medium}rem;
    border-bottom: 1px solid ${dark};
    padding: 0 10px 10px;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .message {
    text-align: center;
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '350px',
    minHeight: '180px',
  },
};

const ConfirmBox = ({ open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const onClose = useCallback(() => setIsOpen(false), []);
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      overlayClassName="overlay"
      onRequestClose={onClose}
    >
      <InnerBox>
        <div className="tit">{t('확인하기')}</div>
        <FiX onClick={onClose} className="close" />
        <div className="message">{children}</div>
      </InnerBox>
    </Modal>
  );
};

export default React.memo(ConfirmBox);
