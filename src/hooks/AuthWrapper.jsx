import React, { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getSession } from "../api/common";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthWrapper({ children }) {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const session = await getSession();
      setSession(session.data);
    };
    checkLogin();
  }, [navigate]);

  if (session === null) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}
