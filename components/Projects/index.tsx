import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Project2";
import {
  Tefi,
  Amazon,
  SmartSchool,
  Portfolio,
  Facebook_Solana,
} from "./ProjectsList";

const Container = styled.div`
  padding-top: 3%;
`;

const BodyTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 5%;
`;

interface Props {
  theme: string;
}

const Projects: React.FC<Props> = ({ theme }) => {
  return (
    <>
      <BodyTitle>View My Work</BodyTitle>
      <Container>
        <Project1 theme={theme} project={Tefi} />
        <Project2 theme={theme} project={Amazon} />
        <Project1 theme={theme} project={Portfolio} />
        <Project2 theme={theme} project={SmartSchool} />
        <Project1 theme={theme} project={Facebook_Solana} />
      </Container>
    </>
  );
};

export default Projects;
