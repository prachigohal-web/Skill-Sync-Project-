import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Nav = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const { user, setUser } = useContext(AuthContext);

  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>

      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <Button onClick={() => setUser(null)}>Logout</Button>
      )}

      <Button onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </Button>
    </Nav>
  );
}