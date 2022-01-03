import styled from "styled-components";
import SunIcon from "../../public/theme-switch.svg";

const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
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
`;

const Navbar = () => {
  return (
    <Container>
      <Logo onClick={() => alert("hello")}>&lt;AJ/&gt;</Logo>
      <NavContainer>
        <NavOptions>About</NavOptions>
        <NavOptions>Skills</NavOptions>
        <NavOptions>Projects</NavOptions>
        <NavOptions>Contact</NavOptions>
        <SunIcon />
      </NavContainer>
    </Container>
  );
};

export default Navbar;
