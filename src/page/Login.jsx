import React from "react";
import LoginInput from "../components/common/LoginInput";

export default function Login() {
  return (
    <div>
      <LoginInput
        text={"이름"}
        isEssential={true}
        placeholder={"hello world"}
      />
    </div>
  );
}
