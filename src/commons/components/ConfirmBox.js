import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
const InnerBox = styled.div`
  .overlay {
    background: rgba(0, 0, 0, 0.7);
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
  return (
    <InnerBox>
      <Modal isOpen={open} style={customStyles} overlayClassName="overlay">
        <div>{children}</div>
      </Modal>
    </InnerBox>
  );
};

export default React.memo(ConfirmBox);
