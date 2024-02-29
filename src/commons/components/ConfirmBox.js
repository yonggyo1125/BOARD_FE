import React from 'react';
import Modal from 'react-modal';

const ConfirmBox = ({ open, children }) => {
  return (
    <Modal isOpen={open}>
      <div>{children}</div>
    </Modal>
  );
};

export default React.memo(ConfirmBox);
