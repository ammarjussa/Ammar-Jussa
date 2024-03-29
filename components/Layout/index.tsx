import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Navbar";

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const LayoutContainer = styled.div`
  min-height: 100vh;
  opacity: 0;
  animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;
  // margin-left: 20px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Body = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  theme: any;
  children: ReactNode;
  changeTheme: () => void;
}

const Layout: React.FC<Props> = ({ theme, children, changeTheme }) => {
  return (
    <LayoutContainer>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Body>{children}</Body>
    </LayoutContainer>
  );
};

export default Layout;
