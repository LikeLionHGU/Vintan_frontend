// components/CommentsPanel.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { VerticalBox } from "../../../style/CommunalStyle";

const dummy = [
  {
    id: 101,
    userId: "expert",
    content: "장량동은 최근에 유동인구가 많이 늘어난 곳이라 괜찮아보여요.",
    date: "2024.08.21",
  },
  {
    id: 102,
    userId: "expert",
    content: "장량동은 최근에 유동인구가 많이 늘어난 곳이라 괜찮아보여요.",
    date: "2024.08.21",
  },
  {
    id: 103,
    userId: "expert",
    content: "장량동은 최근에 유동인구가 많이 늘어난 곳이라 괜찮아보여요.",
    date: "2024.08.21",
  },
];

const dummy2 = {
  title: "새로운 질문입니다.",
  content: "이 지역의 임대료는 어느정도 수준인가요?",
};

export default function Comments({ postId, open }) {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [comments, setComments] = useState([]);

  // 입력 상태
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const canSubmit = useMemo(
    () => author.trim().length > 0 && content.trim().length > 0,
    [author, content]
  );
  const [submitting, setSubmitting] = useState(false);

  // 열릴 때만 lazy-load
  useEffect(() => {
    if (!open || loaded || loading) return;
    (async () => {
      try {
        setLoading(true);
        setErr("");
        // const data = await fetchComments(postId);
        const data = dummy;
        setComments(data || []);
        setLoaded(true);
      } catch (e) {
        setErr(e.message || "불러오는 중 오류가 발생했어요");
      } finally {
        setLoading(false);
      }
    })();
  }, [open, loaded, loading, postId]);

  const handleAdd = async () => {
    if (!canSubmit || submitting) return;
    // 낙관적 업데이트
    const tempId = `temp-${Date.now()}`;
    const optimistic = {
      id: tempId,
      author: author.trim(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
      _optimistic: true,
    };
    setComments((prev) => [optimistic, ...prev]);
    setSubmitting(true);
    setErr("");

    try {
      // const saved = await createComment(postId, {
      //   author: optimistic.author,
      //   content: optimistic.content,
      // });
      const saved = dummy2;
      // temp 항목을 서버 응답으로 교체
      setComments((prev) => prev.map((c) => (c.id === tempId ? saved : c)));
      setAuthor("");
      setContent("");
    } catch (e) {
      // 실패 시 롤백
      setComments((prev) => prev.filter((c) => c.id !== tempId));
      setErr(e.message || "댓글 작성 실패");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container spacing={2}>
      {/* 입력 폼
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        <TextField
          label="작성자"
          size="small"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          sx={{ width: { xs: "100%", sm: 180 } }}
        />
        <TextField
          label="댓글 내용"
          size="small"
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && canSubmit) {
              handleAdd();
            }
          }}
          helperText="Cmd/Ctrl + Enter 로 등록"
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          disabled={!canSubmit || submitting}
        >
          {submitting ? "등록 중..." : "등록"}
        </Button>
      </Stack> */}

      <Divider />

      {/* 로딩/에러 */}
      {loading && (
        <Box display="flex" alignItems="center" gap={1}>
          <CircularProgress size={18} />
          <Typography variant="body2">댓글 불러오는 중…</Typography>
        </Box>
      )}
      {err && (
        <Typography color="error" variant="body2">
          {err}
        </Typography>
      )}

      {/* 댓글 리스트 */}
      {!loading && comments.length === 0 && (
        <Typography variant="body2" color="text.secondary">
          아직 댓글이 없어요.
        </Typography>
      )}

      <List disablePadding>
        {comments.map((c) => (
          <ListItem
            key={c.id}
            disableGutters
            sx={{
              opacity: c._optimistic ? 0.6 : 1,
              alignItems: "flex-start",
            }}
          >
            <ListItemText
              primary={
                <Stack direction="row" gap={1} alignItems="baseline">
                  <Typography fontWeight={600}>{c.author}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(c.createdAt).toLocaleString()}
                  </Typography>
                </Stack>
              }
              secondary={
                <Typography whiteSpace="pre-wrap">{c.content}</Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled(VerticalBox)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[50],
}));
