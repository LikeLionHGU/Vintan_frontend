import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthWrapper";
import BasicModal from "../components/common/BasicModal";
import { Button, styled, Typography } from "@mui/material";
import { Vertical } from "../style/CommunalStyle";

export default function ProtectedRoute({ children }) {
  const { session } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // session 상태 변화에 따라 모달 열기/닫기
  useEffect(() => {
    // 세션이 없거나(expired) 비로그인 상태로 판별되면 모달 오픈
    const notLoggedIn = !session || session?.isLogin !== 1;

    setOpen(!!notLoggedIn);
  }, [session]);

  // 세션 없을 땐 children을 감추고 모달만 노출
  if (!session || session?.isLogin !== 1) {
    return (
      <>
        <BasicModal
          open={open}
          handleClose={() =>
            navigate("/login", {
              replace: true,
              state: {
                from: location.pathname + location.search + location.hash,
              },
            })
          }
          modalWidth="530px"
          modalHeight="240px"
        >
          <Vertical mt={3}>
            <Typography variant="h1" mb={1}>
              세션이 만료되었습니다
            </Typography>
            <Typography variant="h2" mb={6}>
              로그인 후 이용 가능합니다
            </Typography>
            <StyledButton
              onClick={() =>
                navigate("/login", {
                  replace: true,
                  state: {
                    from: location.pathname + location.search + location.hash,
                  },
                })
              }
            >
              <Typography variant="h2">로그인하러 가기</Typography>
            </StyledButton>
          </Vertical>
        </BasicModal>
      </>
    );
  }

  // 세션 있을 때만 보호된 화면 렌더
  return <>{children}</>;
}

const StyledButton = styled(Button)`
  color: white;
  background: #009c64;
  border-radius: 6px;
  padding: 8px 20px;
  cursor: pointer;
`;
