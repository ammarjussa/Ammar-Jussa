import styled from "styled-components";
import { css } from "styled-components";
import SunIcon from "../../public/theme-switch.svg";

const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h3`
  margin-left: 3%;
  cursor: pointer;
  font-size: 40px;
  max-width: 6%;

  &:hover {
    color: gray;
  }
`;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 3%;
  width: 30vw;
`;

const NavOptions = styled.h3`
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: gray;
  }

  ${css({
    color: "secondary",
  })}
`;

const StyledSunIcon = styled(SunIcon)`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

interface Props {
  changeTheme: () => void;
}

const Navbar: React.FC<Props> = ({ changeTheme }) => {
  return (
    <Container>
      <Logo onClick={() => alert("hello")}>&lt;AJ/&gt;</Logo>
      <NavContainer>
        <NavOptions>About</NavOptions>
        <NavOptions>Skills</NavOptions>
        <NavOptions>Projects</NavOptions>
        <NavOptions>Contact</NavOptions>
        <StyledSunIcon onClick={changeTheme} />
      </NavContainer>
    </Container>
  );
};

export default Navbar;
