import { CreateNotice } from "@/service/notice/NoticeService";
import { NoticeDTO } from "@/types/notice/noticeType";
import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Divider,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useSession } from "next-auth/react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  isModify: boolean;
  notice?: NoticeDTO;
}

const NoticeModalCard = styled(Card)({
  minWidth: 400,
  maxWidth: 600,
});

export const NoticeContentModal = ({
  onClose,
  open,
  isModify,
  notice,
}: Props) => {
  const [noticeContent, setNoticeContent] = useState<NoticeDTO>(
    {} as NoticeDTO
  );
  const [readOnly, setReadOnly] = useState<boolean>(false);

  const session = useSession();

  useEffect(() => {
    if (isModify == true && notice) {
      setNoticeContent({ ...notice });
    } else {
      setNoticeContent({
        ...noticeContent,
        title: "",
        content: "",
        type: "",
      });
    }
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setNoticeContent({
        ...noticeContent,
        title: value,
      });
    } else if (name === "content") {
      setNoticeContent({
        ...noticeContent,
        content: value,
      });
    }
  };

  const handleChangeMenuItem = (e: SelectChangeEvent) => {
    const nextValue = e.target.value;
    setNoticeContent({ ...noticeContent, type: nextValue });
  };

  const onSubmitContent = () => {
    console.log(noticeContent);
    if (isModify === true) {
      console.log("수정");
    } else {
      CreateNotice({
        title: noticeContent.title,
        content: noticeContent.content,
        type: noticeContent.type,
      }).then(() => {
        alert("등록 되었습니다.");
        onClose(false);
      });
    }
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <NoticeModalCard>
        <CardHeader
          title={isModify ? "공지사항 수정" : "공지사항 작성"}
          subheader="공지사항 내용을 작성 해 주세요."
        />
        <Divider />

        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <TextField
                fullWidth
                name="title"
                label="제목"
                value={noticeContent.title}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid xs={4}>
              {" "}
              <Select
                fullWidth
                name="type"
                value={noticeContent.type}
                onChange={handleChangeMenuItem}
              >
                <MenuItem value="">공지타입</MenuItem>
                <MenuItem value={"COMMON"}>일반</MenuItem>
                <MenuItem value={"INSPECTION"}>긴급</MenuItem>
              </Select>
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                multiline
                name="content"
                label="내용"
                value={noticeContent.content}
                aria-readonly={true}
                maxRows={14}
                onChange={handleOnChange}
                inputProps={{
                  style: {
                    height: "400px",
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          {isModify &&
          session.data?.tokenInfo.id === noticeContent.createdBy ? (
            <Button variant="contained" onClick={onSubmitContent}>
              수정
            </Button>
          ) : (
            <Button variant="contained" onClick={onSubmitContent}>
              작성
            </Button>
          )}
          <Button variant="contained">삭제</Button>
        </CardActions>
      </NoticeModalCard>
    </Dialog>
  );
};
