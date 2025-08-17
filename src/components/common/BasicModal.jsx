// src/components/common/BasicModal.jsx
import React from "react";
import { Box, Button, Modal, styled } from "@mui/material";
import CloseIcon from "../../imgs/report/close.svg";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: "20px",
  outline: "none",
  maxHeight: "80vh",
  overflowY: "auto",
  minWidth: 520,
};

export default function BasicModal({
  open,
  handleClose,
  children,
  keepMounted = true,
  modalWidth,
  modalHeight,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      keepMounted={keepMounted} // 성능/포커스 유지에 유리
      disableScrollLock // 필요 시 스크롤 잠금 방지
    >
      <Box sx={{ ...modalStyle, width: modalWidth, height: modalHeight }}>
        <ClosButton onClick={handleClose}>
          <Box component="img" src={CloseIcon} />
        </ClosButton>
        {children}
      </Box>
    </Modal>
  );
}

const ClosButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;
