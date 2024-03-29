import { useState } from "react";
import styled from "styled-components";
import { LIGHT_THEME } from "../../constants";
import SunIcon from "../../public/theme-switch.svg";
import css from "@styled-system/css";
import Link from "next/link";

const Container = styled.header`
  height: 66px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  overflow-y: hidden;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => (theme == LIGHT_THEME ? "#fff" : "#124")};

  @media only screen and (max-width: 900px) {
    position: unset;
  }
`;

const Logo = styled.h3`
  margin-left: 3%;
  cursor: pointer;
  max-width: 6%;

  &:hover {
    color: gray;
  }

  ${css({
    mt: ["30px", null, "50px"],
    fontSize: ["30px", null, "40px"],
  })}
`;

const NavContainer = styled.nav`
  @media only screen and (max-width: 900px) {
    position: absolute;
    top: 60px;
    left: ${(props: { open: boolean }) => (props.open ? "0%" : "-150%")};
    z-index: 10;
    width: 100vw;
    background-color: ${({ theme }) =>
      theme === LIGHT_THEME ? "#f5f5f5" : "#000"};
  }

  ${css({
    fontSize: ["20px", null, null, "30px"],
  })}
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 900px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const NavOptions = styled.li`
  cursor: pointer;
  list-style: none;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) =>
      theme === LIGHT_THEME ? "#000" : "#fff"} !important;
    padding: 16px;
    display: inline-block;
    font-size: 18px;
    font-weight: 900;
    transition: all 0.3s;

    &:hover {
      color: gray !important;
    }

    @media only screen and (max-width: 900px) {
      font-size: 29px;
      display: block;
      color: #fff;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
  }

  ${css({
    fontSize: ["5px", null, null, "20px"],
  })}
`;

const StyledSunIcon = styled(SunIcon)`
  cursor: pointer;
  color: ${({ theme }) => (theme == LIGHT_THEME ? "#000" : "#fff")} !important;
  width: 25px;
  height: 25px;
  transition: all 0.3s;

  &:hover {
    color: gray !important;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: block;
    cursor: pointer;
    padding-right: 20px;
  }
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${({ theme }) => (theme === LIGHT_THEME ? "#000" : "#fff")};
  margin-bottom: 5px;
  border-radius: 5px;
`;

interface Props {
  theme: any;
  changeTheme: () => void;
}

const Navbar: React.FC<Props> = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container theme={theme}>
      <Logo onClick={() => (window.location.href = "#")}>&lt;AJ/&gt;</Logo>
      <NavContainer theme={theme} open={open}>
        <Nav>
          <NavOptions theme={theme}>
            <a href="#">Home</a>
          </NavOptions>
          <NavOptions theme={theme}>
            <Link href="#about">
              <a onClick={() => (window.location.href = "#about")}>About</a>
            </Link>
          </NavOptions>
          <NavOptions theme={theme}>
            <a href="#skills">Skills</a>
          </NavOptions>
          <NavOptions theme={theme}>
            <a href="#projects">Projects</a>
          </NavOptions>
          <NavOptions theme={theme}>
            <a href="#contact">Contact</a>
          </NavOptions>

          <NavOptions theme={theme}>
            <StyledSunIcon theme={theme} onClick={changeTheme} />
          </NavOptions>
        </Nav>
      </NavContainer>
      <Hamburger onClick={() => setOpen(!open)}>
        <Line theme={theme} />
        <Line theme={theme} />
        <Line theme={theme} />
      </Hamburger>
    </Container>
  );
};

export default Navbar;
