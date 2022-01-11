import styled from "styled-components";
import { LIGHT_THEME } from "../../constants";
import SunIcon from "../../public/theme-switch.svg";
import css from "@styled-system/css";

const Container = styled.div`
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => (theme == LIGHT_THEME ? "#fff" : "#124")};
`;

const Logo = styled.h3`
  margin-left: 3%;
  cursor: pointer;
  max-width: 6%;

  &:hover {
    color: gray;
  }

  ${css({
    fontSize: ["30px", null, null, "40px"],
  })}
`;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 3%;
  width: 30vw;
`;

const NavOptions = styled.h3`
  cursor: pointer;

  &:hover {
    color: gray;
  }

  ${css({
    fontSize: ["5px", null, null, "20px"],
  })}
`;

const StyledSunIcon = styled(SunIcon)`
  cursor: pointer;
  color: ${({ theme }) => (theme == LIGHT_THEME ? "#000" : "#fff")};

  &:hover {
    color: gray;
  }
`;

interface Props {
  theme: any;
  changeTheme: () => void;
}

const Navbar: React.FC<Props> = ({ theme, changeTheme }) => {
  return (
    <Container theme={theme}>
      <Logo onClick={() => alert("hello")}>&lt;AJ/&gt;</Logo>
      <NavContainer>
        <NavOptions>About</NavOptions>
        <NavOptions>Skills</NavOptions>
        <NavOptions>Projects</NavOptions>
        <NavOptions>Contact</NavOptions>
        <StyledSunIcon theme={theme} onClick={changeTheme} />
      </NavContainer>
    </Container>
  );
};

export default Navbar;
