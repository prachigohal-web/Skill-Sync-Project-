import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Navbar />
      <Outlet />
    </Container>
  );
}