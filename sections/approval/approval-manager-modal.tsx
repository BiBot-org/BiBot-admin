import { Box, MenuItem, Modal, Select } from "@mui/material";
import { SetStateAction } from "react";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}

export default function ApprovalManagerModal({
  openModal,
  setOpenModal,
}: Props) {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>거절 사유</h2>
        <Select>
          <MenuItem>거절사유 1</MenuItem>
          <MenuItem>거절사유 2</MenuItem>
          <MenuItem>거절사유 3</MenuItem>
        </Select>
      </Box>
    </Modal>
  );
}
