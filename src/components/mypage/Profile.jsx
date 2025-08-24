import React from "react";
import { Vertical, VerticalBox } from "../../style/CommunalStyle";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import ProfileImg from "../../imgs/mypage/profile.svg";

export default function Profile({ data }) {
  return (
    <Container p={4}>
      <Typography variant="title2">프로필 정보</Typography>
      <Vertical>
        <Box component="img" src={ProfileImg} mt={4} />
        <Typography variant="h1" mt={2}>
          {data?.id}
        </Typography>
        <LogoutLink variant="caption2" mt={1}>
          로그아웃
        </LogoutLink>
        <div
          style={{ borderTop: "1px solid #ccc", width: "100%", height: "1px" }}
        />
        <Vertical gap={2} my={5}>
          <Grid container pl={2} width="100%">
            <Grid size={4}>
              <Typography variant="body1" className="category">
                이름
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1">{data?.name}</Typography>
            </Grid>
          </Grid>

          <Grid container pl={2} width="100%">
            <Grid size={4}>
              <Typography variant="body1" className="category">
                아이디
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1">{data?.id}</Typography>
            </Grid>
          </Grid>

          <Grid container pl={2} width="100%">
            <Grid size={4}>
              <Typography variant="body1" className="category">
                이메일
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1">{data?.email}</Typography>
            </Grid>
          </Grid>

          <Grid container pl={2} width="100%">
            <Grid size={4}>
              <Typography variant="body1" className="category">
                사업자번호
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1">{data?.businessNumber}</Typography>
            </Grid>
          </Grid>

          <ModifyButton sx={{ mt: 2 }}>
            <Typography variant="h2">정보 수정</Typography>
          </ModifyButton>
        </Vertical>
        <div
          style={{ borderTop: "1px solid #ccc", width: "100%", height: "1px" }}
        />
      </Vertical>
      <Typography variant="caption1" className="point" mt={4}>
        잔여 빈땅 포인트
      </Typography>
      <Typography variant="title2" mt={2.5}>
        5,000 포인트
      </Typography>
      <Vertical mt={4}>
        <ChargeButton>
          <Typography variant="h2">충전하기</Typography>
        </ChargeButton>
      </Vertical>
    </Container>
  );
}

const Container = styled(VerticalBox)`
  border-radius: 24px;
  background: var(--Gray-12, #fff);
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.15);

  .category {
    color: #999;
  }

  .point {
    color: #009c64;
    border-radius: 4px;
    background: #ddf6ed;
    width: fit-content;
    padding: 0 4px;
  }
`;

const LogoutLink = styled(Typography)`
  color: #666;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
  margin-bottom: 22px;
`;

const ModifyButton = styled(Button)`
  border-radius: 6px;
  background: transparent;
  border: 1px solid #009c64;
  color: #009c64;
  width: 200px;
`;

const ChargeButton = styled(ModifyButton)`
  border: 1px solid #009c64;
  background: #009c64;
  color: #fff;
`;
