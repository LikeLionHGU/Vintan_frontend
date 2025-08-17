import {
  MenuItem,
  Select as MuiSelect,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

export default function SubCategory({
  defaultText,
  value,
  onChange,
  categoryList,
  disabled,
  height,
}) {
  return (
    <Select
      disabled={disabled}
      value={value}
      onChange={onChange}
      displayEmpty
      renderValue={(selected) => {
        if (selected === "") {
          return <span style={{ color: "#000" }}>{defaultText}</span>;
        }
        return selected;
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: height,
            overflowY: "auto",
            border: "2px solid",
          },
        },
        MenuListProps: {
          // 리스트 여백 조절 등 필요하면 여기서
          sx: { py: 0 },
        },
        // 페이지 레이아웃 밀림 방지(선택): 모달 스크롤락 해제
        // disableScrollLock: true,
      }}
    >
      {categoryList &&
        categoryList.map((item) => (
          <StyledMenuItem value={item.middleDivision}>
            <Typography>{item.middleDivision}</Typography>
          </StyledMenuItem>
        ))}
    </Select>
  );
}

const Select = styled(MuiSelect)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[400],
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[800],
  },
  "& .MuiSelect-select": {
    padding: "8px 32px 8px 12px",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.grey[100],
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));
