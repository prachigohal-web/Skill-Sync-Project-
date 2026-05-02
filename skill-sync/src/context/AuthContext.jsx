import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (u, p) => {
    if (u === "admin" && p === "1234") {
      setUser({ name: "Admin" });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}